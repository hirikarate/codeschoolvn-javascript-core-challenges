const chai = require('chai')
const spies = require('chai-spies');
chai.use(spies)
const { expect } = chai

const quiz = require('./index')


describe('challenge_async_1', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_1(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_async_2', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_2(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_async_3', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_3(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_async_4', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_4(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 800)
    })
})

describe('challenge_async_5', () => {
    it('Should equal true', (done) => {
        setTimeout(() => {
            const chal = quiz.challenge_async_5()
            expect(chal).to.be.true
            done()
        }, 1000)
    })
})

describe('challenge_async_6', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_6(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})

describe('challenge_async_7', () => {
    it('Should equal true', (done) => {
        setTimeout(() => {
            const chal = quiz.challenge_async_7()
            expect(chal).to.be.true
            done()
        }, 1000)
    })
})

describe('challenge_async_8', () => {
    it('Should equal true', (done) => {
        setTimeout(() => {
            const chal = quiz.challenge_async_8()
            expect(chal).to.be.true
            done()
        }, 1000)
    })
})

describe('challenge_async_9', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_9(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})

describe('challenge_async_10', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_10(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})

describe('challenge_async_11', () => {
    it('Should deep equal', (done) => {
        const arr = []
        quiz.challenge_async_11(arr)
        setTimeout(() => {
            expect(arr).to.deep.equal(['CodeSchool async dummy', 'CodeSchool async sample'])
            done()
        }, 1000)
    })
})

describe('challenge_async_12', () => {
    it('Should deep equal', (done) => {
        chai.spy.on(Promise, 'all')

        const arr = []
        quiz.challenge_async_12(arr)
        setTimeout(() => {
            expect(arr).to.deep.equal(['CodeSchool async dummy', 'CodeSchool async sample'])
            expect(Promise.all).to.be.called.once
            chai.spy.restore(Promise, 'all')
            done()
        }, 1000)
    })
})

describe('challenge_async_13', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_13(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})

describe('challenge_async_14', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_14(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})

describe('challenge_async_15', () => {
    it('Should deep equal', (done) => {
        const arr = []
        const chal = quiz.challenge_async_15(arr)
        setTimeout(() => {
            expect(chal).to.deep.equal(arr)
            done()
        }, 1000)
    })
})
