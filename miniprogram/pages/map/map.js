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
        sending: false,
        timeout: null
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
                    var suggests = res.data;
                    _this.setData({
                        suggests: suggests
                    });
                    console.log("成功了", keyword);
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
        }, 1000);
    },
    setMapLocation: function (e) {
        console.log("mape", e);
        var _a = e.detail, lat = _a.lat, lng = _a.lng;
        this.setData({
            lat: lat,
            lng: lng
        });
    },
    onLoad: function () {
        qqmapsdk = new QQMapWX({
            key: "MY6BZ-2ZZKG-VYMQX-IZWMY-LCLTS-3LB45"
        });
    },
    onShow: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUNuRSxJQUFBLG1DQUF1RCxFQUFyRCxzQkFBUSxFQUFFLHNCQUEyQyxDQUFDO0FBQzlELElBQUksUUFBYSxDQUFDO0FBQ2xCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLFNBQVM7UUFDZCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsSUFBSTtLQUNkO0lBQ0QsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUU1QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLEVBQVYsVUFBVyxPQUFlO1FBQTFCLGlCQWlCQztRQWhCQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDO1lBQ1QsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDZCxPQUFPLFNBQUE7Z0JBQ1AsT0FBTyxFQUFFLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBM0MsQ0FBMkM7Z0JBQ2xFLElBQUksRUFBRSxVQUFDLEdBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUF2QixDQUF1QjtnQkFDM0MsUUFBUSxFQUFFO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNoQixJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVSxFQUFWLFVBQVcsT0FBZTtRQUExQixpQkF5QkM7UUF4QkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQztZQUNULFFBQVEsQ0FBQyxhQUFhLENBQUM7Z0JBQ3JCLE9BQU8sU0FBQTtnQkFDUCxPQUFPLEVBQUUsVUFBQyxHQUFpQjtvQkFDekIsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxRQUFRLFVBQUE7cUJBQ1QsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQVE7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsQ0FBQyxDQUFDO2dCQUNMLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsY0FBYyxFQUFkLFVBQWUsQ0FBTTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFBLGFBQXVCLEVBQXJCLFlBQUcsRUFBRSxZQUFnQixDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEtBQUE7WUFDSCxHQUFHLEtBQUE7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDO0lBS0QsTUFBTSxFQUFFO1FBRU4sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDO1lBQ3JCLEdBQUcsRUFBRSxxQ0FBcUM7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sRUFBRTtJQUVSLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBRUU1hcFdYID0gcmVxdWlyZShcIi4uLy4uL2xpYi9xcW1hcC13eC1qc3NkazEuMi9xcW1hcC13eC1qc3Nkay5qc1wiKTtcclxuY29uc3QgeyBkZWJvdW5jZSwgdGhyb3R0bGUgfSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy90b29sLmpzXCIpO1xyXG52YXIgcXFtYXBzZGs6IGFueTtcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAga2V5d29yZDogXCLlub/kuJzlt6XkuJrlpKflraZcIixcclxuICAgIGxhdDogMjMuMDk5OTk0LFxyXG4gICAgbG5nOiAxMTMuMzI0NTIsXHJcbiAgICBtYXJrZXI6IFtdLFxyXG4gICAgc3VnZ2VzdHM6IFtdLFxyXG4gICAgc2VuZGluZzogZmFsc2UsXHJcbiAgICB0aW1lb3V0OiBudWxsXHJcbiAgfSxcclxuICBzZWFyY2hMb2FkKGU6IGFueSkge1xyXG4gICAgbGV0IGtleXdvcmQ6IHN0cmluZyA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuICAgIC8qIGRlYm91bmNlKHRoaXMuc2VhcmNoU2l0ZSwgW2tleXdvcmRdLCAzMDAwKSgpOyAqL1xyXG4gICAgdGhpcy5zZWFyY2hTaXRlKGtleXdvcmQpO1xyXG4gIH0sXHJcbiAgLy/osIPnlKjohb7orq/lnLDlm75TREvmn6Xor6LlnLDngrlcclxuICBzZWFyY2hTaXRlKGtleXdvcmQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLnNlbmRpbmcpIHJldHVybjtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHNlbmRpbmc6IHRydWVcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHFxbWFwc2RrLnNlYXJjaCh7XHJcbiAgICAgICAga2V5d29yZCxcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKFwi5oiQ5Yqf5LqGXCIsIHJlcywgXCJrZXl3b3JkXCIsIGtleXdvcmQpLFxyXG4gICAgICAgIGZhaWw6IChyZXM6IGFueSkgPT4gY29uc29sZS5sb2coXCLlpLHotKXkuoZcIiwgcmVzKSxcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2VuZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9LFxyXG4gIHN1Z2dlc3RMb2FkKGU6IGFueSkge1xyXG4gICAgbGV0IGtleXdvcmQ6IHN0cmluZyA9IGUuZGV0YWlsLmRldGFpbC52YWx1ZTtcclxuICAgIHRoaXMuZ2V0U3VnZ2VzdChrZXl3b3JkKTtcclxuICB9LFxyXG4gIC8v5YWz6ZSu6K+N55qE6I635Y+WXHJcbiAgZ2V0U3VnZ2VzdChrZXl3b3JkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuc2VuZGluZykgcmV0dXJuO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgc2VuZGluZzogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcXFtYXBzZGsuZ2V0U3VnZ2VzdGlvbih7XHJcbiAgICAgICAga2V5d29yZCxcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBSZXNwb25zZURhdGEpID0+IHtcclxuICAgICAgICAgIGxldCBzdWdnZXN0cyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc3VnZ2VzdHNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCLmiJDlip/kuoZcIiwga2V5d29yZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiAoZXJyOiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aSx6LSl5LqGXCIsIGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2VuZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LFxyXG4gIHNldE1hcExvY2F0aW9uKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coXCJtYXBlXCIsIGUpO1xyXG4gICAgbGV0IHsgbGF0LCBsbmcgfSA9IGUuZGV0YWlsO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgbGF0LFxyXG4gICAgICBsbmdcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyogc3VnZ2VzdExvYWQoZTogYW55KSB7XHJcbiAgICBsZXQga2V5d29yZDogc3RyaW5nID0gZS5kZXRhaWwuZGV0YWlsLnZhbHVlO1xyXG4gICAgZGVib3VuY2UodGhpcy5nZXRTdWdnZXN0LCBba2V5d29yZF0sIDMwMDApKCk7XHJcbiAgfSwgKi9cclxuICBvbkxvYWQ6ICgpID0+IHtcclxuICAgIC8v5a6e5L6L5YyW5Zyw5Zu+QVBJXHJcbiAgICBxcW1hcHNkayA9IG5ldyBRUU1hcFdYKHtcclxuICAgICAga2V5OiBcIk1ZNkJaLTJaWktHLVZZTVFYLUlaV01ZLUxDTFRTLTNMQjQ1XCJcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAvKiB0aGlzLmdldFN1Z2dlc3QoKTsgKi9cclxuICB9XHJcbn0pO1xyXG4iXX0=