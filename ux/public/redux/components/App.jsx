import React from 'react';
import { connect } from 'react-redux';
import { getTodo, createTodo } from '../actions/userActions'

@connect((store) => {
	return {
		todos: store.userReducers.todos
	};
})
export default class App extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
		this.state = {
			text: '',
		}
	}
	componentWillMount() {
		this.props.dispatch(getTodo())
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	createTodo() {
		let todo = this.state.text;
		this.props.dispatch(createTodo(todo))
		this.setState({text: ''})
	}

	render() {
		const { todos } = this.props;
		const todoList = todos.map(i => <li key={i.todo}>{i.todo}</li>)
		return (
			<div>			
			<input onChange={this.handleChange} value={this.state.text} />
			<button onClick={this.createTodo}>Add Todo</button>
			<ul>{todoList}</ul>
			</div>
			)
	}
}