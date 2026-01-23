// Dataset: Productos de una tienda online
const products = [
	{
		id: 1,
		name: 'Laptop',
		category: 'Electronics',
		price: 999,
		stock: 5,
		rating: 4.5,
	},
	{
		id: 2,
		name: 'Mouse',
		category: 'Electronics',
		price: 25,
		stock: 50,
		rating: 4.2,
	},
	{
		id: 3,
		name: 'Keyboard',
		category: 'Electronics',
		price: 75,
		stock: 30,
		rating: 4.7,
	},
	{
		id: 4,
		name: 'Monitor',
		category: 'Electronics',
		price: 299,
		stock: 15,
		rating: 4.4,
	},
	{
		id: 5,
		name: 'Desk',
		category: 'Furniture',
		price: 399,
		stock: 8,
		rating: 4.3,
	},
	{
		id: 6,
		name: 'Chair',
		category: 'Furniture',
		price: 199,
		stock: 20,
		rating: 4.6,
	},
	{
		id: 7,
		name: 'Lamp',
		category: 'Furniture',
		price: 49,
		stock: 35,
		rating: 4.1,
	},
	{
		id: 8,
		name: 'Notebook',
		category: 'Stationery',
		price: 5,
		stock: 100,
		rating: 4.0,
	},
	{
		id: 9,
		name: 'Pen',
		category: 'Stationery',
		price: 2,
		stock: 200,
		rating: 3.9,
	},
	{
		id: 10,
		name: 'Backpack',
		category: 'Accessories',
		price: 59,
		stock: 25,
		rating: 4.5,
	},
]

// Dataset: Pedidos de clientes
const orders = [
	{
		orderId: 101,
		customerId: 1,
		products: [1, 2],
		total: 1024,
		status: 'delivered',
	},
	{
		orderId: 102,
		customerId: 2,
		products: [5, 6],
		total: 598,
		status: 'pending',
	},
	{
		orderId: 103,
		customerId: 1,
		products: [8, 9],
		total: 7,
		status: 'delivered',
	},
	{
		orderId: 104,
		customerId: 3,
		products: [3, 4],
		total: 374,
		status: 'shipped',
	},
	{
		orderId: 105,
		customerId: 2,
		products: [7],
		total: 49,
		status: 'delivered',
	},
]

// ============================================
// EJERCICIOS
// ============================================

console.log('=== EJERCICIOS ARRAY METHODS ===\n')

// ----- NIVEL 1: MAP (Transformar arrays) -----

// 1. Obtener solo los nombres de todos los productos
const productNames = products.map((product) => product.name)
console.log('1. Nombres:', productNames)

// 2. Obtener array de precios con 21% IVA añadido
const pricesWithTax = products.map((product) => product.price * 1.21)
console.log('2. Precios con IVA:', pricesWithTax)

// 3. Crear array de objetos simplificados: { name, price }
const simplifiedProducts = products.map(({ name, price }) => ({ name, price }))

console.log('3. Productos simplificados:', simplifiedProducts)

// ----- NIVEL 2: FILTER (Filtrar arrays) -----

// 4. Productos de categoría 'Electronics'
const electronics = products.filter(
	(product) => product.category === 'Electronics',
)
console.log('\n4. Electronics:', electronics.length, 'productos')

// 5. Productos con precio menor a 100
const cheapProducts = products.filter((product) => product.price < 100)
console.log('5. Productos baratos:', cheapProducts.length)

// 6. Productos con stock bajo (menos de 20 unidades)
const lowStock = products.filter((product) => product.stock < 20)
console.log(
	'6. Stock bajo:',
	lowStock.map((p) => p.name),
)

// 7. Productos con rating superior a 4.5
const topRated = products.filter((product) => product.rating > 4.5)
console.log(
	'7. Mejor valorados:',
	topRated.map((p) => p.name),
)

// ----- NIVEL 3: REDUCE (Agregar/acumular) -----

// 8. Precio total de todos los productos
const totalPrice = products.reduce((total, current) => {
	return total + current.price
}, 0)
console.log('\n8. Precio total:', totalPrice)

