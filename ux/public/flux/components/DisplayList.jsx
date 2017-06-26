import React from 'react';

export default class DisplayList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div>
				{
					this.props.todos.map((i) => {
						return (
								<div>
								<li key={i.id}>{i.text}</li>
								</div>
							)
					})
				}
				</div>
			)
	}
}