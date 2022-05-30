console.log(longestCommonPrefix(["flower","flow","flight"]));
function longestCommonPrefix(strs) {
  if(strs.length === 1) return strs[0];
  let i = 0;
  let str = ''
  while (notEnd(i)) {
    for(let j = 1; j< strs.length; j++) {
      if(strs[0][i] !== strs[j][i]) {
        return str;
      }
      if(j === strs.length - 1) {
        str += strs[0][i];
        i++;
      }
    }
  }
  return str;
  function notEnd(i) {
    return !strs.some(str => str.length <= i)
  }
};
