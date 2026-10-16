class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const x of nums) {
            if (!seen.has(x)) {
                seen.add(x);
            } else {
                return true;
            }
        }
        return false;
    }
}