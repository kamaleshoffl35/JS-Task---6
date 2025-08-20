function del(arr,index){
    let len = 0
    for(let i in arr){
        len++
    }
    for(i=index;i<len-1;i++){
        arr[i] = arr[i+1]
    }
    arr[len-1] = undefined
    for(i=0;i<len-1;i++){
        console.log(arr[i])
    }
}
let arr = [1,2,2,3,4,5]
console.log(del(arr,2))