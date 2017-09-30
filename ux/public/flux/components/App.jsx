import React from 'react';
import DisplayList from './DisplayList.jsx';
import TodoStore from '../stores/TodoStore';
import * as TodoActions from '../actions/TodoActions.js';

class App extends React.Component {

	constructor() {
		super();
		this.getTodos = this.getTodos.bind(this);
		this.onChange = this.onChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.reloadTodo = this.reloadTodo.bind(this);
		this.state = {
			todos: TodoStore.getAll(),
			text: '',
		}
	}

	componentWillMount() {
		TodoStore.on('change', this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener('change', this.getTodos);
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getAll()
		})
	}

	createTodo() {
		let todo = this.state.text;
		TodoActions.createTodo(todo);
		this.setState({text: ''});
	}

	reloadTodo() {
		TodoActions.reloadTodo();
	}

	onChange(e) {
		this.setState({text: e.target.value});
	}

	handleDelete(id) {
		TodoActions.deleteTodo(id);
	}

	handleDone(todo) {
		TodoActions.handleDone(todo);
	}

	render() {
		const { todos } = this.state;
		return (
				<div>
				<input onChange={this.onChange} value={this.state.text}/>
				<button onClick={this.createTodo}>Add Todo</button>
				<button onClick={this.reloadTodo}>Default Todos</button>
				<DisplayList todos = {todos} 
				handleDelete={this.handleDelete.bind(this)} 
				handleChange = {this.handleDone.bind(this)}/>
				</div>
			)
	}
}

export default App;