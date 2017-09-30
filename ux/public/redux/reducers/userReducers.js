export default function reducer(state={
	todos: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {
	switch(action.type) {
		case "FETCH_TODO": {
			return {
				...state,
				fetching: false,
				fetched: true,
				todos: state.todos,
			}
			break;
		}
		case "CREATE_TODO": {
			return {
				...state,
				todos: [...state.todos, action.payload]
			}
			break;
		}
	}
	return state
}