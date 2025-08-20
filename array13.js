function compare(arr1,arr2){
    let count1 = 0
    let count2 = 0
    for(let i in arr1){
        count1++
    }
    for(let j in arr2){
        count2++
    }
    if(count1 !== count2){
        return false
    }
    for(let k =0;k<count1;k++){
        if(arr1[k] !== arr2[k]){
            return false
        }
    }
    return true
}
console.log(compare([1,2],[1,2]))