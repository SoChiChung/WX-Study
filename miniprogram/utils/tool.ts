//防抖
function debounce(this: any, fn: Function, args: any[],time:number) {
  const that = this;
  let timeout: any = null;
  return ()=> {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(that, ...args);
      /* fn(...args) */
    }, time);
  };
}

function throttle(this: any, fn: Function, args: any[]) {
  const that = this;
  let canRun: boolean = true;
  return function() {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      /* fn.call(this, args) */
      /* fn.call(this,...args) */
      fn.call(that, ...args);
      canRun = true;
    }, 2000);
  };
}
export = {
  debounce,
  throttle
};