// 9. Número total de unidades en stock
const totalStock = products.reduce((total, current) => {
	return total + current.stock
}, 0)
console.log('9. Stock total:', totalStock)

// 10. Precio promedio de productos
const averagePrice =
	products.reduce((sum, p) => sum + p.price, 0) / products.length
console.log('10. Precio promedio:', averagePrice)

// ----- NIVEL 4: COMBINACIONES -----

// 11. Productos Electronics con precio > 50
const expensiveElectronics = products.filter(
	(product) => product.category === 'Electronics' && product.price > 50,
)
console.log(
	'\n11. Electronics caros:',
	expensiveElectronics.map((p) => p.name),
)

// 12. Nombres de productos con rating > 4.5, ordenados alfabéticamente
// TU CÓDIGO (filter + map + sort)
const topRatedNames = products
	.filter((product) => product.rating > 4.5)
	.map((productRated) => productRated.name)
	.sort()
console.log('12. Top rated ordenados:', topRatedNames)

// 13. Total de ingresos de pedidos 'delivered'
// TU CÓDIGO (filter + reduce)
const deliveredRevenue = orders
	.filter((order) => order.status === 'delivered')
	.reduce((total, actOrder) => {
		return total + actOrder.total
	}, 0)
console.log('13. Ingresos delivered:', deliveredRevenue)

// ----- NIVEL 5: REDUCE AVANZADO -----

// 14. Agrupar productos por categoría
// Resultado esperado: { Electronics: [...], Furniture: [...], ... }
const byCategory = products.reduce((grupos, producto) => {
	const categoria = producto.category

	// Si no existe ese grupo, créalo como array vacío
	if (!grupos[categoria]) {
		grupos[categoria] = []
	}

	// Añade el producto a su grupo
	grupos[categoria].push(producto)

	return grupos
}, {}) // ← Empezar con objeto vacío
console.log('\n14. Por categoría:', Object.keys(byCategory))

// 15. Contar productos por categoría
// Resultado esperado: { Electronics: 4, Furniture: 3, ... }
const countByCategory = products.reduce((conteo, producto) => {
	const categoria = producto.category

	// Si no existe, inicializa en 0
	if (!conteo[categoria]) {
		conteo[categoria] = 0
	}

	// Incrementa contador
	conteo[categoria]++

	return conteo
}, {})
console.log('15. Conteo por categoría:', countByCategory)

// 16. Producto más caro
const mostExpensive = products.reduce((max, producto) => {
	// Si el producto actual es más caro que max, devuélvelo
	// Sino, devuelve max
	return producto.price > max.price ? producto : max
})
console.log('16. Más caro:', mostExpensive.name, '-', mostExpensive.price)

// ----- NIVEL 6: DESAFÍOS -----

// 17. Stock total por categoría
// Resultado: { Electronics: X, Furniture: Y, ... }
const stockByCategory = products.reduce((stocks, producto) => {
	const categoria = producto.category

	if (!stocks[categoria]) {
		stocks[categoria] = 0
	}

	stocks[categoria] += producto.stock // Sumar stock

	return stocks
}, {})
console.log('\n17. Stock por categoría:', stockByCategory)

// 18. Producto con mejor relación calidad-precio
// (rating / precio) más alto
const bestValue = products.reduce((best, producto) => {
	const currentValue = producto.rating / producto.price
	const bestValue = best.rating / best.price

	return currentValue > bestValue ? producto : best
})
console.log('18. Mejor relación:', bestValue.name)

// 19. Array de IDs de productos en pedidos 'pending'
const pendingProductIds = orders
	.filter((order) => order.status === 'pending') // Solo pending
	.flatMap((order) => order.products) // Aplanar arrays de IDs
console.log('19. Productos en pedidos pending:', pendingProductIds)

// 20. Transformar array de productos a objeto con id como key
// Resultado: { 1: {...}, 2: {...}, ... }
const productsById = products.reduce((obj, producto) => {
	obj[producto.id] = producto
	return obj
}, {})
console.log(
	'20. Products by ID:',
	Object.keys(productsById).length,
	'productos',
)
