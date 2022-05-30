/* vue3 中最大上升子序列 */

// console.log(maxUp([3,5, 1,2,4, 6]));

// 暴力破解
/*function maxUp(arr) {
  if(arr.length === 0) return 0;
  let max = [];
  run([], 0);
  function run(subArr, index) {
    if(index === arr.length - 1) {
      if(subArr.length>max.length) {
        max = subArr;
      }
      return;
    }
    for(let i = index; i < arr.length; i++) {
      const last = subArr[subArr.length - 1];
      if(!last || last < arr[i]) {
        run(subArr.slice().concat(arr[i]), index + 1);
      }
      run(subArr.slice(), index + 1);
    }
  }
  return max;
}*/

//

// function maxUp(arr) {
//   if(arr.length === 0) return 0;
//   /**
//    * dp[i]
//    * 表示从下标为0到下标为i的元素 && 下标i的元素要选中 后的最长子序列
//    */
//   let dp = [];
//   let max = 0;
//   dp[0] = 1;
//   for(let i = 1; i < arr.length; i++) {
//     dp[i] = 1; // 都只选择自身的情况
//     /**
//      * dp[i] >= max(dp[0], dp[1], ..., dp[j]) // j<i
//      * 什么时候>呢？ dp[i]>dp[j]时， 要加1
//      * dp[i] = max(
//      *      (arr[i]> arr[0]) ? ( dp[0] + 1): dp[0],
//      *      (arr[i]> arr[1]) ? ( dp[1] + 1): dp[1],
//      *      ......
//      *      (arr[i]> arr[j]) ? ( dp[j] + 1): dp[j]
//      * );
//      */
//     for(let j = 0; j < i; j++) {
//       if(arr[i] > arr[j]) {
//         dp[i] = Math.max(dp[j]+1, dp[i])
//       }
//     }
//     max = Math.max(dp[i],max)
//   }
//   return max;
// }






var a = maxUp([2,5,1,3,4,8])
console.log(a);
function maxUp(arr) {
  if (!arr.length) return 0;
  let max = 0;
  const dp = [];
  dp[0] = 1;
  for(let i = 1; i<arr.length; i++){
    dp[i] = 1;
    for(let j=0; j<i; j++) {
      if(arr[i] > arr[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    max = Math.max(dp[i], max)
  }
  console.log(dp);
  return max;
}


