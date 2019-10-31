// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist: [],
    object: {
      key: 'Hello '
    },
    array: ['MINA']
  },
  getData() { //获取新闻列表信息
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=tiyu&key=3dab260b9b1abbdfb4c04d021f391ddf',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log("这是请求回来的data", result);
        this.setData({
          datalist: result.data.result.data
        })
      },
      fail: () => {},
      complete: () => {}
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})