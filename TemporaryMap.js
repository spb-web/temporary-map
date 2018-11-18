const timeoutKey = Symbol()
const createTimerKey = Symbol()

/**
 * @extends Map
 * @description
 * Just like the Map, the TemporaryMap object holds key-value pairs and
 * remembers the original insertion order of the keys. Any value (both objects
 * and primitive values) may be used as either a key or a value.
 * TemporaryMap has the same interface as the Map.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map|JavaScript Map}
 */
class TemporaryMap extends Map {
  /**
   * @param {integer} timeout
   */
  constructor(timeout = 1000) {
    super()
    this[timeoutKey] = timeout
  }

  /**
   * @description
   * Removes all key/value pairs and clears timeouts from the TemporaryMap
   * object.
   * @example
   * temporaryMap.clear()
   */
  clear() {
    const itemsIterator = super.values()

    for (item of itemsIterator) {
      clearTimeout(item.timer)
    }

    super.clear()
  }

  /**
   * @description
   * Returns true if an element in the Map object existed and has been removed,
   * or false if the element does not exist. TemporaryMap.prototype.has(key)
   * will return false afterwards.
   * @param {Mixed} key
   * @example
   * temporaryMap.delete('key')
   *
   * @return {Boolean}
   */
  delete(key) {
    const item = super.get(key)

    if (item !== null) {
      clearTimeout(item.timer)
    }

    return super.delete(key)
  }

  /**
   * @description
   * The entries() method returns a new Iterator object that contains the
   * [key, value] pairs for each element in the TemporaryMap object in insertion
   * order.
   * @example
   * const iterator = temporaryMap.entries()
   *
   * for(let [key, value] of iterator) {
   *   console.log(key, value)
   * }
   *
   * @return {Iterator}
   */
  entries(updateTimeout=true) {
    const iterator = super.entries()

    return {
      [Symbol.iterator]() {
        return {
          next: () => {
            const item = iterator.next()

            if (item.done) {
              return item
            }

            if (updateTimeout) {
              clearTimeout(item.value[1].timeout)
              item.value[1].timeout = this[createTimerKey](item.value[0], this)
            }

            return {
              value: [item.value[0], item.value[1].value],
              done: false
            }
          }
        }
      }
    }
  }

  /**
   * @description
   * Calls callbackFn once for each key-value pair present in the TemporaryMap
   * object, in insertion order. If a thisArg parameter is provided to forEach,
   * it will be used as the this value for each callback.
   * @param {Function} callback Function to execute for each element.
   * @param {Mixed=} thisArg Value to use as this when executing callback.
   *
   * @example
   * emporaryMap.forEach(console.log, console)
   */
  forEach(callback, thisArg=this) {
    super.forEach((item, key) => {
      callback.call(thisArg, item.value, key, this)
    }, thisArg)
  }

  /**
   * @description
   * The get() method returns a specified element from a TemporaryMap object.
   * @param {Mixed} key Required. The key of the element to return from the Map
   * object.
   * @param {Boolean=} updateTimeout
   *
   * @return {Mixed}
   */
  get(key, updateTimeout=true) {
    const item = super.get(key)

    if (item === null) {
      return null
    }

    if (updateTimeout) {
      clearTimeout(item.timer)
      item.timer = this[createTimerKey](key, this)
    }

    return item.value
  }

  /**
   * @description
   * Sets the value for the key in the TemporaryMap object. Returns the
   * TemporaryMap object.
   */
  set(key, value) {
    if (super.has(key)) {
      clearTimeout(super.get(key).timeout)
    }

    super.set(key, {
      value,
      timer: this[createTimerKey](key, this)
    })

    return this
  }

  /**
   * @description
   * Returns a new Iterator object that contains the values for each element in
   * the TemporaryMap object in insertion order.
   *
   * @return {Iterator}
   */
  values(updateTimeout) {
    const iterator = super.entries()

    return {
      [Symbol.iterator]() {
        return {
          next: () => {
            const item = iterator.next()

            if (item.done) {
              return item
            }

            if (updateTimeout) {
              clearTimeout(item.value[1].timeout)
              item.value[1].timeout = this[createTimerKey](item.value[0], this)
            }

            return {
              value: item.value[1].value,
              done: false
            }
          }
        }
      }
    }
  }

  /**
   * @description
   * Returns a new Iterator object that contains an array of [key, value] for
   * each element in the TemporaryMap object in insertion order.
   *
   * @return {Iterator}
   */
  [Symbol.iterator]() {
    const iterator = super.entries()

    return {
      next: () => {
        const item = iterator.next()

        if (item.done) {
          return item
        }

        return {
          value: [item.value[0], item.value[1].value],
          done: false
        }
      }
    }
  }

  /**
   * @private
   */
  [createTimerKey](id) {
    return setTimeout(() => { super.delete(id) }, this[timeoutKey])
  }
}

module.exports = TemporaryMap
