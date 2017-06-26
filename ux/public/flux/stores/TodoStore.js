import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher.js';

class TodoStore extends EventEmitter {
	constructor() {
		super();
			this.todos = [
				{
					id :1,
					text: "Learn react",
					complete: true
				},
				{
					id :1,
					text: "Learn flux",
					complete: false
				},
			]
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
		}
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