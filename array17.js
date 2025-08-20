function swap(arr){
    let length  = 0
    for(let i in arr){
        length++
    }
  
    if(length>1){
        let temp = arr[0]
        arr[0] = arr[length-1]
        arr[length -1] = temp
    }
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
let arr = [1,2,3,4,4]
swap(arr)