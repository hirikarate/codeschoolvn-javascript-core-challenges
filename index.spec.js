const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies)
const { expect } = chai

const quiz = require('./index')


describe.only('challenge_oop_1', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_1()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_1_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_1_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_2', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_2()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_3', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_3()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_3_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_3_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_4', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_4()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_5', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_5()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_5_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_5_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_6', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_6()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_7', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_7()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_7_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_7_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_8', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_8()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_8_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_8_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_9', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_9(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_oop_10', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_10(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_oop_10_extra', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_10_extra(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_oop_11', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_11(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_oop_12', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_12()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_12_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_12_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_13', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_13()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_14', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_14(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_oop_15', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_15()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_16', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_16()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_16_extra', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_16_extra()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_17', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_17()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_18', () => {
    it('should be true', () => {
        const fn = quiz.challenge_oop_18
        const chal = fn()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_19', () => {
    it('should be true', () => {
        quiz.label += 's'
        const chal = quiz.challenge_oop_19()
        expect(chal).to.be.true
    })
})

describe('challenge_oop_20', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_20()
        expect(chal).to.be.true
    })
})
