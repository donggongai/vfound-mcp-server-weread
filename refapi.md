## 获取书架所有书籍信息
Request:https://weread.qq.com/web/shelf/sync
Response:

```json
{
  "pureBookCount": 369,
  "bookCount": 369,
  "bookProgress": [  // 所有书籍的阅读进度信息
    {
      "bookId": "25462590",
      "progress": 0,
      "chapterUid": 33,
      "chapterOffset": 2239,
      "chapterIdx": 33,
      "appId": "3353137241554521178831221182",
      "updateTime": 1630036453,
      "readingTime": 905,
      "synckey": 1533826208
    },
    {
      "bookId": "674048",
      "progress": 100,
      "chapterUid": -2147473635,
      "chapterOffset": 0,
      "chapterIdx": 0,
      "appId": "3353137241554521178831221182",
      "updateTime": 1691553901,
      "readingTime": 60937,
      "synckey": 622417344
    },
    {...}
  ],
  "synckey": 1746615117,
  "removed": [],
  "lectureRemoved": [],
  "archive": [  //书架的书单分类（每个书单下的bookIds就是这个书单下的书籍id）
    {
      "archiveId": 1577525704,
      "name": "思考与生活",
      "bookIds": [
        "3300038402",
        "CB_7ZE2uC2tpC4r6of6okE7DDuH",
        "26934843",
        "27371794",
        "22297605",
        "40457732",
        "3300048761",
        "695126",
        "635922",
        "22717294",
        "3300102987",
        "31144247",
        "32307641",
        "30914575",
        "27256052",
        "926781",
        "924614",
        "921080",
        "26406758",
        "856239",
        "30730465",
        "3300079777",
        "857527",
        "30887804",
        "837932",
        "908161",
        "26307930",
        "921568",
        "921826",
        "41147996",
        "41521586",
        "216212",
        "3300056238",
        "3300018688",
        "3300050528",
        "23723810",
        "23691233",
        "44000669",
        "916688",
        "CB_FjNDOrDPjB4g6Xu6YI",
        "237732",
        "42766056",
        "39136896",
        "855327"
      ],
      "removed": [],
      "lectureBookIds": [],
      "lectureRemoved": []
    },
    {
      "archiveId": 1584375687,
      "name": "思维能力",
      "bookIds": [
        "909892",
        "566431",
        ...]
    }
  ],
  "removedArchive": [],
  "books": [   //所有书籍详细信息
    {
      "bookId": "3300079777",
      "title": "佛陀之心",
      "author": "一行禅师",
      "translator": "方怡蓉",
      "cover": "https://cdn.weread.qq.com/weread/cover/38/cpplatform_1efkwdszvystemugkexfxd/t6_cpplatform_1efkwdszvystemugkexfxd1701138290.jpg",
      "version": 184669923,
      "format": "epub",
      "type": 0,
      "price": 21.99,
      "originalPrice": 0,
      "soldout": 0,
      "bookStatus": 1,
      "payingStatus": 2,
      "payType": 1048577,
      "lastChapterCreateTime": 1701138295,
      "centPrice": 2199,
      "finished": 1,
      "maxFreeChapter": 9,
      "maxFreeInfo": {
        "maxFreeChapterIdx": 9,
        "maxFreeChapterUid": 9,
        "maxFreeChapterRatio": 30
      },
      "free": 0,
      "mcardDiscount": 0,
      "ispub": 1,
      "extra_type": 7,
      "updateTime": 1701206578,
      "publishTime": "2010-10-01 00:00:00",
      "category": "哲学宗教-宗教",
      "categories": [
        {
          "categoryId": 600000,
          "subCategoryId": 600010,
          "categoryType": 0,
          "title": "哲学宗教-宗教"
        },
        {
          "categoryId": 1000000,
          "subCategoryId": 1000003,
          "categoryType": 0,
          "title": "个人成长-情绪心灵"
        }
      ],
      "hasLecture": 0,
      "lastChapterIdx": 34,
      "paperBook": {
        "skuId": ""
      },
      "copyrightChapterUids": [2],
      "blockSaveImg": 1,
      "language": "zh",
      "isTraditionalChinese": false,
      "hideUpdateTime": false,
      "isEPUBComics": 0,
      "isVerticalLayout": 0,
      "isShowTTS": 1,
      "webBookControl": 0,
      "selfProduceIncentive": false,
      "isAutoDownload": 1,
      "showLectureButton": 1,
      "secret": 0,
      "readUpdateTime": 1741506226,
      "finishReading": 1,
      "paid": 1
    },
    {
      "bookId": "921826",
      "title": "心流：最优体验心理学",
      "author": "米哈里·契克森米哈赖",
      "translator": "张定绮",
      "cover": "https://wfqqreader-1252317822.image.myqcloud.com/cover/826/921826/t6_921826.jpg",
      "version": 303293008,
      "format": "epub",
      "type": 0,
      "price": 29.4,
      "originalPrice": 0,
      "soldout": 0,
      "bookStatus": 1,
      "payingStatus": 2,
      "payType": 1048577,
      "lastChapterCreateTime": 1681145102,
      "centPrice": 2940,
      ...
      }
  ],
  "lectureBooks": [],
  "lectureSynckey": 1746623623,
  "lectureUpdate": [],
  "mp": {    //微信公众号
    "show": 1,
    "book": {
      "bookId": "mpbook",
      "title": "文章收藏",
      "cover": "https://weread-1258476243.file.myqcloud.com/app/assets/bookcover/book_cover_app_favorite_articles.png",
      "secret": 1,
      "payType": 32,
      "paid": 0,
      "updateTime": 1629705470,
      "readUpdateTime": 0,
      "isTop": false
    }
  }
```



