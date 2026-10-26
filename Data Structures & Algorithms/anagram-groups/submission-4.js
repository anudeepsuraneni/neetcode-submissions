class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = new Map();
        for (const st of strs) {
            const counts = new Array(26).fill(0);
            for (let i = 0; i < st.length; i++) {
                counts[st.charCodeAt(i) - 97] += 1;
            }
            const key = counts.join(',');
            if (!res.has(key)) res.set(key, []);
            res.get(key).push(st);
        }
        return [...res.values()];
    }
}
