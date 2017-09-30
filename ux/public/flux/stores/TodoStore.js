import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher.js';

class TodoStore extends EventEmitter {
	constructor() {
		super();
			this.todos = []
		}

	getAll() {
		return this.todos;
	}

	reloadTodo(todos) {
		this.todos = todos;
		this.emit('change');
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			break;
			case "RELOAD_TODO": {
				this.reloadTodo(action.todos);
			}
			break;
			case "DELETE_TODO": {
				this.deleteTodo(action.id);
			}
			break;
			case "COMPLETE_TODO": {
				this.completeTodo(action.todo);
			}
			break;
		}
	}

	completeTodo(todo) {
		var todo = this.todos.filter((item) => {
			return item.id === todo.id;
		})[0];
		todo.complete = !todo.complete;
		this.emit('change');
	}

	deleteTodo(id) {
		this.todos = this.todos.filter((i) => {
			return i.id != id;
		});
		this.emit('change');
	}

	createTodo(text) {
		const id = Date.now()
		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit('change');
	}

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));

// window.dispatcher = dispatcher;

export default todoStore;