## 获取有阅读笔记的书籍清单

其中sort 是该本书最后笔记更新时间

Request:https://weread.qq.com/api/user/notebook
Response:

```json
{
  "synckey": 1743773721,
  "totalBookCount": 208,
  "noBookReviewCount": 0,
  "books": [
    {
      "bookId": "27416212",
      "book": {
        "bookId": "27416212",
        "title": "隐藏的自我",
        "author": "大卫·伊格曼　",
        "translator": "钱静",
        "cover": "https://cdn.weread.qq.com/weread/cover/83/YueWen_27416212/s_YueWen_27416212.jpg",
        "version": 56464877,
        "format": "epub",
        "type": 0,
        "price": 39.9,
        "originalPrice": 0,
        "soldout": 0,
        "bookStatus": 1,
        "payingStatus": 2,
        "payType": 1048577,
        "centPrice": 3990,
        "finished": 1,
        "free": 0,
        "mcardDiscount": 0,
        "ispub": 1,
        "extra_type": 1,
        "cpid": 4789723,
        "publishTime": "2019-12-19 00:00:00",
        "categories": [
          {
            "categoryId": 1500000,
            "subCategoryId": 1500003,
            "categoryType": 0,
            "title": "科学技术-科学科普"
          }
        ],
        "hasLecture": 1,
        "lastChapterIdx": 58,
        "paperBook": {
          "skuId": "12610905"
        },
        "copyrightChapterUids": [2],
        "blockSaveImg": 0,
        "language": "zh",
        "isTraditionalChinese": false,
        "hideUpdateTime": false,
        "isEPUBComics": 0,
        "isVerticalLayout": 0,
        "isShowTTS": 1,
        "webBookControl": 0,
        "selfProduceIncentive": false,
        "isAutoDownload": 1
      },
      "reviewCount": 4,
      "reviewLikeCount": 0,
      "reviewCommentCount": 0,
      "noteCount": 42,
      "bookmarkCount": 0,
      "sort": 1743738132
    },
    ... //其他book信息
    ]
}
```



## 获取书籍详情
### Request

https://weread.qq.com/api/book/info?bookId=27416212

### Response

