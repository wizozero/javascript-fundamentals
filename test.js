const {
	capitalize,
	unique,
	groupBy,
	deepClone,
	pick,
	delay,
	chunk,
	flatten,
} = require('./utils.js')

;(async () => {
	console.log('=== CAPITALIZE ===')
	console.log(capitalize('hello'))
	console.log(capitalize('javascript'))
	console.log(capitalize(''))

	console.log(unique([1, 2, 2, 3]))
	console.log(unique(['a', 'b', 'a', 'c']))
	console.log(unique([1, 1, 1, 1]))
	console.log(unique([]))

	console.log('\n=== GROUPBY ===')
	const people = [
		{ name: 'John', age: 20 },
		{ name: 'Jane', age: 20 },
		{ name: 'Bob', age: 30 },
	]
	console.log(groupBy(people, 'age'))

	console.log('\n=== DEEPCLONE ===')
	const original = { a: 1, b: 2 }
	const cloned = deepClone(original)
	cloned.a = 999
	console.log('Original:', original)
	console.log('Clonado:', cloned)

	console.log('\n=== PICK ===')
	const obj = { a: 1, b: 2, c: 3, d: 4 }
	console.log(pick(obj, ['a', 'c']))
	console.log(pick(obj, ['a', 'z']))
	console.log(pick(obj, []))

	console.log('\n=== DELAY ===')
	console.log('Inicio...')
	await delay(2000)
	console.log('...2 segundos después')

	console.log('\n=== CHUNK ===')
	console.log(chunk([1, 2, 3, 4, 5], 2)) // [[1,2], [3,4], [5]]
	console.log(chunk([1, 2, 3, 4, 5, 6], 3)) // [[1,2,3], [4,5,6]]
	console.log(chunk([1, 2, 3], 5)) // [[1,2,3]]
	console.log(chunk([], 2)) // []

	console.log('\n=== FLATTEN ===')
	console.log(
		flatten([
			[1, 2],
			[3, 4],
		]),
	) // [1,2,3,4]
	console.log(flatten([[1], [2], [3]])) // [1,2,3]
	console.log(
		flatten([
			['a', 'b'],
			['c', 'd'],
		]),
	) // ['a','b','c','d']
	console.log(flatten([])) // []
})()
