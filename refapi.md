## 获取书架信息
### Request

https://weread.qq.com/web/shelf/sync

无参

### Response

```json
{
  "pureBookCount": 578,
  "bookCount": 578,
  "bookProgress": [  // 所有书籍的阅读进度信息
        {
      "bookId": "23303745",
      "progress": 0, // 0表示未读，100表示读完
      "chapterUid": 5,
      "chapterOffset": 2034,
      "chapterIdx": 5,
      "appId": "35711832172614269128502745021697888382",
      "updateTime": 1745114942,
      "readingTime": 90,
      "synckey": 485411444
    },
    {
      "bookId": "23562078",
      "progress": 0,
      "chapterUid": 5,
      "chapterOffset": 739,
      "chapterIdx": 5,
      "appId": "35711832172614269128502745021697888382",
      "updateTime": 1746226178,
      "readingTime": 0,
      "synckey": 1069336956
    },
    {...}
  ],
  "synckey": 1747100438,
  "removed": [],
  "lectureRemoved": [],
  "archive": [  //书架的分组（其中的bookIds就是这个分组下的书籍id）

	{
      "archiveId": 1741486369,
      "name": "路遥",
      "bookIds": [],
      "removed": [],
      "lectureBookIds": [],
      "lectureRemoved": []
    },
    {
      "archiveId": 1537701736,
      "name": "探案",
      "bookIds": [
        "3300098444",
        "3300108408",
        ……       
        "823533",
        "340459",
        "CB_G7VAG9AJUAec6j06gY4mK4ho", // CB_开头表示导入的书籍
        "840704",
        "847930"
      ],
      "removed": [],
      "lectureBookIds": [],
      "lectureRemoved": []
    },
    {
      "archiveId": 1715836215,
      "name": "技术",
      "bookIds": [
        "687994",
        "3300018278",
        "38894783",
        "37408826",
        "3300028078",
        "3300008341",
        "29971992",
        "3300085322",
        "22806910",
        "33381009",
        "27563396",
        "26793576",
        "41787784",
        "27337404"
      ],
      "removed": [],
      "lectureBookIds": [],
      "lectureRemoved": []
    }   
  ],
  "removedArchive": [],
  "books": [   //所有书籍详细信息
	{
      "bookId": "25566784",
      "title": "犹大之窗",
      "author": "约翰·迪克森·卡尔",
      "translator": "蔡妙",
      "cover": "https://cdn.weread.qq.com/weread/cover/25/YueWen_25566784/t6_YueWen_25566784.jpg",
      "version": 2010549587,
      "format": "epub",
      "type": 0,
      "price": 24.99,
      "originalPrice": 0,
      "soldout": 0,
      "bookStatus": 1,
      "payingStatus": 2,
      "payType": 1048577,
      "lastChapterCreateTime": 0,
      "centPrice": 2499,
      "finished": 1,
      "maxFreeChapter": 6,
      "maxFreeInfo": {
        "maxFreeChapterIdx": 6,
        "maxFreeChapterUid": 6,
        "maxFreeChapterRatio": 75
      },
      "free": 0,
      "mcardDiscount": 0,
      "ispub": 1,
      "extra_type": 5,
      "updateTime": 1712036035,
      "publishTime": "2019-05-01 00:00:00",
      "category": "精品小说-悬疑推理",
      "categories": [
        {
          "categoryId": 100000,
          "subCategoryId": 100008,
          "categoryType": 0,
          "title": "精品小说-悬疑推理"
        }
      ],
      "hasLecture": 0,
      "lastChapterIdx": 24,
      "paperBook": {
        "skuId": "12612090"
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
      "isAutoDownload": 1,
      "showLectureButton": 1,
      "secret": 0,
      "readUpdateTime": 1742167774,
      "finishReading": 1,
      "paid": 1
    },
	{
      "bookId": "CB_G7VAG9AJUAec6j06gY4mK4ho", // CB_开头表示导入的书籍
      "title": "《13· 67》作者：陈浩基",
      "author": "",
      "cover": "https://weread-1258476243.file.myqcloud.com/app/assets/bookcover/book_cover_default_imported_01.png",
      "version": 0,
      "format": "txt",
      "type": 0,
      "price": 0,
      "originalPrice": 0,
      "soldout": 0,
      "bookStatus": 2,
      "payingStatus": 0,
      "payType": 134217761,
      "centPrice": 0,
      "finished": 1,
      "free": 1,
      "mcardDiscount": 0,
      "ispub": 0,
      "lastChapterCreateTime": 0,
      "publishTime": "",
      "hasLecture": 0,
      "lastChapterIdx": 7,
      "paperBook": {
        "skuId": ""
      },
      "copyrightChapterUids": [],
      "limitShareChat": 0,
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
      "showLectureButton": 1,
      "secret": 1,
      "readUpdateTime": 1697297086,
      "finishReading": 1,
      "paid": 0,
      "updateTime": 1694407191
    },
      ……
  ],
  "lectureBooks": [],
  "lectureSynckey": 1747116961,
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
          "updateTime": 1705187507,
          "readUpdateTime": 1705315197,
          "isTop": false
		}
	}
  }
```



