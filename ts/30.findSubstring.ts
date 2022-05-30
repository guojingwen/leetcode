// var s = "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel";
// var words = ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"];
// console.log(findSubstring(s, words));
// 该版本会内存溢出
/*
function findSubstring(s: string, words: string[]): number[] {
    // 1. ['zoo']
    //    [ [ 'zoo' ] ]
    // 2. ['bar', 'zoo']
    //    [ [ 'bar', 'zoo' ], [ 'zoo', 'bar' ] ]
    // 3. ['foo', 'bar', 'zoo']
    //    [ [ 'foo', 'bar', 'zoo' ], [ 'bar', 'foo', 'zoo' ], [ 'bar', 'zoo', 'foo' ],
    //      [ 'foo', 'zoo', 'bar' ], [ 'zoo', 'foo', 'bar' ], [ 'zoo', 'bar', 'foo' ]]
    const remainWords = words.slice();
    let resolveWorlds: Array<Array<string>> = [[remainWords.pop()!]];
    while (remainWords.length) {
        const newResolveWorlds:Array<Array<string>> = [];
        const world = remainWords.pop()!;
        resolveWorlds.forEach(words => {
            for(let i=0; i<=words.length; i++){
                const item = words.slice();
                item.splice(i, 0, world);
                newResolveWorlds.push(item);
            }
        });
        resolveWorlds = newResolveWorlds;
    }
    const result: Set<number>= new Set();
    const strs = [...new Set(resolveWorlds.map(words => words.join('')))];
    if(s.length < strs[0].length) {
        return [...result];
    }
    strs.forEach(str => findIndexs(0, str, s));
    console.log(strs);
    return [...result];
    function findIndexs(preIndex: number, str: string, _s:string) {
        if(_s === '') return;
        const index = _s.indexOf(str);
        if(index !== -1) {
            const _index = preIndex + index;
            result.add(_index);
            findIndexs(_index + 1, str, _s.substring(index + 1));
        }
    }
};
*/

// 方法2 滑动窗口
// https://biaodigit.github.io/LeetCode/0030/#%E8%A7%A3%E9%A2%98%E6%80%9D%E8%B7%AF
var s = "wordgoodgoodgoodbestword", words = ["word","good","best","good"];
console.log(findSubstring(s, words));
function findSubstring(s: string, words: string[]): number[] {
    const res: number[] = [];
    if(!words.length) return res;
    const len = words[0].length;
    const wLen = words.length;
    const allLen = len * wLen;

    for(let i = 0; i<= s.length - allLen; i++) {
        const subStr = s.substring(i, i+allLen);
        const flag = check(subStr, words.slice());
        if(flag) {
            res.push(i);
        }
    }
    return res;
    function check(subStr, words): boolean {
        let flag = true;
        while (subStr.length) {
            const first = subStr.substring(0, len);
            const index = words.findIndex(word => word === first);
            if(index === -1) {
                flag = false;
                break;
            } else {
                words.splice(index, 1);
                subStr = subStr.substring(len);
            }
        }
        return flag
    }
}
