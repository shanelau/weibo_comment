weibo_comment
=============

使用 nodejs 开发的 基于新浪微博开放平台的评论数据设备分析系统 


##  快速开始
```
npm install 
node xx.js
```
## 注意
1、  [授权机制](http://open.weibo.com/wiki/%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6)  
访问新浪微博的数据接口需要 使用OAuth 2.0 的授权机制，获取到 access_token  详细:[授权机制](http://open.weibo.com/wiki/%E6%8E%88%E6%9D%83%E6%9C%BA%E5%88%B6)  

我会在另外一篇博客介绍，非线上的环境怎么使用微博的认证授权机制，开发者在本地就可以访问微博API 

如果你很急 需要一个 access_token，那就给我发邮件吧  kissliux@qq.com    

2、 评论抓取的api

```
https://api.weibo.com/2/comments/show.json
```

3、 关键字过滤

是否要过过滤出来一些评论
```
 filterWord = '1799',
  openFiter =  true  ;//ture 为开启关键字过滤
```

##  结果展示
抓取了一条微博做测试，
[罗永浩的一条微博](http://weibo.com/1640571365/BlchLDEkH?mod=weibotime)

```

只看 魅族和小米的数据

抓取的所有评论数量 1202
45  占比     3.74 %     MEIZU MX
66  占比     5.49 %     小米
1091  占比     90.77 %     其他



所有评论的客户端设置统计，

评论总数 :1214
抓取的所有评论数量 1202
69  占比     5.74 %     iPhone 5s
9  占比     0.75 %     荣耀3C
45  占比     3.74 %     MEIZU MX
300  占比     24.96 %     微博 weibo.com
5  占比     0.42 %     三星Galaxy NOTE III
11  占比     0.92 %     小米手机3
154  占比     12.81 %     iPhone客户端
279  占比     23.21 %     微博手机版
8  占比     0.67 %     UC浏览器
2  占比     0.17 %     三星Galaxy SIII
57  占比     4.74 %     Android客户端
1  占比     0.08 %     360安全浏览器
9  占比     0.75 %     Weico.Android
11  占比     0.92 %     小米手机2
5  占比     0.42 %     HTC新渴望8系
30  占比     2.50 %     Smartisan T1
2  占比     0.17 %     一加手机 不将就
13  占比     1.08 %     三星GALAXY S4
2  占比     0.17 %     荣耀6
5  占比     0.42 %     Weico.iPhone
40  占比     3.33 %     iPad客户端
4  占比     0.33 %     索尼Xperia S LT26i
5  占比     0.42 %     New HTC One
8  占比     0.67 %     红米手机
2  占比     0.17 %     HTC One (M8)
5  占比     0.42 %     WeicoPro
3  占比     0.25 %     三星Galaxy Note II
30  占比     2.50 %     小米手机2S
3  占比     0.25 %     UC浏览器Android版
5  占比     0.42 %     新浪微博4G版
1  占比     0.08 %     VVebo
1  占比     0.08 %     联想智能手机客户端
4  占比     0.33 %     红米Note
5  占比     0.42 %     小米手机1S
2  占比     0.17 %     小米手机2A
2  占比     0.17 %     BlackBerry 10
1  占比     0.08 %     搜狗高速浏览器
5  占比     0.42 %     Windows.Phone客户端
3  占比     0.25 %     荣耀3X畅玩版
3  占比     0.25 %     微博桌面
1  占比     0.08 %     vivo Xshot
1  占比     0.08 %     索尼Xperia P LT22i
1  占比     0.08 %     LG_Phone
6  占比     0.50 %     小米手机
1  占比     0.08 %     nubia Z5 mini
1  占比     0.08 %     索尼Xperia Z1
1  占比     0.08 %     百度ROM
11  占比     0.92 %     手机微博触屏版
3  占比     0.25 %     三星android智能手机
1  占比     0.08 %     Smooth
1  占比     0.08 %     OPPO Finder
2  占比     0.17 %     OPPO Find 7
1  占比     0.08 %     Fuubo.Meizu
1  占比     0.08 %     中国移动三星galaxyS3
1  占比     0.08 %     三星 GALAXY S5
1  占比     0.08 %     三星Galaxy_SII
1  占比     0.08 %     WeiboPro
2  占比     0.17 %     华为Ascend P6
1  占比     0.08 %     荣耀3X
1  占比     0.08 %     UC浏览器iPhone版
1  占比     0.08 %     小米平板
1  占比     0.08 %     中国移动定制终端
1  占比     0.08 %     vivo智能手机
1  占比     0.08 %     Flyme客户端
1  占比     0.08 %     红米Note 4G
1  占比     0.08 %     诺基亚Lumia900
2  占比     0.17 %     nubia Z5S mini
2  占比     0.17 %     Fuubo
1  占比     0.08 %     酷派大神
1  占比     0.08 %     索尼Xperia Z1 4G LTE
1  占比     0.08 %     华为Ascend手机
1  占比     0.08 %     微博Win8客户端

```

## 评论包含1799统计
```

只看 魅族和小米的数据


抓取的所有评论数量 340
18  占比     5.29 %     MEIZU MX
18  占比     5.29 %     小米
187  占比     55.00 %     微博客户端和网页
117  占比     34.41 %     其他







抓取的所有评论数量 340
17  占比     5.00 %     iPhone 5s
113  占比     33.24 %     微博 weibo.com
18  占比     5.29 %     MEIZU MX
2  占比     0.59 %     Weico.Android
42  占比     12.35 %     iPhone客户端
2  占比     0.59 %     UC浏览器
1  占比     0.29 %     一加手机 不将就
69  占比     20.29 %     微博手机版
9  占比     2.65 %     iPad客户端
2  占比     0.59 %     WeicoPro
11  占比     3.24 %     Android客户端
2  占比     0.59 %     三星Galaxy Note II
2  占比     0.59 %     荣耀3C
4  占比     1.18 %     新浪微博4G版
1  占比     0.29 %     联想智能手机客户端
1  占比     0.29 %     HTC新渴望8系
2  占比     0.59 %     红米Note
3  占比     0.88 %     红米手机
4  占比     1.18 %     小米手机2
2  占比     0.59 %     小米手机1S
2  占比     0.59 %     New HTC One
4  占比     1.18 %     小米手机3
6  占比     1.76 %     小米手机2S
1  占比     0.29 %     索尼Xperia P LT22i
3  占比     0.88 %     三星GALAXY S4
7  占比     2.06 %     Smartisan T1
1  占比     0.29 %     百度ROM
1  占比     0.29 %     OPPO Finder
1  占比     0.29 %     手机微博触屏版
1  占比     0.29 %     中国移动三星galaxyS3
1  占比     0.29 %     三星Galaxy_SII
2  占比     0.59 %     小米手机
1  占比     0.29 %     三星Galaxy NOTE III
1  占比     0.29 %     Flyme客户端
1  占比     0.29 %     nubia Z5S mini


[ { userId: 'Noisy在成都', text: '1799', source: 'iPhone 5s' },
  { userId: '西尔赛斯', text: '1799秒杀你', source: 'iPhone 5s' },
  { userId: 'wengyao', text: 'mx4 1799', source: 'iPhone 5s' },
  { userId: '这是个很土的名字', text: '1799', source: 'iPhone 5s' },
  { userId: '都敏君的爸比', text: '1799', source: 'iPhone 5s' },
  { userId: 'Solobird刘',
    text: '老罗别怕1799,实在不行咱还可以做手机贴膜嘛～ //@罗永浩:人的一辈子也是这样[挤眼]',
    source: 'iPhone 5s' },
  { userId: '楊文豪Horace', text: '1799', source: 'iPhone 5s' },
  { userId: '你是我最深处最压抑的秘密', text: '1799', source: 'iPhone 5s' },
  { userId: '_Sinnnnnnnnnnn',
    text: '1799[赞]',
    source: 'iPhone 5s' },
  { userId: 'enjoyshao',
    text: '情怀魅族4，1799。。。虽然没有情怀螺丝刀，情怀小螺丝！但我觉得魅族4很情怀，你那是假情怀！人家魅族才是真情怀！[酷]',
    source: 'iPhone 5s' },
  { userId: '千重夜', text: '[嘻嘻]1799', source: 'iPhone 5s' },
  { userId: '瑋瑋Will不喜欢和没礼貌的人说话',
    text: '1799',
    source: 'iPhone 5s' },
  { userId: 'hikaru-monotachi', text: '1799', source: 'iPhone 5s' },
  { userId: '我不是聪哥-', text: '1799', source: 'iPhone 5s' },
  { userId: 'KH小哥',
    text: '给我一个锤子售价超过1799的理由！！[doge][doge][doge]@罗永浩',
    source: 'iPhone 5s' },
  { userId: 'WangDoooo',
    text: '照理说魅族这么牛逼的配置卖1799难道是好事吗？国产机这种价格战到底要打到什么时候…',
    source: 'iPhone 5s' },
  { userId: '都敏君的爸比',
    text: '哈哈，老罗再关注8个人，你的关注人数就变1799了。[哈哈][哈哈]',
    source: 'iPhone 5s' } ]
    
    
    还省略了很多很多。。。
```