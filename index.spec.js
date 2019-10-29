const { expect } = require('chai')

const quiz = require('./index')


describe('challenge_hoist_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_hoist_1()
        expect(chal).to.be.true
    })
})

describe('challenge_hoist_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_hoist_2()
        expect(chal).to.be.true
    })
})

describe('challenge_hoist_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_hoist_3()
        expect(chal).to.be.true
    })
})

describe('challenge_hoist_4', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_hoist_4()
        expect(chal).to.be.true
    })
})

describe('challenge_hoist_5', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_hoist_5()
        expect(chal).to.be.true
    })
})

describe('challenge_scope_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_scope_1()
        expect(chal).to.be.true
    })
})

describe('challenge_scope_2', () => {
    it('Should equal true', () => {
        let chal, exception
        try {
            chal = quiz.challenge_scope_2()
        }
        catch (err) {
            exception = err
        }
        expect(chal).not.to.exist
        expect(exception).to.exist
        expect(exception.message).to.contain('is not defined')
    })
})

describe('challenge_scope_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_scope_3()
        expect(chal).to.be.true
    })
})

describe('challenge_scope_4', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_scope_4()
        expect(chal).to.be.true
    })
})

describe('challenge_array_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_1()
        expect(chal).to.be.true
    })
})

describe('challenge_array_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_2()
        expect(chal).to.be.true
    })
})

describe('challenge_array_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_3()
        expect(chal).to.be.true
    })
})

describe('challenge_array_4', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_4()
        expect(chal).to.be.true
    })
})

describe('challenge_array_5', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_5()
        expect(chal).to.be.true
    })
})

describe('challenge_array_6', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_6()
        expect(chal).to.be.true
    })
})

describe('challenge_array_7', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_7()
        expect(chal).to.be.true
    })
})

describe('challenge_array_8', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_8()
        expect(chal).to.be.true
    })
})

describe('challenge_array_9', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_9()
        expect(chal).to.be.true
    })
})

describe('challenge_array_10', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_array_10()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_1()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_2()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_3()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_4', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_4()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_5', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_5()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_6', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_6()
        expect(chal).to.be.true
    })
})

describe('challenge_equal_7', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_equal_7()
        expect(chal).to.be.true
    })
})

describe('challenge_object_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_1()
        expect(chal).to.be.true
    })
})

describe('challenge_object_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_2()
        expect(chal).to.be.true
    })
})

describe('challenge_object_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_3()
        expect(chal).to.be.true
    })
})

describe('challenge_object_4', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_4()
        expect(chal).to.be.true
    })
})

describe('challenge_object_5', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_5()
        expect(chal).to.be.true
    })
})

describe('challenge_object_6', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_6()
        expect(chal).to.be.true
    })
})

describe('challenge_object_7', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_7()
        expect(chal).to.be.true
    })
})

describe('challenge_object_8', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_8()
        expect(chal).to.be.true
    })
})

describe('challenge_object_9', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_9()
        expect(chal).to.be.true
    })
})

describe('challenge_object_10', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_10()
        expect(chal).to.be.true
    })
})

describe('challenge_object_11', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_11()
        expect(chal).to.be.true
    })
})

describe('challenge_object_12', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_12()
        expect(chal).to.be.true
    })
})

describe('challenge_object_13', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_13()
        expect(chal).to.be.true
    })
})

describe('challenge_object_14', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_object_14()
        expect(chal).to.be.true
    })
})

describe('challenge_dynamic_type_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_dynamic_type_1()
        expect(chal).to.be.true
    })
})

describe('challenge_dynamic_type_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_dynamic_type_2()
        expect(chal).to.be.true
    })
})

describe('challenge_dynamic_type_3', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_dynamic_type_3()
        expect(chal).to.be.true
    })
})

describe('challenge_function_1', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_function_1()
        expect(chal).to.be.true
    })
})

describe('challenge_function_2', () => {
    it('Should equal true', () => {
        const chal = quiz.challenge_function_2()
        expect(chal).to.be.true
    })
})
