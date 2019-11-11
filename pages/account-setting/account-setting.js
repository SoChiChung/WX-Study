// pages/account-setting/account-setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3']
  },
  getUserSetting() { //获取用户配置
    wx.getSetting({
      success: (result) => {
        console.log("获取用户配置成功")
        //检测用户之前是否已经授权登录信息 
      },
      fail: (err) => {
        console.log("获取用户配置失败");
        console.log(err)
      },
      complete: () => {}
    });
  },
  getUserInfo() { //获取用户信息
    //先找storage
    wx.getStorage({
      key: 'userInfo',
      success: (result) => {
        console.log('success')
        let userInfo = JSON.parse(res);
        this.setData({
          userInfo: this.data.userInfo
        })
      },
      fail: () => {
        console.log('fail')
        wx.getUserInfo({
          withCredentials: 'false',
          lang: 'zh_CN',
          timeout: 10000,
          success: (data) => {
            this.setData({
              userInfo: data.userInfo
            });
          },
          fail: (err) => {
            console.log('getuserInfo失败');
            console.log(err)
          },
          complete: () => {}
        });
      }
    })
  },
  //actionsheet
  listenerButton: function() {
    this.setData({
      //取反
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },

  listenerActionSheet: function() {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getUserInfo();
    this.getUserSetting();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('data', this.data)
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