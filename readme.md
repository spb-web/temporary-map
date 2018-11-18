<a name="TemporaryMap"></a>

## TemporaryMap ⇐ <code>Map</code>
**Kind**: global class  
**Extends**: <code>Map</code>  
**See**: [JavaScript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  

* [TemporaryMap](#TemporaryMap) ⇐ <code>Map</code>
    * [new TemporaryMap(timeout)](#new_TemporaryMap_new)
    * [.clear()](#TemporaryMap+clear)
    * [.delete(key)](#TemporaryMap+delete) ⇒ <code>Boolean</code>
    * [.entries()](#TemporaryMap+entries) ⇒ <code>Iterator</code>
    * [.forEach(callback, [thisArg])](#TemporaryMap+forEach)
    * [.get(key, [updateTimeout])](#TemporaryMap+get) ⇒ <code>Mixed</code>
    * [.set()](#TemporaryMap+set)
    * [.values()](#TemporaryMap+values) ⇒ <code>Iterator</code>

<a name="new_TemporaryMap_new"></a>

### new TemporaryMap(timeout)
Just like the Map, the TemporaryMap object holds key-value pairs and
remembers the original insertion order of the keys. Any value (both objects
and primitive values) may be used as either a key or a value.
TemporaryMap has the same interface as the Map.


| Param | Type | Default |
| --- | --- | --- |
| timeout | <code>integer</code> | <code>1000</code> | 

<a name="TemporaryMap+clear"></a>

### temporaryMap.clear()
Removes all key/value pairs and clears timeouts from the TemporaryMap
object.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  
**Example**  
```js
temporaryMap.clear()
```
<a name="TemporaryMap+delete"></a>

### temporaryMap.delete(key) ⇒ <code>Boolean</code>
Returns true if an element in the Map object existed and has been removed,
or false if the element does not exist. TemporaryMap.prototype.has(key)
will return false afterwards.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  

| Param | Type |
| --- | --- |
| key | <code>Mixed</code> | 

**Example**  
```js
temporaryMap.delete('key')
```
<a name="TemporaryMap+entries"></a>

### temporaryMap.entries() ⇒ <code>Iterator</code>
The entries() method returns a new Iterator object that contains the
[key, value] pairs for each element in the TemporaryMap object in insertion
order.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  
**Example**  
```js
const iterator = temporaryMap.entries()

for(let [key, value] of iterator) {
  console.log(key, value)
}
```
<a name="TemporaryMap+forEach"></a>

### temporaryMap.forEach(callback, [thisArg])
Calls callbackFn once for each key-value pair present in the TemporaryMap
object, in insertion order. If a thisArg parameter is provided to forEach,
it will be used as the this value for each callback.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Function to execute for each element. |
| [thisArg] | <code>Mixed</code> | Value to use as this when executing callback. |

**Example**  
```js
emporaryMap.forEach(console.log, console)
```
<a name="TemporaryMap+get"></a>

### temporaryMap.get(key, [updateTimeout]) ⇒ <code>Mixed</code>
The get() method returns a specified element from a TemporaryMap object.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>Mixed</code> |  | Required. The key of the element to return from the Map object. |
| [updateTimeout] | <code>Boolean</code> | <code>true</code> |  |

<a name="TemporaryMap+set"></a>

### temporaryMap.set()
Sets the value for the key in the TemporaryMap object. Returns the
TemporaryMap object.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  
<a name="TemporaryMap+values"></a>

### temporaryMap.values() ⇒ <code>Iterator</code>
Returns a new Iterator object that contains the values for each element in
the TemporaryMap object in insertion order.

**Kind**: instance method of [<code>TemporaryMap</code>](#TemporaryMap)  