```json
{
  "bookId": "29599977",
  "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
  "author": "迪莉娅·欧文斯",
  "translator": "王泽林",
  "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/t6_YueWen_29599977.jpg",
  "version": 1187272633,
  "format": "epub",
  "type": 0,
  "price": 41.99,
  "originalPrice": 0,
  "soldout": 0,
  "bookStatus": 1,
  "payingStatus": 2,
  "payType": 1048577,
  "intro": "家人一个接一个离开。从十岁起，她就独自生活在北卡罗来纳州海滨荒凉的湿地中，驾着小船，靠猎捕和收集野物卖给码头的人维生。她只上过一天学，是小镇居民口中的“湿地女孩”，文明社会之外的野姑娘。当镇上最受欢迎的花花公子被发现死在湿地中时，人们立刻将怀疑的目光投向她。作为天生的湿地生物学家，她从土地中汲取生活的教训，从萤火虫不诚实的信号中学习世界真正的运行方式。到了渴望触摸和爱的年纪，受到两个来自小镇的年轻人的吸引，她向一种全新的生活开启了心扉……若干年后，她成了当地的传奇，小镇旅游业的名片。但这本书要讲的并不是一个女孩冲破重重阻碍走向光明的励志故事。荒凉的湿地养育了女孩，也塑造了她。她关于爱情和生活的选择听从的是荒野的召唤，而非文明社会的教导。",
  "centPrice": 4199,
  "finished": 1,
  "maxFreeChapter": 11,
  "maxFreeInfo": {
    "maxFreeChapterIdx": 11,
    "maxFreeChapterUid": 135,
    "maxFreeChapterRatio": 69
  },
  "free": 0,
  "mcardDiscount": 0,
  "ispub": 1,
  "extra_type": 5,
  "cpid": 7029174,
  "publishTime": "2019-10-01 00:00:00",
  "category": "文学-外国文学",
  "categories": [
    {
      "categoryId": 300000,
      "subCategoryId": 300013,
      "categoryType": 0,
      "title": "文学-外国文学"
    }
  ],
  "hasLecture": 0,
  "lastChapterIdx": 65,
  "paperBook": {
    "skuId": "12574673"
  },
  "copyrightChapterUids": [64],
  "hasKeyPoint": false,
  "blockSaveImg": 0,
  "language": "zh-wr",
  "isTraditionalChinese": false,
  "hideUpdateTime": false,
  "isEPUBComics": 0,
  "isVerticalLayout": 0,
  "isShowTTS": 1,
  "webBookControl": 0,
  "selfProduceIncentive": false,
  "isAutoDownload": 1,
  "chapterSize": 65,
  "updateTime": 1745913808,
  "onTime": 1584345595,
  "lastChapterCreateTime": 1678986611,
  "unitPrice": 0,
  "marketType": 0,
  "isbn": "9787540492885",
  "publisher": "湖南文艺出版社",
  "totalWords": 172949,
  "bookSize": 895392,
  "recommended": 0,
  "lectureRecommended": 0,
  "follow": 0,
  "secret": 0,
  "offline": 0,
  "lectureOffline": 0,
  "finishReading": 1,
  "hideReview": 0,
  "hideFriendMark": 0,
  "blacked": 0,
  "bookplateId": "wenxue",
  "bookplateText": "阅读是一个在全然的孤独之中，仍令人心满意足的沟通奇迹。",
  "isAutoPay": 0,
  "availables": 0,
  "paid": 1,
  "showLectureButton": 1,
  "isHideTTSButton": 0,
  "shouldHideTTS": 0,
  "wxtts": 1,
  "star": 91,
  "ratingCount": 16222,
  "ratingDetail": {
    "one": 139,
    "two": 1,
    "three": 703,
    "four": 208,
    "five": 15164,
    "recent": 160
  },
  "newRating": 933,
  "newRatingCount": 15475,
  "deepVRating": 929,
  "showDeepVRatingLabel": 0,
  "newRatingDetail": {
    "good": 14572,
    "fair": 782,
    "poor": 121,
    "recent": 158,
    "deepV": 1048,
    "myRating": "good",
    "title": "神作"
  },
  "ranklist": {
    "seq": 64,
    "categoryId": "all",
    "categoryName": "总榜",
    "storeSubType": 0,
    "scheme": "weread://ranklist?categoryId=all&subtype=0&initialBookId=29599977&seq=64&newList=1",
    "ranklistCover": {
      "tinycode": "https://rescdn.qqmail.com/weread/cover/ranklist.all.tinycode.8A3kIWv1MX.png",
      "chart_title": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_title.JPnYFfuPbm.png",
      "chart_detail_title": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_detail_title.sMh65ixe9l.png",
      "chart_detail_title_dark": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_detail_title_dark.2ky4HSJU3V.png",
      "chart_share_title": "https://rescdn.qqmail.com/weread/cover/ranklist.all.chart_share_title.hqPEOLVffW.png",
      "chart_share_logo": "https://rescdn.qqmail.com/weread/cover/ranklist.all.chart_share_logo.8DDUxHqsiv.png",
      "chart_book_detial_icon": "https://rescdn.qqmail.com/weread/cover/ranklist.all.chart_book_detial_icon.6tpmPfmz6F.png",
      "chart_tag": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_tag.10XdZh6eUV.png",
      "eink_chart_title": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.eink_chart_title.JVKRmQ5WCg.png",
      "chart_title_main": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_title_main.5y2PAdJQdr.png",
      "chart_detail_title_main": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_detail_title_main.VC1GJeqgCf.png",
      "chart_detail_title_dark_main": "https://weread-1258476243.file.myqcloud.com/assets/ranklist.all.chart_detail_title_dark_main.r45lFTyRNo.png",
      "chart_background_color_1": "#34A7FF",
      "chart_background_color_2": "#39CFFF",
      "chart_title_height": 96,
      "chart_title_width": 471,
      "desc": "微信读书用户最喜爱的出版书"
    }
  },
  "copyrightInfo": {
    "id": 7029174,
    "name": "博集新媒",
    "userVid": 384737583,
    "role": 2,
    "avatar": "https://res.weread.qq.com/wravatar/WV0027-lbqNH76CulSav6n3irXBJa5/0",
    "cpType": 0
  },
  "authorSeg": [
    {
      "words": "迪莉娅·欧文斯",
      "highlight": 1,
      "authorId": "386973"
    }
  ],
  "translatorSeg": [
    {
      "words": "王泽林",
      "highlight": 1,
      "authorId": "726255"
    }
  ],
  "coverBoxInfo": {
    "blurhash": "KTFX@vn$E2I9I=NH~pRjRj",
    "colors": [
      {
        "key": "6/4",
        "hex": "#969391"
      },
      {
        "key": "4/4",
        "hex": "#635f5e"
      },
      {
        "key": "3/4",
        "hex": "#4a4746"
      },
      {
        "key": "3/6",
        "hex": "#4a4746"
      },
      {
        "key": "3/8",
        "hex": "#4a4746"
      },
      {
        "key": "2/4",
        "hex": "#33302f"
      },
      {
        "key": "2/6",
        "hex": "#33302f"
      },
      {
        "key": "2/8",
        "hex": "#33302f"
      },
      {
        "key": "1/4",
        "hex": "#1f1c1b"
      },
      {
        "key": "1/6",
        "hex": "#1f1c1b"
      },
      {
        "key": "1/8",
        "hex": "#1f1c1b"
      },
      {
        "key": "6/6",
        "hex": "#969391"
      },
      {
        "key": "4/6",
        "hex": "#635f5e"
      },
      {
        "key": "9/2",
        "hex": "#e5e2e1"
      },
      {
        "key": "4/10",
        "hex": "#635f5e"
      },
      {
        "key": "5/10",
        "hex": "#7c7978"
      },
      {
        "key": "5/4",
        "hex": "#7c7978"
      },
      {
        "key": "8/4",
        "hex": "#cac7c6"
      },
      {
        "key": "5/8",
        "hex": "#7c7978"
      },
      {
        "key": "6/8",
        "hex": "#969391"
      },
      {
        "key": "8/6",
        "hex": "#cac7c6"
      },
      {
        "key": "7/8",
        "hex": "#b0adab"
      },
      {
        "key": "3/12",
        "hex": "#4a4746"
      },
      {
        "key": "9/12",
        "hex": "#e5e2e1"
      },
      {
        "key": "1/100",
        "hex": "#969391"
      },
      {
        "key": "2/100",
        "hex": "#b0adab"
      },
      {
        "key": "3/100",
        "hex": "#ffffff"
      },
      {
        "key": "4/100",
        "hex": "#EEEEEE"
      },
      {
        "key": "5/100",
        "hex": "#EEEEEE"
      },
      {
        "key": "6/100",
        "hex": "#000000"
      }
    ],
    "dominate_color": {
      "hex": "#090303",
      "hsv": [5.78243933758684, 70.0564277836027, 3.34355042960825]
    },
    "custom_cover": "https://weread-1258476243.file.myqcloud.com/bookalphacover/977/29599977/s_29599977.jpg",
    "custom_rec_cover": "https://weread-1258476243.file.myqcloud.com/bookreccover/977/29599977/s_29599977.jpg"
  },
  "skuInfo": {
    "miniProgramId": "gh_78fd80800407",
    "path": "/pages/product/product?pid=27939844&unionid=P-123456m"
  },
  "shortTimeRead": {
    "active": 0
  },
  "askAIBook": 1,
  "aiBookButtonType": 1,
  "AISummary": ""
}
```

