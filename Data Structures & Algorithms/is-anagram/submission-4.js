class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Map();
        for (const ch of s) {
            if (count.has(ch)) {
                count.set(ch, count.get(ch) + 1);
            } else count.set(ch, 1);
        }
        for (const ch of t) {
            if (!count.has(ch)) return false;
            count.set(ch, count.get(ch) - 1);
            if (count.get(ch) < 0) return false;
        }
        return true;
    }
}
