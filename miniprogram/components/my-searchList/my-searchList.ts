Component({
  properties: {
    propsData:{
      type:Object
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
      console.log("radio发生change事件，携带value值为：", e.detail.value);

      var radioItems = this.data.radioItems;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
      }

      this.setData({
        radioItems: radioItems,
        [`formData.radio`]: e.detail.value
      });
    }
  }
});
