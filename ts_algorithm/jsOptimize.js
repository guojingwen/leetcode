function Fibonacci (n) {
  if ( n <= 1 ) {return 1};

  return Fibonacci(n - 1) + Fibonacci(n - 2);
}
// console.log(Fibonacci(10)) // 约1s
// console.log(Fibonacci(40)) // 约1s
// console.log(Fibonacci(45)) // 约10-15s
// console.log(Fibonacci(50)) // 卡死


function Fibonnacci2(n, ac1 = 1, ac2 = 1) {
  if(n ===1) return ac2;
  return Fibonnacci2(n-1, ac2, ac1+ac2);
}

// console.log(Fibonnacci2(1000)); // <1s响应

function currying(fn, ...rest) {
  return function(...args) {
    return fn.call(this, ...args, ...rest);
  }
}
const Fibonnacci3 = currying(Fibonnacci2, 1, 1);

// console.log(Fibonnacci3(50)) // ok


function sum(n) {
  if (n === 1) return 1;
  return 1 + sum(n - 1);
}

// console.log(sum(10469)); // ok
// console.log(sum(10470)); // 刚好栈溢出
// RangeError: Maximum call stack size exceeded

// 用循环代替递归


function trampline(f) {
  while(f instanceof Function) {
    f = f();
  }
  return f;
}
function mySum(x, y) {
  if(y>0) {
    return mySum.bind(null, x+1,y-1)
  } else {
    return x;
  }
}
// console.log(trampline(mySum(0, 10470))); // ok
// console.log(trampline(mySum(0, 104700))); // ok


function tco(fn) {
  let active = false
  const accumulator = [];
  let result;
  return function() {
    accumulator.push(arguments)
    if(!active) {
      active = true;
      while(accumulator.length) {
        result = fn.apply(this, accumulator.shift());
      }
      active = false;
      return result
    }
  }
}

const sum2 = tco(function(x,y) {
  if(y>0) {
    return sum2(x+1, y-1);
  }else {
    return x;
  }
});



console.log(sum2(0, 104700))

function tco(fn){
  let value;
  let active = false
  const accumulator = [];
  return function(){
    accumulator.push(arguments);
    if(!active) {
      active = true;
      while(accumulator.length) {
        value = fn.apply(this, accumulator.shift());
      }
      active = false;
      return value
    }
  }
}
