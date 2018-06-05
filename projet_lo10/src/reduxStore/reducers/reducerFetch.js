import { combineReducers } from 'redux'

function todos(state = [], action){
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

function results(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_RESULT_SUCCESS':
            return action.results;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
	todos,
  itemsHasErrored,
  itemsIsLoading,
  results
})
export default rootReducer;
