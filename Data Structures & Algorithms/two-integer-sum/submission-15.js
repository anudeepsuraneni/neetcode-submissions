class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const p = new Map();

        for (let i = 0; i < nums.length; i++) {
            const t = target - nums[i];

            if (p.has(t)) {
                return [p.get(t), i];
            }

            p.set(nums[i], i);
        }
    }
}
