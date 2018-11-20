
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
    static get total() {
        return this._total
    }

    constructor() {
        super()
        VinTruck._total++
    }

    horn() {
        return `${this.name} made by VinGroup pim pim`
    }
}

VinTruck._total = 0

class MegaTruck extends VinTruck {
    constructor() {
        super()
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

    return RESULT === isCarEqual
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_1_extra() {
    /********************************************************/
    const RESULT = null
    /********************************************************/
    const carOne = new Car()
    const carTwo = new Car()
    const isRunEqual = (carOne.run === carTwo.run)

    return RESULT === isRunEqual
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_2() {
    /********************************************************/
    const RESULT = null
    /********************************************************/
    const truckOne = new VinaxukiTruck()
    const truckTwo = new VinTruck()
    const isRunEqual = (truckOne.run === truckTwo.run)

    return RESULT === isRunEqual
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_3() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const vinaTruck = new VinTruck()

    return RESULT === vinaTruck.horn()
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_3_extra() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const vinaTruck = new VinTruck()
    const megaTruck = new MegaTruck()

    return RESULT === MegaTruck.total
}


class Earthling {
    get name() {
        return this._name
    }

    set name(val) {
        this._name = val
    }

    constructor() {
        this._name = 'Earthling'
    }
}

class Martian {
    get name() {
        return this._name
    }

    set name(val) {
        this._name = val
    }

    constructor() {
        this._name = 'Martian'
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
    const RESULT = null
    /********************************************************/

    const earthling = new Earthling()
    earthling.greeting = Martian.prototype.greeting
    const message = earthling.greeting('CodeSchool')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_5_extra() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const earthlingOne = new Earthling()
    Earthling.prototype.greeting = Martian.prototype.greeting
    const earthlingTwo = new Earthling()
    const isEqual = (earthlingOne.greeting('CodeSchool') === earthlingTwo.greeting('CodeSchool'))

    return RESULT === isEqual
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_6() {
    /********************************************************/
    const RESULT = null
    // OPTION 1: Using single quote '...'
    // OPTION 2: Using double quote "...'
    // OPTION 3: Using back-tick quote `...`
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

    const name = 'Outer space'
    const obj = {
        name: 'Inner object',
        greeting: function () {
            return `We are ${name}`
        }
    }

    const martian = new Martian()
    const message = martian.greeting.call(obj)

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_7_extra() {
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
    const martianMessage = martian.greeting.call(obj)
    const objMessage = obj.greeting()
    const message = [martianMessage, objMessage].join('.')

    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_8() {
    /********************************************************/
    const RESULT = null
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
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_8_extra() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    function baz() {
        const obj = {
            planet: 'Neptune',
            greeting: function () {
                return `We're from ${planet}`
            }
        }

        return obj.greeting()
    }

    function foo() {
        planet = 'Venus'
    }

    foo()
    return RESULT === baz()
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
function challenge_oop_10_extra(arr) {
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
function challenge_oop_12_extra() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const arr = [0, -1, 2, 3, -4]

    const maxVal = Math.max.apply(null, arr)
    const minVal = Math.min(...arr)

    return RESULT === (maxVal + minVal)
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
            const args = [...arguments]
            arr.push(args.reverse().join(';'))
        }

        const funcAction = function() {
            const args = [...arguments]
            arr.push(args.reverse().join(';'))
        }

        setTimeout(() => {
            arrowAction('three', 'four')
            funcAction('three', 'four')
        }, 500)
    }

    echo('one', 'two')

    return RESULT
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_15() {
    /********************************************************/
    const RESULT = 'I am The second'
    /********************************************************/

    const objOne = {
        name: 'The first',
        tellName: function () {
            return `I am ${this.name}`
        }
    }

    const objTwo = {
        name: 'The second',
        tellName: function () {
            return `I am ${this.name}`
        }
    }

    const tellNameFn = objOne.tellName.bind(objTwo)
    const message = tellNameFn()

    return RESULT === message
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_16() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const objOne = {
        name: 'The first',
        tellName: function (friendA, friendB) {
            return `Hi ${friendA} & ${friendB}, I am ${this.name}`
        }
    }

    const objTwo = {
        name: 'The second',
        tellName: function (friendA, friendB) {
            return `Hi ${friendA} & ${friendB}, I am ${this.name}`
        }
    }

    const tellNameFn = objOne.tellName.bind(objTwo, 'Alice')
    const message = tellNameFn('Bob', 'Charlie')

    return RESULT === message
}

class Friend {

    get name() {
        return this._name
    }

    set name(val) {
        this._name = val
    }

    constructor() {
        this._name = 'Pal'
    }

    introduce() {
        return `Treat your ${this.name} well`
    }

    getName() {
        return this._name
    }
}

const privateMap = new WeakMap()
class Enemy {

    get props() {
        return privateMap.get(this)
    }

    get name() {
        return this.props.name
    }

    set name(val) {
        this.props.name = val
    }

    constructor() {
        privateMap.set(this, {
            name: 'Foe'
        })
    }

    introduce() {
        return `You must love your ${this.name}`
    }
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_16() {
    const backup = Friend.prototype.introduce

    /********************************************************/
    const RESULT = null
    /********************************************************/

    const enemy = new Enemy()
    const friend = new Friend
    Friend.prototype.introduce = Enemy.prototype.introduce.bind(enemy)

    const message = friend.introduce()
    Friend.prototype.introduce = backup

    return RESULT === message
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_17() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const enemy = new Enemy()
    const friend = new Friend
    friend.introduce = Friend.prototype.introduce.bind(friend)

    const message = friend.introduce.apply(enemy)

    return RESULT === message
}


global.target = 'The Creator'
const target = 'Alien'

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_18() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const obj = {
        target: 'Stranger',
        introduce: () => {
            return `${this.target} is always looking at you`
        }
    }

    const friend = new Friend
    const introFn = obj.introduce.bind(friend)

    const message = introFn.apply(obj)

    // NOTE: Look at the unit test `describe('challenge_oop_18')`
    return RESULT === message
}

/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_19() {
    /********************************************************/
    const RESULT = null
    /********************************************************/

    const obj = {
        target: 'Stranger',
        introduce: () => {
            return `Treat ${this.target} like your relatives`
        }
    }

    const enemy = new Enemy
    const message = obj.introduce.bind(enemy).apply(obj)

    // NOTE: Look at the unit test `describe('challenge_oop_19')`
    return RESULT === message
}


/**
 * Hãy đặt giá trị cho RESULT sao cho kết quả return là true
 */
function challenge_oop_20() {
    /********************************************************/
    const RESULT = false
    /********************************************************/

    const friend = new Friend
    const isEqual = ((typeof friend.name) === (typeof friend.getName))

    return RESULT === isEqual
}


module.exports = {
    challenge_oop_1,
    challenge_oop_1_extra,
    challenge_oop_2,
    challenge_oop_3,
    challenge_oop_3_extra,
    challenge_oop_4,
    challenge_oop_5,
    challenge_oop_5_extra,
    challenge_oop_6,
    challenge_oop_7,
    challenge_oop_7_extra,
    challenge_oop_8,
    challenge_oop_8_extra,
    challenge_oop_9,
    challenge_oop_10,
    challenge_oop_10_extra,
    challenge_oop_11,
    challenge_oop_12,
    challenge_oop_12_extra,
    challenge_oop_13,
    challenge_oop_14,
    challenge_oop_15,
    challenge_oop_16,
    challenge_oop_17,
    challenge_oop_18,
    target: 'Neighbor',
    challenge_oop_19,
    challenge_oop_20,
}
