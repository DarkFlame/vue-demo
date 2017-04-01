
const Dep = {
    target: null
}

function defineReactive(obj, key, val){
    const deps = []

    Object.defineProperty(obj, key, {
        get: function(){
            console.log('set age')
            if(Dep.target && deps.indexOf(Dep.target) == -1){
                deps.push(Dep.target)
            }
            return val
        },
        set: function(newVal){
            console.log(deps)
            val = newVal
            // 通知所有 依赖器 执行计算函数: onDependencyUpdate
            deps.forEach( updateCallBack => {
                updateCallBack()
            })
        }
    })
}


function defineComputed(obj, key, computedFn, updateCallBack){
    const onDependencyUpdate = () => {
        const val = computedFn()
        updateCallBack(val)
    }

    Object.defineProperty(obj, key, {
        get: function(){
            console.log(111)
            Dep.target = onDependencyUpdate
            const newVal = computedFn()
            // reset target  其他属性就不会再添加这个依赖
            Dep.target = null
            return newVal
        },
        set: function(){
            // nothing 不做 setter
        }
    })
}


const person = {}

defineReactive(person, 'name', 'tink')
defineReactive(person, 'age', 20)


defineComputed(
    person,
    'status',
    function(){
        if(person.age > 18){
            console.log('this is man')
            return 'man'
        }else {
            console.log('this is boy')
            return 'boy'
        }
    },
    function(newVal){
        console.log('person.status now is ' + newVal)
    }
)


// console.log(person.status)
person.age = 15
console.log(person.status)
person.age = 20
