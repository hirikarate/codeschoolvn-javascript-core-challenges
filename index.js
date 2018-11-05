/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`
 */
function challenge_hoist_1() {
    /********************************************************/
    const RESULT = 0
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
    const RESULT = 0
    /********************************************************/

    return RESULT === foo()

    // Function declaration
    var foo = function() {
        return 88
    }

    // Function expression
    function foo() {
        return 99
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
 * Hãy điền vào chỗ trống
 */
function challenge_array_5() {
    /********************************************************/
    const isEqual = function(arr1, arr2) {
        // ĐIỀN VÀO CHỖ TRỐNG
    }
    /********************************************************/

    const arrOne = [2, 4, 6]
    const arrTwo = [2, 4, 6]

    return isEqual(arrOne, arrTwo)
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
    console.log({
        reducedValue})

    return RESULT === reducedValue
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
 * Hãy đặt giá trị cho A và B sao cho giá trị return là `true`.
 */
function challenge_equal_2() {
    /********************************************************/
    const A = 0
    const B = 0
    /********************************************************/

    const arr = [2, 4, 6]
    return (A == arr[3] && B == arr[3])
}

/**
 * Hãy đặt giá trị cho A sao cho giá trị return là `true`.
 */
function challenge_equal_3() {
    /********************************************************/
    const A = null
    /********************************************************/
    const B = 3

    const C = A + B
    return (C == '123' && C !== '123')
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_4() {
    /********************************************************/
    const RESULT = '33'
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

    const A = !'false'
    const B = Boolean(0)
    const isEqual = !!(A === B)
    return (isEqual === RESULT)
}


/**
 * Hãy đặt giá trị cho RESULT sao cho giá trị return là `true`.
 */
function challenge_equal_6() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const A = new Boolean(false)
    const B = Boolean(0)
    const isEqual = (A === B)
    return (isEqual === RESULT)
}


/**
 * Hãy đặt giá trị cho A và B sao cho giá trị return là `true`.
 */
function challenge_object_1() {
    /********************************************************/
    const A = null
    const B = null
    /********************************************************/

    let obj = {
        name: 100
    }
    obj.age = 'CodeSchool'
    return (obj.name === A && obj[B] === 'CodeSchool')
}

/**
 * Hãy đặt giá trị cho A và B sao cho giá trị return là `true`.
 */
function challenge_object_2() {
    /********************************************************/
    const A = null
    const B = null
    /********************************************************/

    let prop = ['a', 'd', 'd', 'r']
    let obj = {
        [prop.join('')]: 'Planet Earth',
        bar(msg) {
            console.log(msg)
        }

    }
    obj.age = 'CodeSchool'
    return (obj[A] === 'Planet Earth' && typeof obj.bar === B)
}


function doSomeThing() {
    val = 543
}

/**
 * Hãy đặt giá trị cho A sao cho giá trị return là `true`.
 */
function challenge_scope_1() {
    /********************************************************/
    const A = null
    /********************************************************/

    const foo = function() {
        return val
    }

    doSomeThing()
    return (A === foo() && A == global['val'])
}

/**
 * Hãy điền vào chỗ trống để không cho phép tự động khai báo biến toàn cục.
 */
function challenge_scope_2() {
    /********************************************************/
    // ĐIỀN VÀO CHỖ TRỐNG

    /********************************************************/

    const A = 987

    const foo = function() {
        return val
    }
    const assignGlobal = function() {
        val = 987
    }

    assignGlobal()
    return (A === foo() && A == global['val'])
}

/**
 * Hãy điền vào chỗ trống
 * 
 */
function challenge_dynamic_type_1() {
    const A = 123

    const toBool = function(source) {
        let result
        /********************************************************/
        // ĐIỀN VÀO CHỖ TRỐNG
        // result = ???(source)
        /********************************************************/
        return result
    }


    return (typeof toBool(A) === 'boolean')
}

/**
 * Hãy đặt giá trị cho A sao cho giá trị return là `true`.
 */
function challenge_dynamic_type_2() {
    const A = null
    return (1 + 2 + '3' === A)
}


/**
 * Hãy đặt giá trị cho A sao cho giá trị return là `true`.
 */
function challenge_function_1() {
    /********************************************************/
    const A = null
    /********************************************************/

    const delegate = function (f, g) {
        return f
    }

    const sayHi = (name) => ('Hello ' + name)
    const sayBye = (name) => ('See ya ' + name)

    return (delegate(sayHi, sayBye)('CodeSchool') === A)
}

/**
 * Hãy đặt giá trị cho A sao cho giá trị return là `true`.
 */
function challenge_function_2() {
    /********************************************************/
    const A = null
    /********************************************************/

    const fn = function () {
        return arguments.length
    }

    return (fn(1, 2, 3, 4, 5) === A)
}


module.exports = {
    challenge_hoist_1,
    challenge_hoist_2,
    challenge_hoist_3,
    challenge_hoist_4,
    challenge_hoist_5,
    challenge_array_1,
    challenge_array_2,
    challenge_array_3,
    challenge_array_4,
    challenge_array_5,
    challenge_array_6,
    challenge_array_7,
    challenge_array_8,
    challenge_equal_1,
    challenge_equal_2,
    challenge_equal_3,
    challenge_equal_4,
    challenge_equal_5,
    challenge_equal_6,
    challenge_object_1,
    challenge_object_2,
    challenge_scope_1,
    challenge_scope_2,
    challenge_dynamic_type_1,
    challenge_dynamic_type_2,
    challenge_function_1,
    challenge_function_2,
}