"use strict";
Component({
    properties: {
        propsData: {
            type: Object
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VhcmNoTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LXNlYXJjaExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRTtRQUNWLFNBQVMsRUFBQztZQUNSLElBQUksRUFBQyxNQUFNO1NBQ1o7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFO1lBQ1YsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNyQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1NBQ3RDO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFO2FBQy9DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTthQUMvQztZQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTthQUMzQztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRTtvQkFDTCxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTtvQkFDdkMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7aUJBQ3hDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7YUFDNUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7YUFDL0M7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUMvRDtZQUVELElBQUksQ0FBQyxPQUFPO29CQUNWLFVBQVUsRUFBRSxVQUFVOztnQkFDdEIsR0FBQyxnQkFBZ0IsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ2xDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHByb3BzRGF0YTp7XHJcbiAgICAgIHR5cGU6T2JqZWN0XHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBmb3JtRGF0YToge30sXHJcbiAgICByYWRpb0l0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogXCJjZWxsIHN0YW5kYXJkXCIsIHZhbHVlOiBcIjBcIiwgY2hlY2tlZDogdHJ1ZSB9LFxyXG4gICAgICB7IG5hbWU6IFwiY2VsbCBzdGFuZGFyZFwiLCB2YWx1ZTogXCIxXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImNlbGwgc3RhbmRhcmRcIiwgdmFsdWU6IFwiMFwiLCBjaGVja2VkOiB0cnVlIH0sXHJcbiAgICAgIHsgbmFtZTogXCJjZWxsIHN0YW5kYXJkXCIsIHZhbHVlOiBcIjFcIiB9XHJcbiAgICBdLFxyXG4gICAgcnVsZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwicmFkaW9cIixcclxuICAgICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLljZXpgInliJfooajmmK/lv4XpgInpoblcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImNoZWNrYm94XCIsXHJcbiAgICAgICAgcnVsZXM6IHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi5aSa6YCJ5YiX6KGo5piv5b+F6YCJ6aG5XCIgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJxcVwiLFxyXG4gICAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcInFx5b+F5aGrXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJtb2JpbGVcIixcclxuICAgICAgICBydWxlczogW1xyXG4gICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJtb2JpbGXlv4XloatcIiB9LFxyXG4gICAgICAgICAgeyBtb2JpbGU6IHRydWUsIG1lc3NhZ2U6IFwibW9iaWxl5qC85byP5LiN5a+5XCIgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwidmNvZGVcIixcclxuICAgICAgICBydWxlczogeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLpqozor4HnoIHlv4XloatcIiB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImlkY2FyZFwiLFxyXG4gICAgICAgIHJ1bGVzOiB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcImlkY2FyZOW/heWhq1wiIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgcmFkaW9DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaW/lj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8mlwiLCBlLmRldGFpbC52YWx1ZSk7XHJcblxyXG4gICAgICB2YXIgcmFkaW9JdGVtcyA9IHRoaXMuZGF0YS5yYWRpb0l0ZW1zO1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcmFkaW9JdGVtcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHJhZGlvSXRlbXNbaV0uY2hlY2tlZCA9IHJhZGlvSXRlbXNbaV0udmFsdWUgPT0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgcmFkaW9JdGVtczogcmFkaW9JdGVtcyxcclxuICAgICAgICBbYGZvcm1EYXRhLnJhZGlvYF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdfQ==