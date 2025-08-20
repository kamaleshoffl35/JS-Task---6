function Uniquearr(arr){
    let Unique = []
    let index = 0
    for(i=0;i<arr.length;i++){
        if(!Unique.includes(arr[i]))
            {
               Unique[index] = arr[i]
            index++
            }
            
        
    }
    return Unique
    
}
let arr = [1,2,2,3,3]
console.log(Uniquearr(arr))