
function Car() {
    this.name = 'Car'
    this.run = function () {
        return this.name + ' running'
    }
}

function Truck() {
    this.name = 'Truck'
}

Truck.prototype.run = function () {
    return `${this.name} running`
}


function VinaxukiTruck() {
    Truck.call(this)
    this.madeIn = 'Vietnam'
}

VinaxukiTruck.prototype = Object.create(Truck.prototype)
VinaxukiTruck.prototype.constructor = VinaxukiTruck

VinaxukiTruck.prototype.horn = function () {
    return `${this.name} made in ${this.madeIn} pim pim`
}

class VinTruck extends Truck {
    constructor() {
        super()
    }

    horn() {
        return `${this.name} made by VinGroup pim pim`
    }
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_1() {
    /********************************************************/
    const RESULT = null
    /********************************************************/
    const carOne = new Car()
    const carTwo = new Car()
    const isCarEqual = (carOne === carTwo)
    const isRunEqual = (carOne.run === carTwo.run)

    return RESULT === (isCarEqual && isRunEqual)
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/
    const truckOne = new Truck()
    const truckTwo = new Truck()
    // const isTruckEqual = (carOne === carTwo)
    const isRunEqual = (truckOne.run === truckTwo.run)

    return RESULT === isRunEqual
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_3() {
    /********************************************************/
    const RESULT = 'Truck made in Vietnam pim pim'
    /********************************************************/

    const vinaTruck = new VinTruck()

    return RESULT === vinaTruck.horn()
}


class Earthling {
    get name() {
        return 'Earthling'
    }
}

class Martian {
    get name() {
        return 'Martian'
    }

    greeting(friend) {
        return `Hello ${friend}, my name is ${this.name}`
    }
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_4() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const earthling = new Earthling()
    const message = Martian.prototype.greeting.call(earthling, 'CodeSchool')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_5() {
    /********************************************************/
    const RESULT = 'Hello CodeSchool, my name is Earthling'
    /********************************************************/

    const earthling = new Earthling()
    earthling.greeting = Martian.prototype.greeting
    const message = earthling.greeting('CodeSchool')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_6() {
    /********************************************************/
    const RESULT = null
    // Single quote or double quote?
    /********************************************************/

    const fn = function (friend) {
        return `Bye ${friend}. I don't know you!`
    }
    const earthling = new Earthling()
    const message = fn.call(earthling, 'CodeSchool')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_7() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const obj = {
        name: 'Anonymous',
        greeting: function () {
            return `We are ${this.name}`
        }
    }

    const martian = new Martian()
    const message = martian.greeting.call(obj)

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_8() {
    /********************************************************/
    const RESULT = 'We are undefined'
    /********************************************************/

    const obj = {
        name: 'Anonymous',
        greeting: function () {
            return `We are ${this.name}`
        }
    }

    const fn = obj.greeting
    const message = fn()

    return RESULT === message
}

/**
 * 
 */
function challenge_oop_9(arr) {
    // Biết arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    const obj = {
        name: 'Anonymous',
        addName: function () {
            arr.push(this.name)
        }
    }

    setTimeout(obj.addName, 500)

    return RESULT
}

/**
 * 
 */
function challenge_oop_10(arr) {
    // Biết arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    const obj = {
        name: 'Anonymous',
        addName: function () {
            arr.push(this.name)
        }
    }

    setTimeout(() => obj.addName(), 500)

    return RESULT
}


/**
 * 
 */
function challenge_oop_15(arr) {
    // Biết arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    const obj = {
        name: 'Anonymous',
        addName: () => {
            arr.push(this.name)
        }
    }

    setTimeout(() => obj.addName(), 500)

    return RESULT
}


/**
 * 
 */
function challenge_oop_11(arr) {
    // Biết arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    function delay(callback, timeout) {
        setTimeout(callback, timeout)
    }

    const obj = {
        name: 'Anonymous',
        addName: function () {
            delay(function () {
                arr.push(this.name)
            }, 500)
        }
    }

    obj.addName()

    return RESULT
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_12() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [0, 1, 2, 3]

    const value = Math.max.apply(null, arr)

    return RESULT === value
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_13() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const echo = function () {
        const messages = [...arguments]
        return messages.reverse().join(';')
    }
    const value = echo('one', 'two')

    return RESULT === value
}


/**
 * 
 */
function challenge_oop_14(arr) {
    // Biết arr = []

    // Hãy đặt giá trị cho RESULT sao cho RESULT giống với giá trị cuối cùng của `arr`
    /********************************************************/
    const RESULT = []
    /********************************************************/

    const echo = function () {
        const arrowAction = () => {
            const messages = [...arguments]
            arr.push(messages.reverse().join(';'))
        }

        const funcAction = function() {
            const messages = [...arguments]
            arr.push(messages.reverse().join(';'))
        }

        setTimeout(() => {
            arrowAction('three', 'four')
            funcAction('three', 'four')
        }, 500)
    }

    echo('one', 'two')

    return RESULT
}


module.exports = {
    challenge_oop_1,
    challenge_oop_2,
    challenge_oop_3,
    challenge_oop_4,
    challenge_oop_5,
    challenge_oop_6,
    challenge_oop_7,
    challenge_oop_8,
    challenge_oop_9,
    challenge_oop_10,
    challenge_oop_11,
    challenge_oop_12,
    challenge_oop_13,
    challenge_oop_14,
    challenge_oop_15,
}
