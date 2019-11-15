// components/toast-input/toast-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /* confirm 和 cancel都是通过父组件传入调用的 */
    confirm() {
      this.triggerEvent("confirm");
    },
    cancel() {
      this.triggerEvent("cancel");
    }
  }
});
