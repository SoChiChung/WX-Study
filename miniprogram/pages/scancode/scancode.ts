// const db = wx.cloud.database()
// const a=get
Page({
  data: {},
  scan() {
    wx.scanCode({
      success: res => {
        console.log(res);
      }
    });
  }
});
