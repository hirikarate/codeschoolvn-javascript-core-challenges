const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies)
const { expect } = chai

const quiz = require('./index')


describe('challenge_oop_1', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_1()
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

describe('challenge_oop_8', () => {
    it('should be true', () => {
        const chal = quiz.challenge_oop_8()
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

describe('challenge_oop_15', () => {
    it('should be true', (done) => {
        const arr = []
        const chal = quiz.challenge_oop_15(arr)
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
