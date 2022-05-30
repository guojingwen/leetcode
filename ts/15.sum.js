/*  暴力破解优化版 */
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([0,0,0]))
function threeSum (arr) {
  arr = arr.sort((a,b) => a-b);
  const result = new Set();
  if(arr.length < 3) return [];
  for(let i = 0; i < arr.length - 2; i++) {
    if(arr[i] > 0) {
      break;
    }
    for(let j = i+1; j < arr.length - 1; j++) {
      if(arr[i] + arr[j] > 0) {
        break;
      }
      for(let k = j+1; k< arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k]
        if(sum > 0) {
          break;
        }
        if(sum === 0) {
          result.add([arr[i], arr[j], arr[k]].join(','))
          break;
        }
      }
    }
  }
  return [...result].map(it => it.split(','));
}

/*  双指针算法   */
// console.log(threeSum2([-1,0,1,2,-1,-4]));
console.log(threeSum2([-2, 0, 1, 1, 2]))
function threeSum2 (arr) {
  arr.sort((a,b) => a-b);
  const result = new Set();
  if(arr.length < 3) return [];
  for(let i = 0; i < arr.length - 2; i++) {
    const a = arr[i];
    let start = i+1;
    let end = arr.length - 1;
    while (start < end) {
      const b = arr[start];
      const c = arr[end];
      if(a + b + c > 0 ) {
        end--;
      } else if(a + b + c === 0) {
        result.add([a, b, c].join(','));
        start++;
        end--;
      }  else  {
        start++;
      }
    }
  }
  return [...result].map(it => it.split(','));
}