## 获取有阅读笔记的书籍清单

其中sort 是该本书最后笔记更新时间

### Request

https://weread.qq.com/api/user/notebook

无参

### Response

```json
{
  "synckey": 1747117374,
  "totalBookCount": 132,
  "noBookReviewCount": 0,
  "books": [
	{
      "bookId": "3300138251",
      "book": {
        "bookId": "3300138251",
        "title": "秋收（轻经典）",
        "author": "茅盾",
        "cover": "https://cdn.weread.qq.com/weread/cover/98/cpplatform_bnwuakmud7ub1bw7ch99ej/t6_cpplatform_bnwuakmud7ub1bw7ch99ej1742787027.jpg",
        "version": 2051282504,
        "format": "epub",
        "type": 0,
        "price": 9.9,
        "originalPrice": 0,
        "soldout": 0,
        "bookStatus": 1,
        "payingStatus": 1,
        "payType": 134221825,
        "centPrice": 990,
        "finished": 1,
        "maxFreeChapter": 3,
        "maxFreeInfo": {
          "maxFreeChapterIdx": 3,
          "maxFreeChapterUid": 7,
          "maxFreeChapterRatio": 26
        },
        "free": 0,
        "mcardDiscount": 0,
        "ispub": 1,
        "extra_type": 5,
        "cpid": 1000000121,
        "publishTime": "2025-03-24 00:00:00",
        "categories": [
          {
            "categoryId": 300000,
            "subCategoryId": 300004,
            "categoryType": 0,
            "title": "文学-经典作品"
          }
        ],
        "hasLecture": 0,
        "lastChapterIdx": 5,
        "paperBook": {
          "skuId": ""
        },
        "copyrightChapterUids": [6],
        "blockSaveImg": 0,
        "language": "zh-wr",
        "isTraditionalChinese": false,
        "hideUpdateTime": false,
        "isEPUBComics": 0,
        "isVerticalLayout": 0,
        "isShowTTS": 1,
        "webBookControl": 0,
        "selfProduceIncentive": false,
        "isAutoDownload": 1
      },
      "reviewCount": 1,
      "reviewLikeCount": 1,
      "reviewCommentCount": 0,
      "noteCount": 0,
      "bookmarkCount": 0,
      "sort": 1743982842
    },
    ... //其他book信息
    ]
}
```



## 获取指定书籍的详情
### Request

https://weread.qq.com/api/book/info?bookId=27416212

参数

| 参数名 | 说明   |
| ------ | ------ |
| bookId | 书的id |

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
		……
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

https://weread.qq.com/web/book/bookmarklist?bookId=29599977

不带bookId可以查询所有的

参数

| 参数名  | 说明                    |
| ------- | ----------------------- |
| bookId  | 书的id                  |
| syncKey | 更新时间，默认0，可不写 |

### Response

```json
{
  "synckey": 1746854926,
  "updated": [
	{
      "bookId": "29599977",
      "bookVersion": 1187272633,
      "chapterUid": 188,
      "markText": "这一次，基娅终于释然了。",
      "range": "2597-2609",
      "style": 2,
      "type": 1,
      "createTime": 1640907831,
      "bookmarkId": "29599977_62_2535-2547"
    },
    {
      "bookId": "29599977",
      "bookVersion": 1187272633,
      "chapterUid": 182,
      "markText": "地位较低的男性需要通过大吼大叫来获取注意。",
      "range": "789-810",
      "style": 1,
      "type": 1,
      "createTime": 1640820868,
      "bookmarkId": "29599977_56_702-723"
    },
    ...//其他划线
  ]
  "removed": [], // 删除的
  "chapters": [ // 章节信息
    {
      "bookId": "29599977",
      "chapterUid": 188,
      "chapterIdx": 64,
      "title": "57 萤火虫"
    },    
    ……
    {
      "bookId": "29599977",
      "chapterUid": 182,
      "chapterIdx": 58,
      "title": "51 月亏"
    }
  ],
  "book": { // 书籍信息
    "bookId": "29599977",
    "version": 1187272633,
    "format": "epub",
    "soldout": 0,
    "bookStatus": 1,
    "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg",
    "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）",
    "author": "迪莉娅·欧文斯",
    "coverBoxInfo": {
      "blurhash": "KTFX@vn$E2I9I=NH~pRjRj",
      "colors": [
        {
          "key": "6/4",
          "hex": "#969391"
        },        
        ……
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
    }
  }
}
```



## 获取指定书籍的想法/笔记

synckey为该书最新笔记的时间，每条review下方的create time就是该review的创建时间

### Request

https://weread.qq.com/api/review/list?bookId=29599977&listType=11&syncKey=0&mine=1 （这里省略了部分参数）

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

/api/review/list

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

/web/review/list

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

type=4，书的点评，type=1是普通的想法。

## 获取指定书籍的阅读进度
### Request

https://weread.qq.com/web/book/getProgress?bookId=29599977

参数

| 参数名 | 说明   |
| ------ | ------ |
| bookId | 书的id |

