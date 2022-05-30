// 方法1
// console.log(convert("PAYPALISHIRING", 4))
function convert(s, numRows) {
  const arr = Array.from({length: numRows}, () => []);
  let i = 0;
  let col = 0;
  while(i < s.length) {
    const yvshuo = col % (numRows-1);
    for (let j = 0; j < numRows; j++) {
      if(yvshuo === 0) {
        arr[j].push(s[i++]);
      } else {
        if(((numRows-1) - yvshuo) === j) {
          arr[j].push(s[i++])
        } else {
          arr[j].push('')
        }
      }
    }
    col++;
  }
  // console.log(arr)
  let str = arr.reduce((sum, row) => {
    sum+= row.join('');
    return sum;
  }, '');
  // console.log(str)
  return str;
};

// 方法2
console.log(convert2("PAYPALISHIRING", 4))
function convert2(s, numRows) {
  if(numRows === 1) return s;
  const n = s.length;
  const t = 2*numRows - 2; // 周期
  const c = Math.ceil(n/t) * (numRows - 1); // 多少列
  const map = {};
  for(let i =0; i< n; i++) {
    const nth = Math.floor(i/t);// 第几个周期
    const remain = i % t; // 周期的第几个数
    const x = nth * (numRows - 1) + (remain < numRows ? 0 : 1+(remain-numRows));
    const y = remain < numRows ? remain: ((numRows -2)-(remain - numRows));
    const key = x + y*c;
    map[key] = s[i];
  }
  return Object.keys(map).reduce((sum, key) => {
    sum += (map[key]||'')
    return sum;
  }, '');
};

