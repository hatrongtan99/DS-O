var pivotIndex = function(nums) {
    if (nums.length == 0) return -1
    if (nums.length == 1) return 0

    let leftSum = 0
    let sum = nums.reduce((acc, curr) => acc + curr, 0)

    for (let i = 0; i < nums.length; i++) {
        if (leftSum == sum - leftSum - nums[i]) return i
        leftSum += nums[i]
    }

    return -1
};