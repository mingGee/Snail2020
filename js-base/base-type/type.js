
//  * ECMAScript 中有5种简单数据类型（也称基本数据类型）
//  * Undefined, Null, Boolean, Number, String
//  * typeof `操作符` 来检测数据类型
 

// 基本类型
console.log('Undefined 类型: typeof undefined ', typeof undefined)
console.log('Null      类型: typeof null ', typeof null)
console.log('Boolean   类型: typeof true ', typeof true, typeof false)
console.log('String    类型: typeof false ', typeof 'hello')
console.log('Number    类型: typeof typeof 0 | 9 | NaN ', typeof 0, typeof 9, typeof NaN)

// Function
function foo () {}
console.log('Function  类型: typeof foo', typeof foo)

// Array
var array = new Array()
console.log('Array     类型: typeof array', typeof array)

// Object
var obj = new Object()
console.log('Object    类型: typeof obj', typeof obj)


// 输出结果
// Undefined 类型: typeof undefined  undefined
// Null      类型: typeof null  object
// Boolean   类型: typeof true  boolean boolean
// String    类型: typeof false  string
// Number    类型: typeof typeof 0 | 9 | NaN  number number number
// Function  类型: typeof foo function
// Array     类型: typeof array object
// Object    类型: typeof obj object


// Undefined --- （只有一个值的数据类型）
// 定义一个变量，未初始化，这个变量的值就是undefined
var name
console.log('name：', name)


// Null --- （只有一个值的数据类型）
//如果定义变量在将来用于保存对象，那么最好将该变量初始化为 null
var car = null
console.log('null', typeof car) // "object"


// Boolean
// true,false