## 获取指定书籍的划线记录

 synckey为最新划线的时间戳

### Request

https://weread.qq.com/web/book/bookmarklist?bookId=27416212

### Response

```json
{
  "synckey": 1745909123,
  "updated": [
    {
      "bookId": "27416212",
      "style": 2,
      "bookVersion": 56464877,
      "range": "1227-1255",
      "markText": "基因组的作用只有在与环境相互作用的情况下才能真正被理解。",
      "colorStyle": 3,
      "type": 1,
      "chapterUid": 57,
      "createTime": 1745909123,
      "bookmarkId": "27416212_57_1227-1255"
    },
    {
      "bookId": "27416212",
      "style": 2,
      "bookVersion": 56464877,
      "range": "4819-4907",
      "markText": "由于我们的大脑会出现异常的波动，有时候会发现自己更为急躁、幽默、健谈、平静、有活力，或者思维更清晰。我们的内在环境和外在行为受到生物基础的引导，既不能直接接触，也不能直接认识。",
      "colorStyle": 3,
      "type": 1,
      "chapterUid": 56,
      "createTime": 1745892075,
      "bookmarkId": "27416212_56_4819-4907"
    },
    ...//其他划线
  ]
}
```



## 获取指定书籍的想法/笔记

synckey为该书最新笔记的时间，每条review下方的create time就是该review的创建时间

