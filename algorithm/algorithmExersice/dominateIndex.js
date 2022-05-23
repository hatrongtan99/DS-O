var dominantIndex = function(nums) {
    if (nums.length == 1) return 0
    let max = nums[0]
    let maxIndex = 0

    for (let i = 1; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i]
            maxIndex = i
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i] * 2 && i != maxIndex) {
            return -1
        }
    }
    return maxIndex
}