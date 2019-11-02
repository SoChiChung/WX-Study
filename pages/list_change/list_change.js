// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        datalist: [],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let {
            recipes
        } = require('../../data/meishijsontree.js');
        
        //获取传入参数
        var that = this;
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 2000
        })
        let index = options.categoryid;
        this.setData({
            datalist:recipes[index].children
        })
        console.log(this.data.datalist)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
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