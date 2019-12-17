"use strict";
Component({
    properties: {
        propsdata: {
            type: Array
        }
    },
    data: {
        formData: {},
        radioItems: [
            { name: "cell standard", value: "0", checked: true },
            { name: "cell standard", value: "1" },
            { name: "cell standard", value: "0", checked: true },
            { name: "cell standard", value: "1" }
        ],
        rules: [
            {
                name: "radio",
                rules: { required: true, message: "单选列表是必选项" }
            },
            {
                name: "checkbox",
                rules: { required: true, message: "多选列表是必选项" }
            },
            {
                name: "qq",
                rules: { required: true, message: "qq必填" }
            },
            {
                name: "mobile",
                rules: [
                    { required: true, message: "mobile必填" },
                    { mobile: true, message: "mobile格式不对" }
                ]
            },
            {
                name: "vcode",
                rules: { required: true, message: "验证码必填" }
            },
            {
                name: "idcard",
                rules: { required: true, message: "idcard必填" }
            }
        ]
    },
    methods: {
        radioChange: function (e) {
            var _a;
            console.log("radio发生change事件，携带value值为：", e.detail.value);
            var radioItems = this.data.radioItems;
            for (var i = 0, len = radioItems.length; i < len; ++i) {
                radioItems[i].checked = radioItems[i].value == e.detail.value;
            }
            this.setData((_a = {
                    radioItems: radioItems
                },
                _a["formData.radio"] = e.detail.value,
                _a));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VhcmNoTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LXNlYXJjaExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBQztRQUNULFNBQVMsRUFBQztZQUNSLElBQUksRUFBQyxLQUFLO1NBQ1g7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFO1lBQ1YsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNyQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1NBQ3RDO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO2FBQy9DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTthQUMvQztZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTthQUMzQztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRTtvQkFDTCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtvQkFDdkMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7aUJBQ3hDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7YUFDNUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7YUFDL0M7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsV0FBVyxFQUFFLFVBQVMsQ0FBQzs7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUMvRDtZQUVELElBQUksQ0FBQyxPQUFPO29CQUNWLFVBQVUsRUFBRSxVQUFVOztnQkFDdEIsR0FBQyxnQkFBZ0IsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ2xDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6e1xyXG4gICAgcHJvcHNkYXRhOntcclxuICAgICAgdHlwZTpBcnJheVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgZm9ybURhdGE6IHt9LFxyXG4gICAgcmFkaW9JdGVtczogW1xyXG4gICAgICB7IG5hbWU6IFwiY2VsbCBzdGFuZGFyZFwiLCB2YWx1ZTogXCIwXCIsIGNoZWNrZWQ6IHRydWUgfSxcclxuICAgICAgeyBuYW1lOiBcImNlbGwgc3RhbmRhcmRcIiwgdmFsdWU6IFwiMVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJjZWxsIHN0YW5kYXJkXCIsIHZhbHVlOiBcIjBcIiwgY2hlY2tlZDogdHJ1ZSB9LFxyXG4gICAgICB7IG5hbWU6IFwiY2VsbCBzdGFuZGFyZFwiLCB2YWx1ZTogXCIxXCIgfVxyXG4gICAgXSxcclxuICAgIHJ1bGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcInJhZGlvXCIsXHJcbiAgICAgICAgcnVsZXM6IHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi5Y2V6YCJ5YiX6KGo5piv5b+F6YCJ6aG5XCIgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJjaGVja2JveFwiLFxyXG4gICAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuWkmumAieWIl+ihqOaYr+W/hemAiemhuVwiIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwicXFcIixcclxuICAgICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJxceW/heWhq1wiIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwibW9iaWxlXCIsXHJcbiAgICAgICAgcnVsZXM6IFtcclxuICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwibW9iaWxl5b+F5aGrXCIgfSxcclxuICAgICAgICAgIHsgbW9iaWxlOiB0cnVlLCBtZXNzYWdlOiBcIm1vYmlsZeagvOW8j+S4jeWvuVwiIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcInZjb2RlXCIsXHJcbiAgICAgICAgcnVsZXM6IHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi6aqM6K+B56CB5b+F5aGrXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJpZGNhcmRcIixcclxuICAgICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJpZGNhcmTlv4XloatcIiB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHJhZGlvQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaW/lj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8mlwiLCBlLmRldGFpbC52YWx1ZSk7XHJcblxyXG4gICAgICB2YXIgcmFkaW9JdGVtcyA9IHRoaXMuZGF0YS5yYWRpb0l0ZW1zO1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmFkaW9JdGVtcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHJhZGlvSXRlbXNbaV0uY2hlY2tlZCA9IHJhZGlvSXRlbXNbaV0udmFsdWUgPT0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcmFkaW9JdGVtczogcmFkaW9JdGVtcyxcclxuICAgICAgICBbYGZvcm1EYXRhLnJhZGlvYF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==