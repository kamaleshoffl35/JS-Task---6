function common(arr1,arr2){
    let common =[]
    let len1 = 0
    for(let i in arr1){
        len1++
    }
    let len2 =0
    for(let j in arr2){
        len2++
    }
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
           if(arr1[i]===arr2[j]){
              let alreadyExists = false
              let k = 0
              for(k in common){
                if(common[i]==arr1[i]){
                  alreadyExists = true
                  break
                }
              }
              if(!alreadyExists){
                common[common.length] = arr1[i]
              }
           }
        }
    }
    for(let x in common){
        console.log(common[x])
    }

    
}
let arr1 = [1,2,3]
let arr2 = [2,3,4]
common(arr1,arr2)