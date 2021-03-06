/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
     for (let i = 1; i < intervals.length; i++) {
        let maxLeft = Math.min(intervals[i - 1][0], intervals[i][0])
        let maxRight = Math.max(intervals[i - 1][1], intervals[i][1])
        if (intervals[i - 1][1] >= intervals[i][0]) {
            // 可以合并
            intervals[i - 1] = [maxLeft, maxRight]
            intervals.splice(i, 1)
            i--
        }
    }
    return intervals
};