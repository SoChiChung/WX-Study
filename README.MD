## 这是学习小程序的项目

### 09.01 2：30

实现了获取用户信息功能：

- 通过**wx.getSetting** 获取用户配置
- 通过**wx.getUserInfo** 获取用户信息
- 根据**\*result.authSetting['scope.userInfo']** 的存在判断用户是否之前向程序授权过用户信息
- 通过的判断**button** 的**bindgetuserinfo**返回的 data 中的**data.detail.rawdata**是否存在 判断用户按的是允许还是拒绝

### 09.01 22：30

实现了新闻概述展示：

- 新闻展示在 list 页面
- 相比于**template** 模板 我使用了 component 组件 因为 component 组件更注重于逻辑的交互 如果一个 pages 转成 component 需要在他的 json 文件上写上：

```JavaScript
    "component": true,
    "usingComponents": {}
```

- 打算使用聚合数据的新闻接口 但是由于服务器没有配置合法域名 所以**wx.request** 使用不了 等审核过了明天再做吧

最后说一句 rng 牛逼！

### 10.31 17:00

由于课程作业需要 根据此项目进行了微调

- 实现侧边导航栏功能 点击 tabbar 的分类即可查看
- 由于没有合适的数据接口 所以用了**data/categorydata**里面的数据
- 打算明天实现首页功能

### 11.02 2:00

尼玛爬虫数据错了 很烦
fpx 牛逼！！！
