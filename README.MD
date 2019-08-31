## 这是学习小程序的项目

### 09.01

实现了获取用户信息功能：
+ 通过**wx.getSetting** 获取用户配置
+ 通过**wx.getUserInfo** 获取用户信息
+ 根据***result.authSetting['scope.userInfo']** 的存在判断用户是否之前向程序授权过用户信息
+ 通过的判断**button** 的**bindgetuserinfo**返回的data中的**data.detail.rawdata**是否存在 判断用户按的是允许还是拒绝
