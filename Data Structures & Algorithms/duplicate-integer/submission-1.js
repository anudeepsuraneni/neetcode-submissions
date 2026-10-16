class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        const sorted_nums = nums.sort();
        for (const x of sorted_nums) {
            if (!seen.has(x)) {
                seen.add(x);
            } else {
                return true;
            }
        }
        return false;
    }
}