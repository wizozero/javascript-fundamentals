/**
 * 1. Capitaliza la primera letra de un string
 * @example capitalize('hello') // 'Hello'
 */
const capitalize = (str) => {
	if (str.length === 0) return '' // ← Devolver string vacío explícitamente
	return str[0].toUpperCase() + str.slice(1)
}

/**
 * 2. Obtiene valores únicos de un array
 * @example unique([1, 2, 2, 3]) // [1, 2, 3]
 */
const unique = (arr) => {
	// Pista: Piensa en estructuras de datos que no permiten duplicados
	return [...new Set(arr)]
}

/**
 * 3. Agrupa array de objetos por una propiedad
 * @example
 * groupBy([{age: 20}, {age: 20}, {age: 30}], 'age')
 * // { '20': [{age: 20}, {age: 20}], '30': [{age: 30}] }
 */
const groupBy = (arr, key) => {
	// Pista: Necesitas recorrer el array y construir un objeto
	// ¿Qué método de arrays es ideal para construir algo nuevo?

	return arr.reduce((group, item) => {
		const value = item[key]

		if (!group[value]) {
			group[value] = []
		}

		group[value].push(item)

		return group
	}, {})
}

/**
 * 4. Clona un objeto (shallow copy)
 * @example
 * const obj = { a: 1 };
 * const copy = deepClone(obj);
 * copy.a = 2;
 * console.log(obj.a); // 1 (no cambió)
 */
const deepClone = (obj) => {
	// Pista: Hay múltiples formas, piensa en operadores ES6

	return { ...obj }
}

/**
 * 5. Selecciona propiedades específicas de un objeto
 * @example pick({a: 1, b: 2, c: 3}, ['a', 'c']) // {a: 1, c: 3}
 */
const pick = (obj, keys) => {
	// Pista: Itera sobre las keys que te dan, construye nuevo objeto

	return keys.reduce((resultado, key) => {
		if (key in obj) {
			resultado[key] = obj[key]
		}

		return resultado
	}, {})
}

/**
 * 6. Crea un delay con Promise
 * @example
 * await delay(1000);
 * console.log('1 segundo después');
 */
const delay = (ms) => {
	// Pista: Promesas y temporizadores

	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

/**
 * 7. Divide array en chunks de tamaño específico
 * @example chunk([1,2,3,4,5], 2) // [[1,2], [3,4], [5]]
 */
const chunk = (arr, size) => {
	const result = []

	for (let i = 0; i < arr.length; i += size) {
		const piece = arr.slice(i, i + size)
		result.push(piece)
	}
	return result
}

/**
 * 8. Aplana array un nivel
 * @example flatten([[1,2], [3,4]]) // [1,2,3,4]
 */
const flatten = (arr) => {
	return arr.flat()
}

module.exports = {
	capitalize,
	unique,
	groupBy,
	deepClone,
	pick,
	delay,
	chunk,
	flatten,
}
