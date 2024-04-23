import * as actions from '../actions/type';

export const tabReducer = (state = actions.ALL_TODOS, action) => {
	switch (action.type) {
		case actions.TOGGLE_TAB:
				return action.selected
		default: 
				return state;
	}
}