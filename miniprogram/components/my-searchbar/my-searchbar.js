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
        },
        click: function (e) {
            this.setData({
                value: e.detail.value
            });
            this.triggerEvent("click", e);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VhcmNoYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktc2VhcmNoYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFBRTtJQUtkLElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUtELE9BQU8sRUFBRTtRQUVQLElBQUksRUFBSixVQUFLLENBQU07WUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELEtBQUssRUFBTCxVQUFNLENBQU07WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9teS1zZWFyY2hiYXIvbXktc2VhcmNoYmFyLnRzXHJcbi8vIGNvbnN0IHsgZGVib3VuY2UsIHRocm90dGxlIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvdG9vbC5qc1wiKTtcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgYXJyYXk6IFtdLFxyXG4gICAgdmFsdWU6IFwiXCJcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICAvL+S4gOS4qmxvYWQg5Ye95pWwIOS4gOS4qmNsaWNrIOWHveaVsFxyXG4gICAgbG9hZChlOiBhbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwibG9hZFwiLCBlKTtcclxuICAgIH0sXHJcbiAgICBjbGljayhlOiBhbnkpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2xpY2tcIiwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl19