const arr =[1,2,3,4,5,5,4]
let Unique = []
for(i=0;i<arr.length;i++){
    if(!Unique.includes(arr[i])){
        Unique.push(arr[i])
    }

}
console.log(Unique)