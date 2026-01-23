// Implementa estas 3 funciones usando async/await

/**
 * 1. Obtener usuario de JSONPlaceholder
 */
async function getUser(id) {
	// TODO: Fetch user con id
	// URL: https://jsonplaceholder.typicode.com/users/{id}
	// Devolver el objeto user
	try {
		const userRes = await fetch(
			`https://jsonplaceholder.typicode.com/users/${id}`,
		)
		const user = await userRes.json()
		return user
	} catch (error) {
		console.log(error)
	}
}

/**
 * 2. Obtener usuario + sus posts
 */
async function getUserWithPosts(id) {
	// TODO:
	// 1. Obtener user
	// 2. Obtener posts del user
	// URL posts: https://jsonplaceholder.typicode.com/posts?userId={id}
	// Devolver { user, posts }

	try {
		const user = await getUser(id)
		const postsRes = await fetch(
			`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
		)

		const posts = await postsRes.json()

		return { user, posts }
	} catch (error) {
		console.log(error)
	}
}

/**
 * 3. Obtener múltiples usuarios en paralelo
 */
async function getMultipleUsers(ids) {
	// TODO: Obtener varios users a la vez con Promise.all
	// Devolver array de users
	const promises = ids.map((id) => getUser(id))

	const users = await Promise.all(promises)
	return users
}

// Tests
;(async () => {
	console.log('=== TEST 1 ===')
	const user = await getUser(1)
	console.log(user.name)

	console.log('\n=== TEST 2 ===')
	const data = await getUserWithPosts(1)
	console.log(`${data.user.name} tiene ${data.posts.length} posts`)

	console.log('\n=== TEST 3 ===')
	const users = await getMultipleUsers([1, 2, 3])
	console.log(users.map((u) => u.name))
})()
