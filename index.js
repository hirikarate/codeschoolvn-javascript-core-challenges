/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_1() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    return RESULT === foo()

    function foo() {
      a = 0
      var b = 2
      var result = a + b
      var a = 1
      return result
    }

}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    return RESULT === foo()

    // Function expression
    function foo() {
        return 99
    }

    // Function declaration
    var foo = function() {
        return 88
    }
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    function inc(val) {
        return val + 1
    }

    var num = 7
    var final = inc(num)

    function inc(val) {
        return val - 1
    }

    return RESULT === final
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_4() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    function inc(val) {
        return val + 1
    }

    num = inc(0)
    final = inc(num)

    function inc(val) {
        return val - 1
    }

    var num = 98
    var final = inc(num)

    return RESULT === final
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_5() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    var foo
    foo = 88

    let num = 2
    const final = (typeof foo === 'function' ? foo(num) : num)

    function foo(val) {
        return val * val
    }

    return RESULT === final
}


function doSomeThing() {
    val = 543
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_scope_1() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const foo = function () {
        return val++
    }

    doSomeThing()
    return (RESULT === foo())
}

/**
 * Hãy điền vào chỗ trống để không cho phép tự động khai báo biến toàn cục.
 */
function challenge_scope_2() {
    /********************************************************/
    // ĐIỀN VÀO CHỖ TRỐNG

    /********************************************************/

    const A = 987

    const foo = function () {
        return num
    }
    const assignGlobal = function () {
        num = 987
    }

    assignGlobal()
    return (A === foo() && A == global['num'])
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_scope_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    var a = 1

    const add = function (target) {
        return target + a
    }

    const doIt = function () {
        var a = 5
        return a + add(10)
    }

    return RESULT === doIt()
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_scope_4() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const a = 1,
        b = 2

    const doIt = function (condition) {
        const arr = [1, 2, 3]
        for (let a = 0; a < arr.length; ++a) {
            // Do nothing
        }

        for (var b = arr.length; b >= 0; --b) {
            // Do nothing
        }
        return a + b
    }

    return RESULT === doIt()
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_1() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = [2, 4, 6]
    return RESULT === arr[1]
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_1_extra_1() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = Array(2, 4, 6)
    return RESULT === (typeof arr[0])
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_1_extra_2() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = Array(2)
    return RESULT === (typeof arr[0])
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_1_extra_3() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = Array.from([2, 4, 6])
    return RESULT === (typeof arr[0])
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_1_extra_4() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = Array([2, 4, 6])
    return RESULT === (typeof arr[0])
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arrOne = [2, 4, 6]
    const arrTwo = [2, 4, 6]
    const isEqual = (arrOne === arrTwo)

    return RESULT === isEqual
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [2, 4, 6,
               1, 3, 5,
               8, 9, 0
            ]
    return RESULT === arr[1][2]
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_4() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [
                [2, 4, 6,
                1, 3, 5],
                [8, 9, 0]
            ]
    return RESULT === arr[1][2]
}


/**
 * 
 */
function challenge_array_5() {
    /********************************************************/
    const isEqual = function(arr1, arr2) {
        // ĐIỀN VÀO CHỖ TRỐNG
        // Cách 1: for loop
        //	- for (..;..;++i)
        //	- for in
        //	- for of
        // ???


        // Cách 2 (Functional): array.every(..)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
        // Cách 3: array.reduce(..)
        // ???

    }
    /********************************************************/

    return isEqual([2, 4, 6], [2, 4, 6])
        && !isEqual([1, 3], [1, 3, 5])
        && isEqual([2, 4, NaN], [2, 4, NaN])
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_6() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const filteredArr = arr.filter(el => el % 2 != 0)

    return RESULT === filteredArr[2]
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_7() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const mappedArr = arr.map(Math.pow)

    return RESULT === mappedArr[2]
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_array_8() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [0, 1, 2, 3]
    const inc = val => ++val
    const mappedArr = arr.map(inc)
    const reducedValue = mappedArr.reduce((prev, cur) => cur + prev, 0)

    return RESULT === reducedValue
}


