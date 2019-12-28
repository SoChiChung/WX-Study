// pages/account-setting/account-setting.js
const { formatDateTime } = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    actionSheetHidden: true,
    actionSheetItems: ["item1", "item2", "item3"],
    date: formatDateTime(new Date()),
    toastvalue:{//所有toast的关联布尔变量
      intro:false,
      isLogin: false,
    }
  },
  getUserInfoHandle(data) {
    //根据用户授权按钮按下的值做事件处理
    //判断button的bindgetuserinfo返回的data中的data.detail.rawdata是否存在 判断用户按的是允许还是拒绝
    console.log("用户点击了", data);
    if (data.detail.rawData) {
      //重新渲染页面
      this.getUserInfo();
      console.log(this.data);
    }
  },
  getUserSetting() {
    //获取用户配置
    wx.getSetting({
      success: result => {
        console.log("getUserSetting成功");
        console.log(result);
        //检测用户之前是否已经授权登录信息
        this.setData({
          ['toastvalue.isLogin']: result.authSetting["scope.userInfo"]
        });
      },
      fail: err => {
        console.log("getUserSetting失败");
        console.log(err);
      },
      complete: () => {}
    });
  },
  getWXinfo: function() {
    wx.getUserInfo({
      withCredentials: "false",
      lang: "zh_CN",
      timeout: 10000,
      success: data => {
        this.setData({
          userInfo: JSON.parse(data.rawData),
          ['toastvalue.isLogin']: true
        });
      },
      fail: err => {
        console.log("getwxInfo失败");
        console.log(err);
      },
      complete: () => {}
    });
  },
  getUserInfo() {
    //获取用户信息
    //先找storage
    /*      wx.getStorageSync({
          key: "userInfo",
          success: result => {
            console.log("success");
            let userInfo = JSON.parse(result.data);
            console.log('result',result)
            if (Object.keys(userInfo).length === 0)
              this.getWXinfo()
            else {
              this.setData({
                userInfo: this.data.userInfo
              });
            }
          },
          fail: () => {
            this.getWXinfo()
          }
        }); */
    let userInfo = wx.getStorageSync("userInfo") || [];
    if (userInfo.length == 0) {
      this.setData({
       ['toastvalue.isLogin']: false
      });
      this.getWXinfo();
    } else {
      userInfo = JSON.parse(userInfo);
      this.setData({
        userInfo: userInfo,
       ['toastvalue.isLogin']: true
      });
    }
  },
  //actionsheet
  bindDateChange: function(v) {
    this.setData({
      ["userInfo.birth"]: v.detail.value
    });
  },
  //toast-input 设置toast展示
  settoastprop(e) {
    let {propname,value}=e.detail.dataset?e.detail.dataset:e.target.dataset
    this.setData({
      ["toastvalue."+propname]:value
    });
  },
  //设置属性
  setPro(e){
    let {propname,value}=e.detail
    this.setData({
      ["userInfo."+propname]:value,
      ["toastvalue."+propname]:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.getUserSetting();
    this.getUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("data", this.data);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("onHide");
    wx.setStorage({
      key: "userInfo",
      data: JSON.stringify(this.data.userInfo)
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log("onUnload");
    /* wx.setStorage("userInfo", JSON.stringify(this.data.userInfo)); */
    wx.setStorage({
      key: "userInfo",
      data: JSON.stringify(this.data.userInfo)
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
