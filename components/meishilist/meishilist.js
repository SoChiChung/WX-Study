Component({
    /**
     * 组件的属性列表
     */
    properties: {
        datalist: Object
    },

    /**
     * 组件的初始数据
     */
    data: {
        
    },

    /**
     * 组件的方法列表
     */
    methods: {
        jumpto:function (c) {
            let id=c.target.dataset.variable
            wx.navigateTo({
                url: '../../pages/list_change/list_change?categoryid='+id
            })
        }
    }
})
