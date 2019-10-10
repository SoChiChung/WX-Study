## 这是学习小程序的项目

### 09.01 2：30

实现了获取用户信息功能：
+ 通过**wx.getSetting** 获取用户配置
+ 通过**wx.getUserInfo** 获取用户信息
+ 根据***result.authSetting['scope.userInfo']** 的存在判断用户是否之前向程序授权过用户信息
+ 通过的判断**button** 的**bindgetuserinfo**返回的data中的**data.detail.rawdata**是否存在 判断用户按的是允许还是拒绝

### 09.01 22：30
实现了新闻概述展示：
+ 新闻展示在list页面
+ 相比于**template** 模板 我使用了component组件 因为component组件更注重于逻辑的交互 如果一个pages转成component 需要在他的json文件上写上：
```JavaScript
    "component": true,
    "usingComponents": {}
```
+ 打算使用聚合数据的新闻接口 但是由于服务器没有配置合法域名 所以**wx.request** 使用不了 等审核过了明天再做吧

最后说一句 rng牛逼！