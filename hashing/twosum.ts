function twoSum(nums: number[], target: number): number[] {
    const map: Record<number, number> = {};
    let complement = 0;
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (complement in map && map[complement] !== i) {
            return [i, map[complement]];
        }
    }
    return [];
};
console.log(twoSum([2, 7, 10, 3], 9));