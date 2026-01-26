/**
 * 1. Capitaliza la primera letra de un string
 * @example capitalize('hello') // 'Hello'
 */
const capitalize = (str: string): string => {
	if (str.length === 0) return '' // ← Devolver string vacío explícitamente
	return str[0].toUpperCase() + str.slice(1)
}

/**
 * 2. Obtiene valores únicos de un array
 * @example unique([1, 2, 2, 3]) // [1, 2, 3]
 */
const unique = <T>(arr: T[]): T[] => {
	return [...new Set(arr)]
}

/**
 * 3. Agrupa array de objetos por una propiedad
 * @example
 * groupBy([{age: 20}, {age: 20}, {age: 30}], 'age')
 * // { '20': [{age: 20}, {age: 20}], '30': [{age: 30}] }
 */
const groupBy = <T>(arr: T[], key: string): { [key: string]: T[] } => {
	return arr.reduce(
		(group, item) => {
			const value = (item as any)[key]

			if (!group[value]) {
				group[value] = []
			}

			group[value].push(item)

			return group
		},
		{} as { [key: string]: T[] },
	) // ← También tipar el inicial
}

/**
 * 4. Clona un objeto (shallow copy)
 * @example
 * const obj = { a: 1 };
 * const copy = deepClone(obj);
 * copy.a = 2;
 * console.log(obj.a); // 1 (no cambió)
 */
const deepClone = <T>(obj: T): T => {
	return { ...obj }
}

/**
 * 5. Selecciona propiedades específicas de un objeto
 * @example pick({a: 1, b: 2, c: 3}, ['a', 'c']) // {a: 1, c: 3}
 */
const pick = <T extends Record<string, any>>(
	obj: T,
	keys: string[],
): Partial<T> => {
	return keys.reduce((resultado, key) => {
		if (key in obj) {
			;(resultado as any)[key] = obj[key]
		}
		return resultado
	}, {} as Partial<T>)
}

/**
 * 6. Crea un delay con Promise
 * @example
 * await delay(1000);
 * console.log('1 segundo después');
 */
const delay = (ms: number): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

/**
 * 7. Divide array en chunks de tamaño específico
 * @example chunk([1,2,3,4,5], 2) // [[1,2], [3,4], [5]]
 */
const chunk = <T>(arr: T[], size: number): T[][] => {
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
const flatten = <T>(arr: T[][]): T[] => {
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
