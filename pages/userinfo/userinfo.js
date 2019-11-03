// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        'msg': '卢本伟',
        userInfo: {},
        isShow: false
    },
    getUserSetting() {//获取用户配置
        wx.getSetting({
            success: (result) => {
                console.log("获取用户配置成功")
                console.log(result)
                //检测用户之前是否已经授权登录信息 
                this.setData({
                    isShow: !(result.authSetting['scope.userInfo'])
                })
                console.log(this.data)
            },
            fail: (err) => {
                console.log("获取用户配置失败");
                console.log(err)
            },
            complete: () => { }
        });
    },
    getUserInfo() { //获取用户信息
        wx.getUserInfo({
            withCredentials: 'false',
            lang: 'zh_CN',
            timeout: 10000,
            success: (data) => {
                this.setData({
                    userInfo: data.userInfo,
                    isShow:false
                });
            },
            fail: (err) => {
                console.log("获取用户信息失败");
                console.log(err)
            },
            complete: () => { }
        });
    },
    getUserInfoHandle(data){//根据用户授权按钮按下的值做事件处理
        //判断button的bindgetuserinfo返回的data中的data.detail.rawdata是否存在 判断用户按的是允许还是拒绝
        console.log('用户点击了',data)
        if(data.detail.rawData){
            //重新渲染页面
            this.getUserInfo();
            console.log(this.data)
        }
    },
    routeToList(){//跳转到list页面
        //wx.navigateTo 保留当前页面 跳转到list
        //wx.redirectTo 销毁当前页面 跳转到list
        console.log('跳了')
        wx.switchTab({
            url: '../index/index',
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getUserSetting();
        this.getUserInfo();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})