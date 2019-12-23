// const db = wx.cloud.database()
// const a=get
Page({
  data: {
    bookslist: []
  },
  scan() {
    wx.scanCode({
      success: res => {
        console.log(res);
      }
    });
  },
  onLoad() {
    wx.cloud.init();
  },
  onReady() {
    wx.cloud
      .callFunction({
        name: "getBooks"
        /* success:(res:ResponseData)=> {
                console.log('res', res)
                this.setData({
                    bookslist:res.result.data.data
                })
            } */
      })
      .then((res: ResponseData) => {
        console.log(res);
        if (typeof res == "object" && res.result && res.result.data) {
          this.setData({
            bookslist: res.result.data.data
          });
        }
      });
  }
});
