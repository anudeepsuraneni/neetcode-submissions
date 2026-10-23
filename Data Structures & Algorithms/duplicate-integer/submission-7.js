class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {        
        // O(n) O(n)
        const seen = new Set();
        for (const n of nums) {
            if (seen.has(n)) return true;
            seen.add(n);
        }
        return false;

        // O(n^2) O(1) 
        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                if (nums[i] == nums[j]) return true;
            }
        }
        return false;
    }
}
