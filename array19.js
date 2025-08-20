function insert(arr,index, value){
    let len =0
    for(let i in arr){
        len++
    }
    for(i=len;i>index;i--){
        arr[i] =arr[i-1]
    }
    arr[index] = value
    for(i=0;i<=len;i++){
        console.log(arr[i])
    }
    
}
let arr = [1,2,3,4]
console.log(insert(arr,'2','99'))