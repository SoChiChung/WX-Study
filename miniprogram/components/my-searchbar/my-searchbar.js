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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktc2VhcmNoYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktc2VhcmNoYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUUsRUFDWDtJQUtELElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFDLEVBQUU7S0FDVDtJQUtELE9BQU8sRUFBRTtRQUVQLElBQUksRUFBSixVQUFLLENBQUs7WUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDdEIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9teS1zZWFyY2hiYXIvbXktc2VhcmNoYmFyLnRzXHJcbkNvbXBvbmVudCh7XHJcbiAgLyoqXHJcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXHJcbiAgICovXHJcbiAgcHJvcGVydGllczoge1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGFycmF5OiBbXSxcclxuICAgIHZhbHVlOlwiXCJcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcclxuICAgKi9cclxuICBtZXRob2RzOiB7XHJcbiAgICAvL+S4gOS4qmxvYWQg5Ye95pWwIOS4gOS4qmNsaWNrIOWHveaVsFxyXG4gICAgbG9hZChlOmFueSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcImxvYWRcIiwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=