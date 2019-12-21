const key = "MY6BZ-2ZZKG-VYMQX-IZWMY-LCLTS-3LB45"; //使用在腾讯位置服务申请的key
const referer = "finalhomework"; //调用插件的app的名称
const l = JSON.stringify({
  latitude: 39.89631551,
  longitude: 116.323459711
});
const category = "生活服务,娱乐休闲";
Page({
  onLoad() {
    wx.navigateTo({
      url:
        "plugin://chooseLocation/index?key=" +
        key +
        "&referer=" +
        referer +
        "&location=" +
        l +
        "&category" +
        category
    });
  }
});
