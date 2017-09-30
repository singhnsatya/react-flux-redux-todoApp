export function getTodo() {
	return {
		type: "FETCH_TODO",
		payload: {}
	}
}

export function createTodo(todo) {
	return {
		type: "CREATE_TODO",
		payload: {
			todo: todo,
			completed: false
		}
	}
}