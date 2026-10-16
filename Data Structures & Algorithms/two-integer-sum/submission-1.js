class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexOf = new Map();
        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            if (indexOf.has(need)) return [indexOf.get(need), i];
            indexOf.set(nums[i], i);
        }
        return [];
    }
}
