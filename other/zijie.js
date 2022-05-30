var tree = {
  a:[
    {a1: 'A1'},
    {a2: 'A2'},
  ],
  b: {
    c: 1
  }
}
console.log(treeToArr(tree));

/**
 * ['a.list.a1.A1', 'a.list.a2.A2', 'b.c.1']
 */
function treeToArr(tree) {
  const result = [];
  run('', tree)
  function run (str, val){
    if(!val || typeof val !== 'object') {
      result.push(`${str}.${val}`);
    } else if(Array.isArray(val)) {
      val.forEach(item => {
        run(`${str}.list`, item)
      });
    } else {
      Object.keys(val).forEach(key => {
        run(`${str}.${key}`, val[key])
      })
    }
  }
  return result.map(item => item.substr(1));
}
