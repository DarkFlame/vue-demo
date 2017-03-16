export default (options)=>{
    console.log(options)
    return function(store){
        var prevState = store.state
        store.subscribe(({ type, payload }, state) => {
            // 每次 mutation 之后调用,实际改变store.state之前执行
            // mutation 的格式为 { type, payload }
            // console.log(111)
        })
    }

}