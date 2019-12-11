const QQMapWX = require("../../lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js");
const { debounce, throttle } = require("../../utils/tool.js");
var qqmapsdk: any;
Page({
  data: {
    keyword: "广东工业大学",
    lat: 23.099994,
    lng: 113.32452,
    marker: []
    /* sending: false */
  },
  searchLoad(e: any) {
    let keyword: string = e.detail.detail.value;
    debounce(this,this.searchSite, [keyword])();
  },
  //调用腾讯地图SDK查询地点
  searchSite(keyword: string): any {
    
    /* if (this.data.sending false) return; */
    /* else { */
    this.setData({
      sending: true
    });
      qqmapsdk.search({
        keyword,
        success: (res: any) => console.log("成功了", res,"keyword",keyword),
        fail: (res: any) => console.log("失败了", res),
        complete: () => {
          this.setData({
            sending: false
          });
        }
      });
    /* } */
  },
  //关键词的获取
  getSuggest() {},
  onLoad: () => {
    //实例化地图API
    qqmapsdk = new QQMapWX({
      key: "MY6BZ-2ZZKG-VYMQX-IZWMY-LCLTS-3LB45"
    });
  },

  onShow: function() {}
});
