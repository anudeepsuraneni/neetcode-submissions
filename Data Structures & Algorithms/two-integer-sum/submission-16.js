class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const p = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (p.has(target - nums[i])) {
                return [p.get(target - nums[i]), i];
            }

            p.set(nums[i], i);
        }
    }
}
