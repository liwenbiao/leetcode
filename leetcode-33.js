/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right ) {
        let mid = parseInt((left + right ) / 2);
        if ( target === nums[mid]) return mid;
        if ( nums[left] <= nums[mid]) {
            if ( target <= nums[mid] && target >= nums[left]){
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if ( target > nums[mid] && target <= muns[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};