"use strict";
var QQMapWX = require("../../lib/qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js");
var _a = require("../../utils/tool.js"), debounce = _a.debounce, throttle = _a.throttle;
var qqmapsdk;
Page({
    data: {
        keyword: "广东工业大学",
        lat: 23.099994,
        lng: 113.32452,
        marker: [],
        suggests: [],
        sending: false
    },
    searchLoad: function (e) {
        var keyword = e.detail.detail.value;
        this.searchSite(keyword);
    },
    searchSite: function (keyword) {
        var _this = this;
        if (this.data.sending)
            return;
        this.setData({
            sending: true
        });
        setTimeout(function () {
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
        }, 2000);
    },
    suggestLoad: function (e) {
        var keyword = e.detail.detail.value;
        this.getSuggest(keyword);
    },
    getSuggest: function (keyword) {
        var _this = this;
        if (this.data.sending)
            return;
        this.setData({
            sending: true
        });
        setTimeout(function () {
            qqmapsdk.getSuggestion({
                keyword: keyword,
                success: function (res) {
                    _this.setData({
                        suggests: res.data
                    });
                    console.log("成功了");
                },
                fail: function (err) {
                    console.log("失败了", err);
                },
                complete: function () {
                    _this.setData({
                        sending: false
                    });
                }
            });
        }, 2000);
    },
    onLoad: function () {
        qqmapsdk = new QQMapWX({
            key: "MY6BZ-2ZZKG-VYMQX-IZWMY-LCLTS-3LB45"
        });
    },
    onShow: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUNuRSxJQUFBLG1DQUF1RCxFQUFyRCxzQkFBUSxFQUFFLHNCQUEyQyxDQUFDO0FBQzlELElBQUksUUFBYSxDQUFDO0FBQ2xCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEtBQUs7S0FDZjtJQUNELFVBQVUsRUFBVixVQUFXLENBQU07UUFDZixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFFNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxFQUFWLFVBQVcsT0FBZTtRQUExQixpQkFpQkM7UUFoQkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQztZQUNULFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2QsT0FBTyxTQUFBO2dCQUNQLE9BQU8sRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQTNDLENBQTJDO2dCQUNsRSxJQUFJLEVBQUUsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBdkIsQ0FBdUI7Z0JBQzNDLFFBQVEsRUFBRTtvQkFDUixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxLQUFLO3FCQUNmLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsRUFBVixVQUFXLE9BQWU7UUFBMUIsaUJBd0JDO1FBdkJDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDVCxRQUFRLENBQUMsYUFBYSxDQUFDO2dCQUNyQixPQUFPLFNBQUE7Z0JBQ1AsT0FBTyxFQUFFLFVBQUMsR0FBaUI7b0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJO3FCQUNuQixDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFRO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUNELFFBQVEsRUFBRTtvQkFDUixLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE9BQU8sRUFBRSxLQUFLO3FCQUNmLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUtELE1BQU0sRUFBRTtRQUVOLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUNyQixHQUFHLEVBQUUscUNBQXFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLEVBQUU7SUFFUixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUVFNYXBXWCA9IHJlcXVpcmUoXCIuLi8uLi9saWIvcXFtYXAtd3gtanNzZGsxLjIvcXFtYXAtd3gtanNzZGsuanNcIik7XHJcbmNvbnN0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdG9vbC5qc1wiKTtcclxudmFyIHFxbWFwc2RrOiBhbnk7XHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGtleXdvcmQ6IFwi5bm/5Lic5bel5Lia5aSn5a2mXCIsXHJcbiAgICBsYXQ6IDIzLjA5OTk5NCxcclxuICAgIGxuZzogMTEzLjMyNDUyLFxyXG4gICAgbWFya2VyOiBbXSxcclxuICAgIHN1Z2dlc3RzOiBbXSxcclxuICAgIHNlbmRpbmc6IGZhbHNlXHJcbiAgfSxcclxuICBzZWFyY2hMb2FkKGU6IGFueSkge1xyXG4gICAgbGV0IGtleXdvcmQ6IHN0cmluZyA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuICAgIC8qIGRlYm91bmNlKHRoaXMuc2VhcmNoU2l0ZSwgW2tleXdvcmRdLCAzMDAwKSgpOyAqL1xyXG4gICAgdGhpcy5zZWFyY2hTaXRlKGtleXdvcmQpO1xyXG4gIH0sXHJcbiAgLy/osIPnlKjohb7orq/lnLDlm75TREvmn6Xor6LlnLDngrlcclxuICBzZWFyY2hTaXRlKGtleXdvcmQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLnNlbmRpbmcpIHJldHVybjtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlbmRpbmc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHFxbWFwc2RrLnNlYXJjaCh7XHJcbiAgICAgICAga2V5d29yZCxcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKFwi5oiQ5Yqf5LqGXCIsIHJlcywgXCJrZXl3b3JkXCIsIGtleXdvcmQpLFxyXG4gICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4gY29uc29sZS5sb2coXCLlpLHotKXkuoZcIiwgcmVzKSxcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2VuZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LFxyXG4gIHN1Z2dlc3RMb2FkKGU6IGFueSkge1xyXG4gICAgbGV0IGtleXdvcmQ6IHN0cmluZyA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuICAgIHRoaXMuZ2V0U3VnZ2VzdChrZXl3b3JkKTtcclxuICB9LFxyXG4gIC8v5YWz6ZSu6K+N55qE6I635Y+WXHJcbiAgZ2V0U3VnZ2VzdChrZXl3b3JkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuc2VuZGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2VuZGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcXFtYXBzZGsuZ2V0U3VnZ2VzdGlvbih7XHJcbiAgICAgICAga2V5d29yZCxcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBSZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHN1Z2dlc3RzOiByZXMuZGF0YVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkOWKn+S6hlwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IChlcnI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLlpLHotKXkuoZcIiwgZXJyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBzZW5kaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH0sXHJcbiAgLyogc3VnZ2VzdExvYWQoZTogYW55KSB7XHJcbiAgICBsZXQga2V5d29yZDogc3RyaW5nID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG4gICAgZGVib3VuY2UodGhpcy5nZXRTdWdnZXN0LCBba2V5d29yZF0sIDMwMDApKCk7XHJcbiAgfSwgKi9cclxuICBvbkxvYWQ6ICgpID0+IHtcclxuICAgIC8v5a6e5L6L5YyW5Zyw5Zu+QVBJXHJcbiAgICBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcclxuICAgICAga2V5OiBcIk1ZNkJaLTJaWktHLVZZTVFYLUlaV01ZLUxDTFRTLTNMQjQ1XCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAvKiB0aGlzLmdldFN1Z2dlc3QoKTsgKi9cclxuICB9XHJcbn0pO1xyXG4iXX0=