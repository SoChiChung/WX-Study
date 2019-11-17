const app = getApp()
const appKey = 'fc35d7872c25744ab4669c7d9dbcf15e' // 用于访问新闻接口的appKey
const request = require('../../utils/request.js')
const extractArticleInfo = require('./utils/getArticleTime.js')
const shuffle = require('./utils/shuffle.js')

Page({
    data: {
        height: 0,
        widHeight: 0,
        headerTitleName: [{
                name: '头条',
                nameID: '201701',
                newsType: 'top'
            },
            {
                name: '军事',
                nameID: '201702',
                newsType: 'junshi'
            },
            {
                name: '体育',
                nameID: '201703',
                newsType: 'tiyu'
            },
            {
                name: '科技',
                nameID: '201704',
                newsType: 'keji'
            },
            {
                name: '财经',
                nameID: '201705',
                newsType: 'caijing'
            },
            {
                name: '社会',
                nameID: '201706',
                newsType: 'shehui'
            },
            {
                name: '时尚',
                nameID: '201707',
                newsType: 'shishang'
            },
            {
                name: '娱乐',
                nameID: '201708',
                newsType: 'yule'
            },
            {
                name: '国内',
                nameID: '201709',
                newsType: 'guonei'
            },
            {
                name: '国际',
                nameID: '2017010',
                newsType: 'guoji'
            }
        ],
        swiperIndex: '1/4',
        topPic: [{
                imageUrl: "/images/banner/12001.png",
                newsUrl: "https://www.wanplus.com/lol/video/1295093"
            },
            {
                imageUrl: "/images/banner/120811.png",
                newsUrl: "https://www.wanplus.com/article/263911.html"
            },
            {
                imageUrl: "/images/banner/120809.png",
                newsUrl: "https://www.wanplus.com/article/264003.html"
            },
            {
                imageUrl: "/images/banner/120759.png",
                newsUrl: "https://www.wanplus.com/article/263957.html"
            }
        ],
        tapID: 201701, // 判断是否选中
        contentNewsList: [],
        showCopyright: false,
        refreshing: false,
        inputShowed: true,
        inputVal: "",
    },
    //根据图片设置swiper高度
    setAutoSwiperHeight() {
        var query = wx.createSelectorQuery();
        var that = this;
        query.select('.slide-image').boundingClientRect(function(rect) {

            that.setData({
                // 获取要循环标签的高度
                height: rect.height,
                widHeight: rect.height + "px"
            })
        }).exec();
    },
    onLoad: function() {
        this.setData({
            search: this.search.bind(this)
        })
        this.renderPage('top', false, () => {
            this.setData({
                showCopyright: true
            })
        })
    },
    //搜索
    search: function(value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{
                    text: '搜索结果',
                    value: 1
                }, {
                    text: '搜索结果2',
                    value: 2
                    }, {
                        text: '搜索结果3',
                        value: 3
                    }])
            }, 200)
        })
    },
    selectResult: function(e) {
        console.log('select result', e.detail)
    },
    // headerBar 点击
    headerTitleClick: function(e) {
        this.setData({
            tapID: e.target.dataset.id
        })
        this.renderPage(e.currentTarget.dataset.newstype, false)
    },

    //跳转到新闻详情页
    viewDetail: function(e) {
        let newsUrl = e.currentTarget.dataset.newsurl || ''
        let newsTitle = e.currentTarget.dataset.newstitle || ''
        let newsAuthor = e.currentTarget.dataset.newsauthor || ''
        wx.navigateTo({
            url: '../detail/detail?newsUrl=' + newsUrl
        })
    },

    handleSwiperChange: function(e) {
        this.setData({
            swiperIndex: `${e.detail.current + 1}/4`
        })
    },

    onPulldownrefresh_SV() {
        this.renderPage('top', true, () => {
            this.setData({
                refreshing: false
            })
        })
    },
    // isRefresh 是否为下拉刷新
    renderPage: function(newsType, isRefresh, calllBack) {
        if (!isRefresh) {
            wx.showLoading({
                title: '加载中'
            })
            request({
                    url: `https://v.juhe.cn/toutiao/index?type=${newsType}&key=${appKey}`,
                    newstype: newsType
                })
                .then(res => {
                    wx.hideLoading()
                    let {
                        articleList,
                        topPic
                    } = extractArticleInfo(res.result.data)
                    this.setData({
                        contentNewsList: articleList,
                        /*             topPic */
                    })
                    if (calllBack) {
                        calllBack()
                    }
                })
                .catch(error => {
                    wx.hideLoading()
                }),
                request({
                    url: 'http://47.100.92.120:8080/image/carouse',
                    method: 'GET',
                }).then(res => {
                    console.log('res', res)
                    /*                     this.setData({
                                            topPic:res.data
                                        }) */
                })
        } else {
            // 数组随机排序，模拟刷新
            let contentNewsListTemp = shuffle(JSON.parse(JSON.stringify(this.data.contentNewsList)))
            /* contentNewsListTemp.sort(() => {
              return Math.random() > 0.5 ? -1 : 1
            }) */
            setTimeout(() => {
                this.setData({
                    contentNewsList: contentNewsListTemp
                })
                if (calllBack) {
                    calllBack()
                }
            }, 2000)
        }
    }
})