### Request

https://weread.qq.com/api/review/list?bookId=29599977&listType=11&syncKey=0&mine=1

https://weread.qq.com/web/review/list?bookId=29599977&listType=11&listMode=2&syncKey=0&mine=1&count=0 

2个地址都可以用，区别是，有点赞时上面的会显示详情（"likes": []），下面只会显示总数（"friendLikesCount": number）

#### 参数

| 参数名   | 默认值 | 说明                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| bookId   |        | 书籍的ID                                                     |
| listType |        | 列表类型，11（自己的）、4（自己和好友的）、2（很多）、3（空）、5（貌似是或者自己及好友有多少人点评过）、6、7、8、10、12、13、14、15 |
| count    | 0      | 要获取的记录数量，0表示不限制                                |
| listMode |        | 列表模式，2(3与其一致)，1多了likesForList，显示笔记/想法的点赞列表，4与1基本一致，likesForList名字换成了likes，内容一致 |
| syncKey  | 0      | 同步键，用于增量获取                                         |
| mine     | 1      | 只查自己的，查全部的话会包含好友的，listType=11时只能=1不可为其他值，其他listType下貌似不生效 |



### Response

api

```json
{
  "synckey": 1746854792,
  "totalCount": 4,
  "reviews": [
    {
      "reviewId": "39942883_7vXsP4knr",
      "review": {
        "abstract": "",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "content": "这本书一定要推荐。建议成长中的女孩子都看一看，一个人是如何对抗孤独的。",
        "friendship": 0,
        "htmlContent": "\u003Cp\u003E这本书一定要推荐。建议成长中的女孩子都看一看，一个人是如何对抗孤独的。\u003C/p\u003E",
        "isPrivate": 0,
        "range": "",
        "star": 100,
        "title": "",
        "topicRanges": [
          "0-0"
        ],
        "type": 4,
        "reviewId": "39942883_7vXsP4knr",
        "userVid": 39942883,
        "topics": [],
        "createTime": 1640928412,
        "newRatingLevel": 1,
        "isLike": 1,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "bookFinderSuccessCount": 0,
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      },
      "likesCount": 1,
      "likes": [
        {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      ]
    },
    {
      "reviewId": "39942883_7vOXa9SGC",
      "review": {
        "abstract": "“不，我会回来的，基娅，我不会离开你。我保证。我会回到你身边。”",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 148,
        "content": "一个人留在原地，一个人继续远行",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "8639-8671",
        "createTime": 1640445005,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vOXa9SGC",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 24,
        "chapterTitle": "18 白色轻舟",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    },
    {
      "reviewId": "39942883_7vOVtgD4A",
      "review": {
        "abstract": "人生中第一次，她的心满满当当。",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 147,
        "content": "心里装下一个人",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "13468-13483",
        "createTime": 1640443455,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vOVtgD4A",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 23,
        "chapterTitle": "17 踏进门槛",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    },
    {
      "reviewId": "39942883_7vEWVUKA7",
      "review": {
        "abstract": "有问题的时候就放手。回到空挡。",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 136,
        "content": "放手却是最难的",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "1723-1738",
        "createTime": 1639876792,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vEWVUKA7",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 12,
        "chapterTitle": "6 一艘船和一个男孩",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    }
  ],
  "removed": [],
  "atUsers": [],
  "refUsers": [],
  "columns": [],
  "hasMore": 0
}
```

