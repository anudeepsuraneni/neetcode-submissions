class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // O(n) O(n)
        const prev = new Map();
        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];
            if (prev.has(need)) return [prev.get(need), i];
            prev.set(nums[i], i);
        }

        // O(n^2) O(1)
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    }
}
