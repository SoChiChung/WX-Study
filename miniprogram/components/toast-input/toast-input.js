// components/toast-input/toast-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propname:{
      type:String,
      value:''
    },
    title:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:''//输入框内的文字
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /* confirm 和 cancel都是通过父组件传入调用的 */
    confirm() {
      let e={
        propname:this.properties.propname,
        value:this.data.inputValue
      }
      this.triggerEvent("confirm",e);
    },
    cancel(e) {
      let e1={
          dataset:{
            propname:e.target.dataset.propname,
            value:e.target.dataset.value
          }
      }
      this.triggerEvent("cancel",e1);
    },
    getInputValue(e){
      this.setData({
        inputValue:e.detail.value
      })
    }
  }
});
