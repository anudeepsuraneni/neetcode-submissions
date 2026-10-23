class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hm = new Map();
        for (let i = 0; i < nums.length; i++) {
            const p = target - nums[i];
            if (hm.has(p)) {
                return [hm.get(p), i];
            }
            hm.set(nums[i], i);
        }
    }
}
