// components/my-searchbar/my-searchbar.ts
// const { debounce, throttle } = require("../../utils/tool.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    array: [],
    value: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //一个load 函数 一个click 函数
    load(e: any) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent("load", e);
    },
    click(e: any) {
      this.setData({
        value: e.detail.value
      });
      this.triggerEvent("click", e);
    }
  }
});