web

```json
{
  "synckey": 1746854792,
  "totalCount": 4,
  "reviews": [
    {
      "reviewId": "39942883_7vXsP4knr",
      "review": {
        "abstract": "",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "content": "这本书一定要推荐。建议成长中的女孩子都看一看，一个人是如何对抗孤独的。",
        "friendship": 0,
        "htmlContent": "\u003Cp\u003E这本书一定要推荐。建议成长中的女孩子都看一看，一个人是如何对抗孤独的。\u003C/p\u003E",
        "isPrivate": 0,
        "range": "",
        "star": 100,
        "title": "",
        "topicRanges": [
          "0-0"
        ],
        "type": 4,
        "reviewId": "39942883_7vXsP4knr",
        "userVid": 39942883,
        "topics": [],
        "createTime": 1640928412,
        "newRatingLevel": 1,
        "isLike": 1,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "bookFinderSuccessCount": 0,
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      },
      "likesCount": 1,
      "friendLikesCount": 1
    },
    {
      "reviewId": "39942883_7vOXa9SGC",
      "review": {
        "abstract": "“不，我会回来的，基娅，我不会离开你。我保证。我会回到你身边。”",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 148,
        "content": "一个人留在原地，一个人继续远行",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "8639-8671",
        "createTime": 1640445005,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vOXa9SGC",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 24,
        "chapterTitle": "18 白色轻舟",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    },
    {
      "reviewId": "39942883_7vOVtgD4A",
      "review": {
        "abstract": "人生中第一次，她的心满满当当。",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 147,
        "content": "心里装下一个人",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "13468-13483",
        "createTime": 1640443455,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vOVtgD4A",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 23,
        "chapterTitle": "17 踏进门槛",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    },
    {
      "reviewId": "39942883_7vEWVUKA7",
      "review": {
        "abstract": "有问题的时候就放手。回到空挡。",
        "atUserVids": [],
        "bookId": "29599977",
        "bookVersion": 599434037,
        "chapterUid": 136,
        "content": "放手却是最难的",
        "friendship": 0,
        "htmlContent": "",
        "isPrivate": 0,
        "range": "1723-1738",
        "createTime": 1639876792,
        "title": "",
        "type": 1,
        "reviewId": "39942883_7vEWVUKA7",
        "userVid": 39942883,
        "topics": [],
        "isLike": 0,
        "isReposted": 0,
        "book": {
          "bookId": "29599977",
          "format": "epub",
          "version": 1187272633,
          "soldout": 0,
          "bookStatus": 1,
          "type": 0,
          "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
          "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
          "author": "迪莉娅·欧文斯",
          "translator": "王泽林",
          "payType": 1048577
        },
        "chapterIdx": 12,
        "chapterTitle": "6 一艘船和一个男孩",
        "author": {
          "userVid": 39942883,
          "name": "兔子舞，假面",
          "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLNPEJWuDIea8jGfFzJQSqUN3U1CIqib5cm7yibKELPacYZ6lZOZXTumNRk7N3gdNV8qGiaqXm8evHUw/132",
          "isFollowing": 1,
          "isFollower": 1,
          "isBlacking": 0,
          "isBlackBy": 0,
          "isHide": 0,
          "isV": 0,
          "vDesc": "程序猿一枚，豆腐与鱼这辈子是不可能戒了",
          "roleTags": [],
          "followPromote": "",
          "isDeepV": false,
          "deepVTitle": "",
          "signature": "",
          "medalInfo": {
            "id": "M13-20241216-10",
            "desc": "每周阅读挑战",
            "title": "完美阅读周",
            "levelIndex": 10
          }
        }
      }
    }
  ],
  "removed": [],
  "atUsers": [],
  "refUsers": [],
  "columns": [],
  "hasMore": 0
}
```

