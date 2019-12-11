"use strict";
Component({
    properties: {},
    data: {
        array: [],
        value: ""
    },
    methods: {
        load: function (e) {
            this.setData({
                value: e.detail.value
            });
            this.triggerEvent("load", e);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VhcmNoYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktc2VhcmNoYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFDWDtJQUtELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFDLEVBQUU7S0FDVDtJQUtELE9BQU8sRUFBRTtRQUVQLElBQUksRUFBSixVQUFLLENBQUs7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9teS1zZWFyY2hiYXIvbXktc2VhcmNoYmFyLnRzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGFycmF5OiBbXSxcbiAgICB2YWx1ZTpcIlwiXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8v5LiA5LiqbG9hZCDlh73mlbAg5LiA5LiqY2xpY2sg5Ye95pWwXG4gICAgbG9hZChlOmFueSkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJsb2FkXCIsIGUpO1xuICAgIH1cbiAgfVxufSlcbiJdfQ==