class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split("").sort().join("") === t.split("").sort().join("");
        
        // O(n) O(n)
        if (s.length !== t.length) return false;
        const counts = new Map();
        for (const ch of s) {
            counts.set(ch, (counts.get(ch) ?? 0) + 1);
        }
        for (const ch of t) {
            if (!counts.has(ch)) return false;
            counts.set(ch, counts.get(ch) - 1);
            if (counts.get(ch) < 0) return false;
        }
        return true;
    }
}
