import dispatcher from '../dispatcher/dispatcher.js';

export function createTodo(text) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text,
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id,
	});
}

export function reloadTodo() {
	dispatcher.dispatch({
		type: 'RELOAD_TODO',
		todos: [
				{
					id :12,
					text: "Learn reacthkjhjkhkj",
					complete: true
				},
				{
					id :18798,
					text: "Learn flux completed",
					complete: true
				},
			],
	});
}