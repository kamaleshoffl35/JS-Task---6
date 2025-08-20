function findMedianSortedArrays(nums1, nums2){
    let m =0
    for(let i = 0;i<nums1.length;i++)
        m++
    let n =0
    for(let j = 0;j<nums2.length;j++)
        n++
    let merged = []
    let index = 0
    for(i=0;i<m;i++){
        merged[index] = nums1[i]
        index++
    }
    for(j=0;j<n;j++){
        merged[index] = nums2[j]
        index++
    }
    len = m+n
    for(i=0;i<len-1;i++){
        for(j=0;j<len-i-1;j++){
            if(merged[j]>merged[j+1]){
                let temp=merged[j]
                merged[j] = merged[j+1]
                merged[j+1] = temp
            }
        }
    }
    if(len%2 === 1){
        let mid =(len-1)/2
        return merged[mid]
    }
    else{
        let mid1 = (len/2)-1
        let mid2 = len/2
        return merged[mid1]+merged[mid2]
    }
    
   
}

console.log(findMedianSortedArrays([1,3],[2]))
