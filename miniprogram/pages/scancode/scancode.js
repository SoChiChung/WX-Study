"use strict";
Page({
    data: {},
    scan: function () {
        wx.scanCode({
            success: function (res) {
                console.log(res);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbmNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2FuY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFLEVBQUU7SUFDUixJQUFJO1FBQ0YsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNWLE9BQU8sRUFBRSxVQUFBLEdBQUc7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRiID0gd3guY2xvdWQuZGF0YWJhc2UoKVxyXG4vLyBjb25zdCBhPWdldFxyXG5QYWdlKHtcclxuICBkYXRhOiB7fSxcclxuICBzY2FuKCkge1xyXG4gICAgd3guc2NhbkNvZGUoe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==