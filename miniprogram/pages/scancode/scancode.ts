// const db = wx.cloud.database()
// const a=get
Page({
    data: {
        bookslist: []
    },
    scan() {
        wx.scanCode({
            success: res => {
                console.log(res);
                console.log("res")
                this.getUserById();
            }
        });
    },
    //   跳转至对应二维码
    jumptoqrcode(e: myevent) {
        console.log(e);
        let { id } = e.target.dataset;
        /* let url = `../qrcode/qrcode?id=${id}`; */
        let url = "../qrcode/qrcode?id=" + id;
        wx.navigateTo({
            url
        });
    },
    onLoad() {
        wx.cloud.init();
    },
    onReady() {
        this.getAllBooks()
        wx.cloud
            .callFunction({
                name: "updateBookById"
            })
            .then((res: any) => {
                console.log(res);
            });
    },
    // 获取云数据库的所有书籍
    getAllBooks() {
        wx.cloud
            .callFunction({
                name: "getBooks"
            })
            .then((res: any) => {
                console.log(res);
                let result = res.result || {};
                if (typeof result == "object") {
                    let rd = result.data || {};
                    if (rd) {
                        let data = rd.data || {};
                        this.setData({
                            bookslist: data
                        });
                    }
                }
            });
    },
    updateBookById(bid:string) {
        wx.cloud
            .callFunction({
                name: "updateBookById",
                data: {
                    bid
                }
            })
    },
    getUserById() {
        let user = {};
        wx.cloud
            .callFunction({
                name: "UserById",
            }).then((res: any) => {
                console.log('get')
                console.log(res);
                let result = res.result || {};
                if (typeof result == "object") {
                    let rd = result.data || {};
                    if (rd) {
                        let data = rd.data || {};
                        user = data[0]
                    }
                }
            });
        if (Object.keys(user).length == 0) {
            this.createUser();
        }
    },
    createUser() {
        wx.cloud
            .callFunction({
                name: "createUser",
            }).then(res=>{
                console.log('create')
                console.log(res)})
    }
});