/**
 * Hãy đặt giá trị cho RESULT_ONE và RESULT_TWO sao cho giá trị return là `true`
 */
function challenge_array_9() {
    /********************************************************/
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    function add([one, two, three]) {
        return [two, one + three]
    }

    const arr = [2, 3]
    const [resultOne, resultTwo] = add(arr)

    return RESULT_ONE === resultOne && 
        (RESULT_TWO + '') === (resultTwo + '') // Why + '' ?
}


/**
 * 
 */
function challenge_array_10() {
    /********************************************************/
    // ĐIỀN VÀO CHỖ TRỐNG

    // Cách 0: NOT working ;) ;p
    // function swap(first, sec) {
    //     const temp = first
    //     first = sec
    //     sec = temp
    // }

    // Cách 1:
        // C 1.1: Chỉ 01 dòng code
        // C 1.2: Chuyển (C 1.1) sang arrow function
    // function swap(first, sec) {
    //     // ???
    // }

    // Cách 2: "arguments" keyword
    // function swap ???

    // Cách 3:
        // C 3.1: Rest parameters
        // C 3.2: Array destructuring
    // function swap ???

    /********************************************************/

    const valOne = 123
    const valTwo = 456
    const [newOne, newTwo] = swap(valOne, valTwo)

    return valOne === newTwo && valTwo === newOne
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_equal_1() {
    /********************************************************/
    const RESULT = 0
    /********************************************************/

    const arr = [2, 4, 6]
    return RESULT === arr[3]
}

/**
 * Hãy đặt giá trị cho RESULT_ONE và RESULT_TWO sao cho giá trị return là `true`.
 */
function challenge_equal_2() {
    /********************************************************/
    const RESULT_ONE = 0
    const RESULT_TWO = 0
    /********************************************************/

    const arr = [2, 4, 6]
    return (RESULT_ONE == arr[3] && RESULT_TWO == arr[3] && RESULT_ONE !== RESULT_TWO)
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/
    const B = 3

    const C = RESULT + B
    return (C == '123' && C !== '123')
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_4() {
    /********************************************************/
    const RESULT = ''
    /********************************************************/

    const C = 1 + 2 + '3'
    return (C === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_5() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const C = 1 + 2 - '3'
    return (C === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_6() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const A = !'false'
    const B = Boolean(0)
    const isEqual = !!(A === B)
    return (isEqual === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_7() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const A = new Boolean(false)
    const B = Boolean(0)
    const isEqual = (A === B)
    return (isEqual === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_8() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const A = parseInt('Twenty')
    const B = A
    const isEqual = (A === B)
    return (isEqual === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT_ONE và RESULT_TWO sao cho giá trị return là `true`.
 */
function challenge_object_1() {
    /********************************************************/
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    let obj = {
        name: 100
    }
    obj.age = 'CodeSchool'
    return (obj.name === RESULT_ONE && obj[RESULT_TWO] === 'CodeSchool')
}

/**
 * Hãy đặt giá trị cho RESULT_ONE và RESULT_TWO sao cho giá trị return là `true`.
 */
function challenge_object_2() {
    /********************************************************/
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    let prop = ['a', 'd', 'd', 'r']
    let obj = {
        [prop.join('')]: 'Planet Earth', // Computed property [ES6]
        bar(msg) {
            console.log(msg)
        }

    }
    obj.age = 'CodeSchool'
    return (obj[RESULT_ONE] === 'Planet Earth' && typeof obj.bar === RESULT_TWO)
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_object_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const objOne = {
        name: 'CodeSchool',
        age: 20,
    }
    const objTwo = {
        name: 'CodeSchool',
        age: 20,
    }
    const isEqual = objOne === objTwo
    return RESULT === isEqual
}


/**
 * 
 */
function challenge_object_4() {
    /********************************************************/
    const isEqual = (objA, objB) => {
        // ĐIỀN VÀO CHỖ TRỐNG
        // - Cách 1: for in


        // - Cách 2: for of
        // Hint: Object.keys()


        // - Cách 3 (Functional): array.every(..) with Object.entries()


    }
    /********************************************************/

    return isEqual({ name: 'Code' }, { name: 'Code' })
        && !isEqual({ name: 'School' }, { name: 'School', age: 20 })
        && isEqual({ age: NaN }, { age: NaN })
}


/**
 * 
 */
function challenge_object_5() {
    const shallowClone = (source) => {
        /********************************************************/
        // ĐIỀN VÀO CHỖ TRỐNG
        // Cách 1: Loop

        // Cách 2: Object.assign()

        // Cách 3: Spread operator [ES6]

        // Cách 4: JSON.stringify() + JSON.parse()

        /********************************************************/
    }

    const isEqual = (objA, objB) => {
        // From challenge_object_4
    }
    const objSource = {
        name: 'CodeSchool',
        age: 20,
        address: 'Saigon',
    }
    const objCloned = shallowClone(objSource)

    return objSource !== objCloned && isEqual(objSource, objCloned)
}


/**
 * Read more: https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839
 */
function challenge_object_6() {
    const obj = {
        value: 6,
    	/********************************************************/
        // ĐIỀN VÀO CHỖ TRỐNG
        // Hint: toString / Symbol.toPrimitive

    	/********************************************************/
    }

    const msg = 'Value is: '
    return (msg + obj === 'Value is: six')
}


/**
 * 
 */
function challenge_object_7() {
    /********************************************************/
    // ĐIỀN VÀO CHỖ TRỐNG
    // const a = ???
    /********************************************************/

    return (a == 1 && a == 2 && a == 3)
    /* Hint:
     * Cách 1: valueOf / toString
     * Cách 2: Symbol.toPrimitive
     *   - C 2.1: Object property++
     *   - C 2.2: Global variable++
     *   - C 2.3: array.pop
     *   - C 2.4: Curried function: ((i) => () => ++i) (0)
     * Cách 3: array.join = array.shift
     */
}


/**
 * 
 */
function challenge_object_8() {
    /********************************************************/
    // ĐIỀN VÀO CHỖ TRỐNG
    // ??
    return (a === 1 && a === 2 && a === 3)
    /********************************************************/
    /* Hint:
     * Cách 1: with()
     * Cách 2: Object.defineProperty
     */
}

/**
 *
 */
function challenge_object_9() {
    const obj = {
        name: 'CodeSchool',
        age: 20,
    }

    /********************************************************/
    // CHUYỂN ĐOẠN MÃ SAU SANG DẠNG "Object destructuring"
    const name = obj.name,
        tuoi = obj.age
    /********************************************************/

    return name === obj.name && tuoi === obj.age
}

function challenge_object_9_extra_1() {
    const obj = {
        name: 'Code',
        learn: {
            at: {
                name: 'School',
            },
        },
    }

    /********************************************************/
    // CHUYỂN ĐOẠN MÃ SAU SANG DẠNG "Object destructuring"
    // const name = obj.learn.at.name
    /********************************************************/

    return name === 'School'
}

function challenge_object_9_extra_2() {
    const arr = [
        {
            learn: {
                at: 'CodeSchool',
            },
        },
        {
            learn: {
                at: 'Great Courses',
            },
        },
    ]

    /********************************************************/
    // CHUYỂN ĐOẠN MÃ SAU SANG DẠNG "Object và Array destructuring"
    // const codeschool = arr[1].learn.at
    /********************************************************/

    return codeschool === 'Great Courses'
}


/**
 * Hãy đặt giá trị cho NAME và AGE sao cho giá trị return là `true`.
 */
function challenge_object_10() {
    /********************************************************/
    const NAME = null
    const AGE = null
    /********************************************************/

    const objOne = {
        name: 'JavaScript',
        age: 22,
    }
    const objTwo = {
        name: 'ECMAScript',
        ...objOne,
        age: 44,
    }

    return objTwo.name === NAME && objTwo.age === AGE
}


/**
 * 
 */
function challenge_object_11() {
    const objBase = {
        name: 'JavaScript',
        age: 22,
    }

    const objChild = Object.create(objBase)
    objChild.address = 'earth'
    objChild.friend = 'TypeScript'

    const serialized = []
    /********************************************************/
    // THAY ĐỔI ĐOẠN MÃ SAU ĐỂ KẾT QUẢ RETURN `true` 
    // Cách 1: object.hasOwnProperty()
    // Cách 2: Object.getOwnPropertyNames()
    for (let prop in objChild) {
        serialized.push(prop)
    }
    /********************************************************/
    console.log({ serialized })

    return serialized.join(',') === 'address,friend'
}


/**
 * 
 */
function challenge_object_12() {
    const obj = {
        name: 'JavaScript',
        age: 22,
    }
    /********************************************************/
    // THAY ĐỔI ĐOẠN MÃ SAU ĐỂ KẾT QUẢ RETURN `true` 
    // (Object.defineProperty/Object.defineProperties + enumerable)
    obj.address = 'earth'
    obj.friend = 'TypeScript'
    /********************************************************/

    const serialized = []
    for (let val of Object.values(obj)) {
        serialized.push(val)
    }
    console.log({ serialized })

    return serialized.join(',') === 'JavaScript,22'
}


/**
 * Hãy đặt các giá trị sao cho giá trị return là `true`.
 */
function challenge_object_13() {
    /********************************************************/
    const EXCEPTION_ONE = null
    const EXCEPTION_TWO = null
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    const objOne = {
        name: 'JavaScript',
        age: 55,
    }

    const objTwo = {
        name: 'CoffeeScript',
        age: 11,
    }

    const sealed = Object.seal(objOne)
    const frozen = Object.freeze(objTwo)
    let navyException = {},
        letItGoException = {}

    try {
        sealed.age = 222
    } catch (err) {
        navyException = err
    }

    try {
        frozen.name = 'Elsa'
    } catch (err) {
        letItGoException = err
    }
    // console.log({navyException})
    // console.log({letItGoException})
    // console.log({seal: objOne.age})
    // console.log({frozen: objTwo.name})

    return (navyException instanceof Error) === EXCEPTION_ONE && 
        (letItGoException instanceof Error) === EXCEPTION_TWO &&
        sealed.age === RESULT_ONE && 
        frozen.name === RESULT_TWO
}


/**
 * Hãy đặt các giá trị sao cho giá trị return là `true`.
 */
function challenge_object_14() {
    'use strict'

    /********************************************************/
    const EXCEPTION_ONE = null
    const EXCEPTION_TWO = null
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    const objOne = {
        name: 'JavaScript',
        age: 55,
    }

    const objTwo = {
        name: 'CoffeeScript',
        age: 11,
    }

    Object.seal(objOne)
    Object.freeze(objTwo)
    let navyException = {},
        letItGoException = {}

    try {
        objOne.age = 222
    } catch (err) {
        navyException = err
    }

    try {
        objTwo.name = 'Elsa'
    } catch (err) {
        letItGoException = err
    }
    // console.log({navyException})
    // console.log({letItGoException})
    // console.log({seal: objOne.age})
    // console.log({frozen: objTwo.name})

    return (navyException instanceof Error) === EXCEPTION_ONE && 
        (letItGoException instanceof Error) === EXCEPTION_TWO &&
        objOne.age === RESULT_ONE && 
        objTwo.name === RESULT_TWO
}


/**
 * 
 */
function challenge_dynamic_type_1() {
    const A = 123

    const toBool = function(source) {
        let result
        /********************************************************/
        // ĐIỀN VÀO CHỖ TRỐNG (4 cách)
        // - Cách 1: condition
        // result = ???

        // - Cách 2: Negative of negative
        // result = ???

        // - Cách 3: Wrapping function
        // result = ???

        // - Cách 4: Wrapping class
        // result = ???

        /********************************************************/
        return result
    }


    return (toBool(A) === Boolean(A))
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    return (1 + 2 + '3' === RESULT)
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [1, 2, 3]

    return RESULT === (arr + '')
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_4() {
    /********************************************************/
    const RESULT_ONE = null
    const RESULT_TWO = null
    /********************************************************/

    const A = 'true'
    const B = true

    return RESULT_ONE === (A == B)
        && RESULT_TWO === (!A == !B)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_5() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    return RESULT === 2 - '1' + '3' + [4, 5]
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_6() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const obj = {}
    Object.defineProperties(obj, {
        city: {
            value: 'Sai Gon',
            enumerable: true,
            configurable: false,
        },
        planet: {
            value: 'Earth',
            enumerable: false,
            configurable: true,
        },
        galaxy: {
            value: 'Milky Way',
            enumerable: true,
            configurable: true,
        },
    })
    return RESULT === Object.keys(obj).join('#')
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_7() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const isEqual = Symbol('CodeSchool') === Symbol('CodeSchool')
    return RESULT === isEqual
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_8() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const isEqual = Symbol.for('CodeSchool') === Symbol.for('CodeSchool')
    return RESULT === isEqual
}


function challenge_dynamic_type_8() {
    const obj = {
        [Symbol('Code')]: 'School',
        planet: 'Earth',
        [Symbol.for('Great')]: 'Courses',
        galaxy: 'Milky Way',
    }
    /********************************************************/
    // SỬA ĐOẠN MÃ SAU ĐỂ KẾT QUẢ ĐÚNG
    const value = Object.keys(obj).map(k => obj[k]).join()
    /********************************************************/

    return value === 'School,Courses'
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_function_1() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const delegate = function (f, g) {
        return f
    }

    const sayHi = (name) => ('Hello ' + name)
    const sayBye = (name) => ('See ya ' + name)

    return (delegate(sayHi, sayBye)('CodeSchool') === RESULT)
}

/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_function_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const fn = function () {
        return arguments.length
    }

    return (fn(1, 2, 3, 4, 5) === RESULT)
}


module.exports = {
    challenge_hoist_1,
    challenge_hoist_2,
    challenge_hoist_3,
    challenge_hoist_4,
    challenge_hoist_5,
    challenge_scope_1,
    challenge_scope_2,
    challenge_scope_3,
    challenge_scope_4,
    challenge_array_1,
    challenge_array_1_extra_1,
    challenge_array_1_extra_2,
    challenge_array_1_extra_3,
    challenge_array_1_extra_4,
    challenge_array_2,
    challenge_array_3,
    challenge_array_4,
    challenge_array_5,
    challenge_array_6,
    challenge_array_7,
    challenge_array_8,
    challenge_array_9,
    challenge_array_10,
    challenge_equal_1,
    challenge_equal_2,
    challenge_equal_3,
    challenge_equal_4,
    challenge_equal_5,
    challenge_equal_6,
    challenge_equal_7,
    challenge_equal_8,
    challenge_object_1,
    challenge_object_2,
    challenge_object_3,
    challenge_object_4,
    challenge_object_5,
    challenge_object_6,
    challenge_object_7,
    challenge_object_8,
    challenge_object_9,
    challenge_object_9_extra_1,
    challenge_object_9_extra_2,
    challenge_object_10,
    challenge_object_11,
    challenge_object_12,
    challenge_object_13,
    challenge_object_14,
    challenge_dynamic_type_1,
    challenge_dynamic_type_2,
    challenge_dynamic_type_3,
    challenge_dynamic_type_4,
    challenge_dynamic_type_5,
    challenge_dynamic_type_6,
    challenge_dynamic_type_7,
    challenge_dynamic_type_8,
    challenge_function_1,
    challenge_function_2,
}