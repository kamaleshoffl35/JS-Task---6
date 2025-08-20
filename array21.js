function find(arr,element){
    let len = 0
    for(let i in arr){
        len++
    }
    for(i=0;i<len;i++){
        if(arr[i]===element){
            return i
        }
    }
    return -1
}
let arr = [1,2,3,4,5]
console.log(find(arr,4))