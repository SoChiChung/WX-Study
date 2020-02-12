// exam/pages/ques/ques.js
const {
    exam
} = require('../../../data/demo.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        exam: exam,
        questions: exam.ques.questions,
        topics: exam.ques.questions[0].topics,
        cqi: 0, //cur ques index 当前大题序号
        cti: 0, // cur topic index 当前小题序号
        countDownHour: 0, //倒计时
        countDownMinute: 0,
        countDownSecond: 0
    },
    jumptoPrev() {
        let {
            cti,
            cqi,
            topics,
            questions
        } = this.data
        if (cti > 0) {
            cti--
        } else {
            if (cqi > 0) {
                cqi--;
                cti = 0
                topics = exam.ques.questions[cqi].topics
            }
        }
        this.setData({
            cqi,
            cti,
            topics
        })
    },
    jumptoNext() { //跳往下一题
        let {
            cti,
            cqi,
            topics,
            questions
        } = this.data
        if (cti < topics.length - 1) {
            cti++
        } else {
            if (cqi < questions.length - 1) {
                cqi++;
                cti = 0;
                topics = exam.ques.questions[cqi].topics
            }
        }
        this.setData({
            cqi,
            cti,
            topics
        })
    },
    /*     observers:{
            'cqi':function(cqi){
                let {questions}=this.data;
                this.setData({
                    topics:exam.ques.questions[cqi].topics,
                })
            }
        }, */
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
        var totalSecond = 10; //倒计时时间

        var interval = setInterval(function() {
            // 秒数
            var second = totalSecond;

            // 天数位
            // var day = Math.floor(second / 3600 / 24);

            // 小时位
            var hr = Math.floor((second) / 3600);
            var hrStr = hr.toString();
            if (hrStr.length == 1) hrStr = '0' + hrStr;

            // 分钟位
            var min = Math.floor((second - hr * 3600) / 60);
            var minStr = min.toString();
            if (minStr.length == 1) minStr = '0' + minStr;

            // 秒位
            var sec = second - hr * 3600 - min * 60;
            var secStr = sec.toString();
            if (secStr.length == 1) secStr = '0' + secStr;

            this.setData({
                countDownHour: hrStr,
                countDownMinute: minStr,
                countDownSecond: secStr,
            });
            totalSecond--;
            if (totalSecond <= 0) {
                clearInterval(interval);
                wx.showToast({
                    title: '考试结束',
                    mask: true,
                    duration: 2500
                });
                this.setData({
                    countDownDay: '00',
                    countDownHour: '00',
                    countDownMinute: '00',
                    countDownSecond: '00',
                });
            }
        }.bind(this), 1000);

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