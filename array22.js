function flat(arr){
    let result =[]
    let stack = {...arr}
    while(stack.length){
        let next = stack.pop()
        if(Array.isArray(next)){
            stack.push(...next)
        }
        else{
            result.push(next)
        }
    }
    return result.reverse()
}