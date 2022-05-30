var words = ["apple","app"], order = "hlabcdefgijkmnopqrstuvwxyz";

console.log(isAlienSorted(words, order));
function isAlienSorted(words, order) {
  let oldWords = words.join(',');
  const map = Array.from(order).reduce((sum, key, index) => {
    sum[key] = index;
    return sum
  }, {});
  const newWards = words.sort((word1, word2) => {
    return compare(word1, word2)
  })
  return newWards.join(',') === oldWords

  function compare(word1, word2) {
    for(let i = 0; i<= word1.length && i<=word2.length; i++) {
      if(!word2[i]) return 1;
      if(!word1[i]) return -1;
      if(word1[i] === word2[i]) {
        continue
      } else if(map[word1[i]] > map[word2[i]]) {
        return 1
      } else {
        return -1;
      }
    }
  }
};