type=4，貌似是书的点评，type=1是普通的想法。

## 获取指定书籍的阅读状态详情
Request: https://weread.qq.com/web/book/getProgress?bookId=27416212
Response

```json
{
  "bookId": "27416212",
  "book": {
    "appId": "wb182564874663h1484727348",
    "bookVersion": 56464877,
    "reviewId": "",
    "chapterUid": 57,
    "chapterOffset": 7602,
    "chapterIdx": 57,
    "updateTime": 1746100898,
    "synckey": 1480012580,
    "summary": "就的模式。世界各地的实验室正在努力弄清楚",
    "repairOffsetTime": 0,
    "readingTime": 72917,  // 阅读时长，秒
    "progress": 96,   // 阅读进度，百分比
    "isStartReading": 1,
    "ttsTime": 0,
    "startReadingTime": 1740815642,
    "installId": "",
    "recordReadingTime": 0
  },
  "canFreeRead": 0,
  "timestamp": 1746100909
}
```



## 获取指定书籍的章节信息
Request: POST https://weread.qq.com/web/book/chapterInfos
Headers:
```
Cookie: [your_cookie]
Content-Type: application/json;charset=UTF-8
Accept: application/json, text/plain, */*
Origin: https://weread.qq.com
Referer: https://weread.qq.com/web/reader/[bookId]
```
Body: 
```json
{"bookIds":["27416212"]}
```

Response示例: 

```json
{"data":[{"bookId":"27416212","soldOut":0,"clearAll":0,"chapterUpdateTime":1722521808,"updated":[{"chapterUid":1,"chapterIdx":1,"updateTime":0,"readAhead":0,"title":"封面","wordCount":1,"price":0,"paid":0,"isMPChapter":0,"level":1,"files":["Text/coverpage.xhtml"]},{"chapterUid":2,"chapterIdx":2,"updateTime":1659067784,"readAhead":0,"title":"版权信息","wordCount":150,"price":0,"paid":0,"isMPChapter":0,"level":1,"files":["Text/copyright.xhtml"]},
// ... 其他章节信息
]}
```

