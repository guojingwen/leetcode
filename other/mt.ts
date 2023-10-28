console.log(undefined + ' ' + '123');

var o = {
  v: 'hello',
  p: ['a1', 'a2'],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    });
  },
};

o.f();

Array.prototype._reduce = function (cb) {
  let len = arguments.length;
  let sum = len > 1 ? arguments[1] : this[0];
  for (let i = len > 1 ? 0 : 1; i < this.length; i++) {
    sum = cb(sum, this[i]);
  }
  return sum;
};

[1, 2, 3]._reduce((left, right) => left + right);

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });

// 没有自我介绍
// 刨根问底
// 最近把项目研究一遍，想想会问什么问题
