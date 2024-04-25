import * as actions from '../actions/type';


export const todosReducers = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_TODO:
				return [action.payload, ...state]
		case actions.GETALL_TODO:
				return action.payload
		case actions.TOGGLE_TODO:
				return state.map(todo => (
						todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
				))
		case actions.UPDATE_TODO:
				return state.map(todo => (
						todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
				))
		case actions.DELETE_TODO:
				return state.filter(todo => todo._id !== action.payload._id);
		
		default: 
				return state;
	}
}