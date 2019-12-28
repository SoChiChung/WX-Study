// pages/userinfo/userinfo.js
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    switch1checked: true,
    switch2Checked: false
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },

  /* 搜索 */
  search: function(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  jumptoaccount_setting: function() {
    wx.navigateTo({
      url: '/pages/account_setting/account_setting'
    })
  },
});