/**
 * 
 */
function challenge_async_1(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    arr.push(1)

    setTimeout(() => {
        arr.push(2)
    }, 500)

    arr.push(3)

    return RESULT
}

/**
 * 
 */
function challenge_async_2(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    arr.push(1)

    setTimeout(() => {
        arr.push(2)
    }, 500)

    setTimeout(() => {
        arr.push(3)
    }, 500)

    arr.push(4)

    return RESULT
}

/**
 * 
 */
function challenge_async_3(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    arr.push(1)

    const timer = setTimeout(() => {
        arr.push(2)
    }, 500)

    setTimeout(() => {
        arr.push(3)
    }, 500)

    clearTimeout(timer)

    arr.push(4)

    return RESULT
}

/**
 * 
 */
function challenge_async_4(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    arr.push(1)

    const timerOne = setTimeout(() => {
        arr.push(2)
        clearTimeout(timerTwo)
    }, 500)

    const timerTwo = setTimeout(() => {
        arr.push(3)
        clearTimeout(timerOne)
    }, 500)

    arr.push(4)

    return RESULT
}


const fs = require('fs')

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_5() {
    /********************************************************/
    const RESULT = []
    /********************************************************/

    let fileContent
    fs.readFile('dummy.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        fileContent = data
    })

    const message = fileContent + ''

    return RESULT === message
}

/**
 *
 */
function challenge_async_6(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    fs.readFile('dummy.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        arr.push(data)
    })

    return RESULT
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_7() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    let fileContent
    try {
        fileContent = fs.readFileSync('dummy.txt', 'utf8')
    } catch (err) {
        return console.error(err)
    }

    const message = fileContent + ''

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_8() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    let fileContents = []
    fs.readFile('dummy.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        fileContents.push(data)
    })

    fs.readFile('sample.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        fileContents.push(data)
    })

    const message = fileContents.join(',')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_9(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    fs.readFile('dummy.txt', 'utf8', (err, data) => {
        if (err) {
            return console.error(err)
        }
        arr.push(data)

        fs.readFile('sample.txt', 'utf8', (err, data2) => {
            if (err) {
                return console.error(err)
            }
            arr.push(data)
        })
    })

    return RESULT
}

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_10(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    readFile('dummy.txt')
        .then((data) => {
            arr.push(data)
        })
        .then(() => {
            return readFile('sample.txt')
        })
        .then((data) => {
            arr.push(data)
        })
        .catch((err) => console.error(err))

    return RESULT
}

/**
 *
 */
function challenge_async_11(arr) {
    // Biết: arr = []

    // Hãy chỉnh sửa để code chạy đúng
    /********************************************************/
    try {
        const data = readFile('dummy.txt')
        arr.push(data)

        data = readFile('sample.txt')
        arr.push(data)
    } catch (err) {
        console.error(err)
    }
    /********************************************************/
}

/**
 *
 */
function challenge_async_12(arr) {
    // Biết: arr = []

    // Hãy chỉnh sửa để đọc 2 file song song
    /********************************************************/
    try {
        readFile('dummy.txt')
            .then((data) => {
                arr.push(data)
            })
            .then(() => {
                return readFile('sample.txt')
            })
            .then((data) => {
                arr.push(data)
            })
            .catch((err) => console.error(err))

        // Destructuring?
    } catch (err) {
        console.error(err)
    }
    /********************************************************/
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_13(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    for (var i = 1; i <= 5; ++i) {
        setTimeout(() => arr.push(i), 0)
    }

    return RESULT
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_async_14(arr) {
    // Biết: arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    for (let i = 1; i <= 5; ++i) {
        setTimeout(() => arr.push(i), 0)
    }

    return RESULT
}


module.exports = {
    challenge_async_1,
    challenge_async_2,
    challenge_async_3,
    challenge_async_4,
    challenge_async_5,
    challenge_async_6,
    challenge_async_7,
    challenge_async_8,
    challenge_async_9,
    challenge_async_10,
    challenge_async_11,
    challenge_async_12,
    challenge_async_13,
    challenge_async_14,
}