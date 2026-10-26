class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // O(n) O(n)
        if (s.length !== t.length) return false;
        const counts = new Map();
        for (const i of s) {
            counts.set(i, (counts.get(i) ?? 0) + 1);
        }
        for (const j of t) {
            if (!counts.has(j)) return false;
            counts.set(j, counts.get(j) - 1);
            if (counts.get(j) < 0) return false;
        }
        return true;
    }
}
