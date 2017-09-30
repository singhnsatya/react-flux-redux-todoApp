import React from 'react';

export default class DisplayItem extends React.Component {
	render() {
		var todo = this.props.todo;
		return <li>
		<input type="checkbox" onChange={this.props.handleChange.bind(null, todo)} />
		{this.props.todo.text}
		<a href="#" onClick={this.props.handleDelete.bind(null, todo.id)}>[x]</a>
		</li>
		}
}
