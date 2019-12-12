"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function debounce(fn, args, time) {
    var that = this;
    var timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.call.apply(fn, __spreadArrays([that], args));
        }, time);
    };
}
function throttle(fn, args) {
    var that = this;
    var canRun = true;
    return function () {
        if (!canRun)
            return;
        canRun = false;
        setTimeout(function () {
            fn.call.apply(fn, __spreadArrays([that], args));
            canRun = true;
        }, 2000);
    };
}
module.exports = {
    debounce: debounce,
    throttle: throttle
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxTQUFTLFFBQVEsQ0FBWSxFQUFZLEVBQUUsSUFBVyxFQUFDLElBQVc7SUFDaEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksT0FBTyxHQUFRLElBQUksQ0FBQztJQUN4QixPQUFPO1FBQ0wsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDbkIsRUFBRSxDQUFDLElBQUksT0FBUCxFQUFFLGtCQUFNLElBQUksR0FBSyxJQUFJLEdBQUU7UUFFekIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFZLEVBQVksRUFBRSxJQUFXO0lBQ3BELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixJQUFJLE1BQU0sR0FBWSxJQUFJLENBQUM7SUFDM0IsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBVSxDQUFDO1lBR1QsRUFBRSxDQUFDLElBQUksT0FBUCxFQUFFLGtCQUFNLElBQUksR0FBSyxJQUFJLEdBQUU7WUFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDO0FBQ0QsaUJBQVM7SUFDUCxRQUFRLFVBQUE7SUFDUixRQUFRLFVBQUE7Q0FDVCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy/pmLLmipZcclxuZnVuY3Rpb24gZGVib3VuY2UodGhpczogYW55LCBmbjogRnVuY3Rpb24sIGFyZ3M6IGFueVtdLHRpbWU6bnVtYmVyKSB7XHJcbiAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgbGV0IHRpbWVvdXQ6IGFueSA9IG51bGw7XHJcbiAgcmV0dXJuICgpPT4ge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBmbi5jYWxsKHRoYXQsIC4uLmFyZ3MpO1xyXG4gICAgICAvKiBmbiguLi5hcmdzKSAqL1xyXG4gICAgfSwgdGltZSk7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGhyb3R0bGUodGhpczogYW55LCBmbjogRnVuY3Rpb24sIGFyZ3M6IGFueVtdKSB7XHJcbiAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgbGV0IGNhblJ1bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCFjYW5SdW4pIHJldHVybjtcclxuICAgIGNhblJ1biA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8qIGZuLmNhbGwodGhpcywgYXJncykgKi9cclxuICAgICAgLyogZm4uY2FsbCh0aGlzLC4uLmFyZ3MpICovXHJcbiAgICAgIGZuLmNhbGwodGhhdCwgLi4uYXJncyk7XHJcbiAgICAgIGNhblJ1biA9IHRydWU7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCA9IHtcclxuICBkZWJvdW5jZSxcclxuICB0aHJvdHRsZVxyXG59O1xyXG4iXX0=