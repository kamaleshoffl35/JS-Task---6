function twoSum(nums, target){
    let length = 0
    for(let i in nums){
        length++
    }
    for(i=0;i<length;i++){
        for(j=i+1;j<length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
    return []
}
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))