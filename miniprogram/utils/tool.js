"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function debounce(fn, args) {
    var that = this;
    var timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.call.apply(fn, __spreadArrays([that], args));
        }, 5000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxTQUFTLFFBQVEsQ0FBWSxFQUFZLEVBQUUsSUFBVztJQUNwRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDO0lBQ3hCLE9BQU87UUFDTCxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxHQUFHLFVBQVUsQ0FBQztZQUNuQixFQUFFLENBQUMsSUFBSSxPQUFQLEVBQUUsa0JBQU0sSUFBSSxHQUFLLElBQUksR0FBRTtRQUV6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxRQUFRLENBQVksRUFBWSxFQUFFLElBQVc7SUFDcEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLElBQUksTUFBTSxHQUFZLElBQUksQ0FBQztJQUMzQixPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFVLENBQUM7WUFHVCxFQUFFLENBQUMsSUFBSSxPQUFQLEVBQUUsa0JBQU0sSUFBSSxHQUFLLElBQUksR0FBRTtZQUN2QixNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQztBQUNKLENBQUM7QUFDRCxpQkFBUztJQUNQLFFBQVEsVUFBQTtJQUNSLFFBQVEsVUFBQTtDQUNULENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+mYsuaKllxyXG5mdW5jdGlvbiBkZWJvdW5jZSh0aGlzOiBhbnksIGZuOiBGdW5jdGlvbiwgYXJnczogYW55W10pIHtcclxuICBjb25zdCB0aGF0ID0gdGhpcztcclxuICBsZXQgdGltZW91dDogYW55ID0gbnVsbDtcclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGZuLmNhbGwodGhhdCwgLi4uYXJncyk7XHJcbiAgICAgIC8qIGZuKC4uLmFyZ3MpICovXHJcbiAgICB9LCA1MDAwKTtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aHJvdHRsZSh0aGlzOiBhbnksIGZuOiBGdW5jdGlvbiwgYXJnczogYW55W10pIHtcclxuICBjb25zdCB0aGF0ID0gdGhpcztcclxuICBsZXQgY2FuUnVuOiBib29sZWFuID0gdHJ1ZTtcclxuICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIWNhblJ1bikgcmV0dXJuO1xyXG4gICAgY2FuUnVuID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLyogZm4uY2FsbCh0aGlzLCBhcmdzKSAqL1xyXG4gICAgICAvKiBmbi5jYWxsKHRoaXMsLi4uYXJncykgKi9cclxuICAgICAgZm4uY2FsbCh0aGF0LCAuLi5hcmdzKTtcclxuICAgICAgY2FuUnVuID0gdHJ1ZTtcclxuICAgIH0sIDIwMDApO1xyXG4gIH07XHJcbn1cclxuZXhwb3J0ID0ge1xyXG4gIGRlYm91bmNlLFxyXG4gIHRocm90dGxlXHJcbn07XHJcbiJdfQ==