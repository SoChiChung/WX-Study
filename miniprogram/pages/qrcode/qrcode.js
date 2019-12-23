// miniprogram/pages/qrcode/qrcode.js
const QR=require("../../lib/wxapp-qrcode-master/qrcode")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        canvasHidden:false,
    maskHidden:true,
    imagePath:'',
    url:"http://www.gdut.edu.cn/"
    },
    //适配不同屏幕大小的canvas
  setCanvasSize:function(){
    var size={};
    try {
        var res = wx.getSystemInfoSync();
        var scale = 750/686;//不同屏幕下canvas的适配比例；设计稿是750宽
        var width = res.windowWidth/scale;
        var height = width;//canvas画布为正方形
        size.w = width;
        size.h = height;
      } catch (e) {
        // Do something when catch error
        console.log("获取设备信息失败"+e);
      } 
    return size;
  } ,
    createQrCode: function (content, canvasId, cavW, cavH) {
        //调用插件中的draw方法，绘制二维码图片
        QR.api.draw(content, canvasId, cavW, cavH);
        this.canvasToTempImage(canvasId);
      },
      
      //获取临时缓存图片路径，存入data中
      canvasToTempImage: function (canvasId) {
        let that = this;
        wx.canvasToTempFilePath({
          canvasId,   // 这里canvasId即之前创建的canvas-id
          success: function (res) {
            let tempFilePath = res.tempFilePath;
            console.log(tempFilePath);
            that.setData({       // 如果采用mpvue,即 this.imagePath = tempFilePath
              imagePath:tempFilePath,     
            });
          },
          fail: function (res) {
            console.log(res);
          }
        });
      },
      //点击图片进行预览，长按保存分享图片
  previewImg:function(e){
    var img = this.data.imagePath;
    console.log(img);
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let size=setCanvasSize()
        createQrCode(url,"qrcode",size.w,size.h)
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