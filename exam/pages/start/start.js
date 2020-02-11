// exam/pages/start/start.js
const {exam}=require('../../../data/demo.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        exam:exam,
        questions:exam.ques.questions,
        cqi:0,//cur ques index 当前大题序号
        cti:0,// cur topic index 当前小题序号
    },
    jumptoques(){
        wx.navigateTo({
            url: '../ques/ques',
            success: function(res){
                // success
            },
            fail: function(err) {
                // fail
                console.log(err)
            },
            complete: function() {
                // complete
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(this.data.exam)
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