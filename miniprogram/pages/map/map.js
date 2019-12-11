"use strict";
var QQMapWX = require("../../lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js");
var _a = require("../../utils/tool.js"), debounce = _a.debounce, throttle = _a.throttle;
var qqmapsdk;
Page({
    data: {
        keyword: "广东工业大学",
        lat: 23.099994,
        lng: 113.32452,
        marker: []
    },
    searchLoad: function (e) {
        var keyword = e.detail.detail.value;
        debounce(this, this.searchSite, [keyword])();
    },
    searchSite: function (keyword) {
        var _this = this;
        this.setData({
            sending: true
        });
        qqmapsdk.search({
            keyword: keyword,
            success: function (res) { return console.log("成功了", res, "keyword", keyword); },
            fail: function (res) { return console.log("失败了", res); },
            complete: function () {
                _this.setData({
                    sending: false
                });
            }
        });
    },
    getSuggest: function () { },
    onLoad: function () {
        qqmapsdk = new QQMapWX({
            key: "MY6BZ-2ZZKG-VYMQX-IZWMY-LCLTS-3LB45"
        });
    },
    onShow: function () { }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUNuRSxJQUFBLG1DQUF1RCxFQUFyRCxzQkFBUSxFQUFFLHNCQUEyQyxDQUFDO0FBQzlELElBQUksUUFBYSxDQUFDO0FBQ2xCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsRUFBRTtLQUVYO0lBQ0QsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QyxRQUFRLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLE9BQWU7UUFBMUIsaUJBa0JDO1FBZEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0QsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNkLE9BQU8sU0FBQTtZQUNQLE9BQU8sRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxTQUFTLEVBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDO1lBQ2hFLElBQUksRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUF2QixDQUF1QjtZQUMzQyxRQUFRLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxPQUFPLEVBQUUsS0FBSztpQkFDZixDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVELFVBQVUsZ0JBQUksQ0FBQztJQUNmLE1BQU0sRUFBRTtRQUVOLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUNyQixHQUFHLEVBQUUscUNBQXFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLEVBQUUsY0FBWSxDQUFDO0NBQ3RCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFFRTWFwV1ggPSByZXF1aXJlKFwiLi4vLi4vbGliL3FxbWFwLXd4LWpzc2RrMS4yL3FxbWFwLXd4LWpzc2RrLmpzXCIpO1xuY29uc3QgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy90b29sLmpzXCIpO1xudmFyIHFxbWFwc2RrOiBhbnk7XG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGtleXdvcmQ6IFwi5bm/5Lic5bel5Lia5aSn5a2mXCIsXG4gICAgbGF0OiAyMy4wOTk5OTQsXG4gICAgbG5nOiAxMTMuMzI0NTIsXG4gICAgbWFya2VyOiBbXVxuICAgIC8qIHNlbmRpbmc6IGZhbHNlICovXG4gIH0sXG4gIHNlYXJjaExvYWQoZTogYW55KSB7XG4gICAgbGV0IGtleXdvcmQ6IHN0cmluZyA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcbiAgICBkZWJvdW5jZSh0aGlzLHRoaXMuc2VhcmNoU2l0ZSwgW2tleXdvcmRdKSgpO1xuICB9LFxuICAvL+iwg+eUqOiFvuiur+WcsOWbvlNES+afpeivouWcsOeCuVxuICBzZWFyY2hTaXRlKGtleXdvcmQ6IHN0cmluZyk6IGFueSB7XG4gICAgXG4gICAgLyogaWYgKHRoaXMuZGF0YS5zZW5kaW5nIGZhbHNlKSByZXR1cm47ICovXG4gICAgLyogZWxzZSB7ICovXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlbmRpbmc6IHRydWVcbiAgICB9KTtcbiAgICAgIHFxbWFwc2RrLnNlYXJjaCh7XG4gICAgICAgIGtleXdvcmQsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4gY29uc29sZS5sb2coXCLmiJDlip/kuoZcIiwgcmVzLFwia2V5d29yZFwiLGtleXdvcmQpLFxuICAgICAgICBmYWlsOiAocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKFwi5aSx6LSl5LqGXCIsIHJlcyksXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHNlbmRpbmc6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIC8qIH0gKi9cbiAgfSxcbiAgLy/lhbPplK7or43nmoTojrflj5ZcbiAgZ2V0U3VnZ2VzdCgpIHt9LFxuICBvbkxvYWQ6ICgpID0+IHtcbiAgICAvL+WunuS+i+WMluWcsOWbvkFQSVxuICAgIHFxbWFwc2RrID0gbmV3IFFRTWFwV1goe1xuICAgICAga2V5OiBcIk1ZNkJaLTJaWktHLVZZTVFYLUlaV01ZLUxDTFRTLTNMQjQ1XCJcbiAgICB9KTtcbiAgfSxcblxuICBvblNob3c6IGZ1bmN0aW9uKCkge31cbn0pO1xuIl19