/**
 * Created by liuxing on 14-9-17.
 */
var request         = require('request'),
    weiUrl          = require('../core/config/api_weibo'),
    when            = require('when'),
    _               = require('lodash'),
    async           = require('async'),
    access_token    = '2.00IfZPzC1am4YB9f6a6ada02bxDNeC',
    weibiId         = 'Blf0XBux4',    //例如   http://weibo.com/2202387347/Blf0XBux4?mod=weibotime#_rnd1410955374003
    requestCount    = 200,  //最多 2000
    sources         = [],  //所有微博评论来源
    weibos          = [],
    commentsCount;
    filterWord      = '1799',
    openFiter       =  true  ;//ture 为开启关键字过滤

/**
 *
 * @param weiboId 微博的id
 * @param page   页号
 * @returns {Promise}
 */
function comments(weiboId, page) {
    var defer = when.defer();
    var data = {
        url: weiUrl.comments.show,
        qs: {
            id: weiboId,
            access_token: access_token,
            count: requestCount,
            page: page
        }
    };
    request(data, function (error, response, body) {
        //console.log(JSON.parse(body));
        defer.resolve(JSON.parse(body));
    });
    return defer.promise;
}

/**
 *通过微博（评论、私信）MID获取其ID
 * @param mid  原始微博id  见url
 * @returns {Promise}
 */
function queryid(mid) {
    var defer = when.defer();
    var data = {
        url: weiUrl.statuses.queryid,
        qs: {
            mid: mid,
            type: 1,
            access_token: access_token,
            isBase62: 1
        }
    };
    request(data, function (error, response, body) {
        return defer.resolve(JSON.parse(body));
    });
    return defer.promise;
}
/**
 * 或者 该微博所有评论信息
 * @param weiboId
 */
function getCommentsInfo(weiboId) {
    comments(weiboId, 1).then(function (result) {
        //console.log(result);
        filterData(result);
        commentsCount = result.total_number;
        //检测是否需要遍历
        if (result.next_cursor == 0) {  //  没有下一页
            console.log('评论总数 :' + commentsCount);
            analysis(weibos);
            return;
        } else {
            var pageNum = parseInt(result.total_number / requestCount)+1;
            console.log('一共 %s 数据，每页 %s 条数据，一共 %s 页 ',commentsCount,requestCount,pageNum);
            for (var i = 2; i <= pageNum; i++) {    //从第二页开始
                var data = {
                    weiboId: weiboId,
                    page: i
                };

                work.push(data, function () {

                });
            }
        }

    });
}
/**
 * 抓取到的微博评论列表，
 * 过滤某些数据
 * @param result
 */
function filterData(result){
    var comments = result.comments;
    _.forEach(comments, function (item) {
        var source = item.source.replace(/<\/?[^>]+>/gi, "");
        var weibo = {
            userId : item.user.name,
            text : item.text,
            source: source
        };
        if(openFiter){   //过滤 关键字功能 是否打开
            if( weibo.text.indexOf(filterWord) > -1) {
                if (_.indexOf(sources, source) == -1) {
                     sources.push(source);
                }
                weibos.push(weibo);
            }
        }else{
            weibos.push(weibo);
        }
    });
}
function analysis(weibos) {
    console.log('抓取的所有评论数量 %s',weibos.length);
    var result = _.groupBy(weibos, function (weibo) {
        return weibo.source
    });
    var clientLength = weibos.length;
    _.forEach(sources, function (source) {
        console.log(result[source].length+'  占比     %s % '+'    '+source ,(result[source].length * 100 / clientLength).toFixed(2));
    });

    console.log('####################');
    console.log('包含1799的评论');
    _.forEach(sources, function (source) {
        console.log(result[source]);
    });
}


//抓取其他页面的工作队列
var work = async.queue(function (task, callback) {
    comments(task.weiboId, task.page).then(function (result) {
        filterData(result);  //过滤和组装数据
        console.log('task %s 完成,当前的评论数量为 %s',task.page,weibos.length);
    }).then(function () {
        callback('finish page num:' + task.page);
    });
}, 1);


work.drain = function () {
    console.log('评论总数 :' + commentsCount);
    analysis(weibos);
    console.log('all items have been processed');
};

queryid(weibiId).then(function (data) {
    getCommentsInfo(data.id);
});