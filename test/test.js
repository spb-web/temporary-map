const TemporaryMap = require('../TemporaryMap')
const assert = require('assert')

describe('TemporaryMap', function() {
  describe('Create TemporaryMap', function() {
    it('should instanceof TemporaryMap', function() {
      const temporaryMap = new TemporaryMap()
      assert.equal(temporaryMap instanceof TemporaryMap, true)
    })
  })

  const temporaryMap = new TemporaryMap()

  describe('set, get', function() {
    temporaryMap.set(1, '1')
    temporaryMap.set(2, '2')
    temporaryMap.set(3, '3')

    it('check keys-values', function() {
      assert.equal(temporaryMap.get(1), '1')
      assert.equal(temporaryMap.get(2), '2')
      assert.equal(temporaryMap.get(3), '3')
    })
  })

  describe('size', function() {
    it('size is 3', function() {
      assert.equal(temporaryMap.size, 3)
    })
  })

  describe('delete', function() {
    it('size is 2', function() {
      temporaryMap.delete(1)
      assert.equal(temporaryMap.size, 2)
    })
  })

  describe('iterator', function() {
    it('for of', function() {
      let i = 2

      for (value of temporaryMap) {
        assert.deepEqual(value, [i, i.toString()])
        i++
      }
    })


    it('values', function() {
      let i = 2
      const values = temporaryMap.values()

      for (value of values) {
        assert.equal(value, i.toString())
        i++
      }
    })

    it('keys', function() {
      let i = 2

      for (value of temporaryMap.keys()) {
        assert.equal(value, i)
        i++
      }
    })
  })
})
