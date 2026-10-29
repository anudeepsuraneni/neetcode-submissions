class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((s) => s.length + '#' + s).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const out = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const len = Number(str.slice(i, j));
            out.push(str.slice(j+1, j+1+len));
            i = j+1+len;
        }
        return out;
    }
}
