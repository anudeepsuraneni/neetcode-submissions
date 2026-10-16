class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = new Map();
        for (const ch of s) count.set(ch, (count.get(ch) ?? 0) + 1);
        for (const ch of t) {
            const c = count.get(ch);
            if (!c) return false;
            count.set(ch, c-1);
        }
        return true;
    }
}
