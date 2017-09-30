import React from 'react';
import DisplayItem from './DisplayItem.jsx';

export default class DisplayList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
						{
							this.props.todos.map((todo, item) => {
								return <DisplayItem todo={todo}
								key={todo.id}
								handleChange = {this.props.handleChange.bind(null, todo)}
								handleDelete={this.props.handleDelete.bind(null, todo.id)} />
							})
						}
					</div>;
	}
}