### Response

```json
{
  "bookId": "29599977",
  "book": {
    "appId": "35711832172614269128502745021697888382",
    "bookVersion": 1187272633,
    "reviewId": "",
    "chapterUid": 127,
    "chapterOffset": 335,
    "chapterIdx": 65,
    "updateTime": 1747088114,
    "synckey": 590787965,
    "summary": "致谢\n向我的双胞胎兄弟博比·戴克斯致以最深的谢意，感谢他对我",
    "repairOffsetTime": 1741181319,
    "readingTime": 37039, // 阅读时长，秒
    "progress": 100, // 阅读进度，百分比
    "isStartReading": 1,
    "ttsTime": 0,
    "startReadingTime": 1639577081,
    "installId": "3157942231332302471324568415",
    "recordReadingTime": 0,
    "finishTime": 1640924988
  },
  "canFreeRead": 0,
  "timestamp": 1747184325
}
```



## 获取指定书籍的章节信息
### Request

POST https://weread.qq.com/web/book/chapterInfos

Headers

```
Cookie: [your_cookie]
Content-Type: application/json;charset=UTF-8
Accept: application/json, text/plain, */*
Origin: https://weread.qq.com
Referer: https://weread.qq.com/web/reader/[bookId]
```
参数

参数以json形式传递

| 参数名  | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| bookIds | 数组格式，数组中第一个元素为字符串格式的书籍id，数组中其他参数不确定，默认可以不填 |

Body: 

```json
{"bookIds":["29599977"]}
```

### Response

```json
{
    "data": [
        {
            "bookId": "29599977", 
            "soldOut": 0, 
            "clearAll": 0, 
            "chapterUpdateTime": 1745913808, 
            "updated": [
                {
                    "chapterUid": 1, 
                    "chapterIdx": 1, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_1", 
                    "title": "封面", 
                    "wordCount": 1, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/cover.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 64, 
                    "chapterIdx": 2, 
                    "updateTime": 1745913808, 
                    "readAhead": 0, 
                    "tar": "", 
                    "title": "版权信息", 
                    "wordCount": 128, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/copyright.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 65, 
                    "chapterIdx": 3, 
                    "updateTime": 1678986611, 
                    "readAhead": 0, 
                    "tar": "", 
                    "title": "献词", 
                    "wordCount": 46, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/Section0001.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 128, 
                    "chapterIdx": 4, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_4", 
                    "title": "地图", 
                    "wordCount": 1, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/Section0002.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 129, 
                    "chapterIdx": 5, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_5", 
                    "title": "第一部分 湿地", 
                    "wordCount": 8, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/Section0003.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 130, 
                    "chapterIdx": 6, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_6", 
                    "title": "序言", 
                    "wordCount": 388, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 2, 
                    "files": [
                        "Text/Section0003_0001.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 131, 
                    "chapterIdx": 7, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_7", 
                    "title": "1 妈妈", 
                    "wordCount": 3532, 
                    "price": 0, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 2, 
                    "files": [
                        "Text/Section0003_0002.xhtml"
                    ]
                }, 
 				……               
                {
                    "chapterUid": 188, 
                    "chapterIdx": 64, 
                    "updateTime": 1745912985, 
                    "readAhead": 0, 
                    "tar": "https://res.weread.qq.com/wrco/tar_CB_29599977_64", 
                    "title": "57 萤火虫", 
                    "wordCount": 4953, 
                    "price": -1, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 2, 
                    "files": [
                        "Text/Section0004_0036.xhtml"
                    ]
                }, 
                {
                    "chapterUid": 127, 
                    "chapterIdx": 65, 
                    "updateTime": 1678986611, 
                    "readAhead": 0, 
                    "tar": "", 
                    "title": "致谢", 
                    "wordCount": 587, 
                    "price": -1, 
                    "paid": 0, 
                    "isMPChapter": 0, 
                    "level": 1, 
                    "files": [
                        "Text/Section0005.xhtml"
                    ]
                }
            ], 
            "removed": [ ], 
            "synckey": 1187272633, 
            "copyRightSynckey": 1, 
            "book": {
                "bookId": "29599977", 
                "version": 1187272633, 
                "format": "epub", 
                "cover": "https://cdn.weread.qq.com/weread/cover/7/YueWen_29599977/s_YueWen_29599977.jpg", 
                "title": "蝲蛄吟唱的地方（电影《沼泽深处的女孩》原著）", 
                "author": "迪莉娅·欧文斯", 
                "price": 41.99, 
                "type": 0
            }
        }
    ]
}
```

## 其他

https://weread.qq.com/web/user?userVid=39942883  获取指定用户的信息 

https://weread.qq.com/web/book/tags?bookId=29599977 获取指定书籍的标签

https://weread.qq.com/web/book/readInfo?bookId=29599977&finishedBookCount=1&finishedBookIndex=1&finishedDate=1 获取指定书籍的阅读信息

https://weread.qq.com/web/book/underlines?bookId=29599977&chapterUid=127 

https://weread.qq.com/web/book/read [POST]

