import { combineReducers } from 'redux';
import { uniqueId } from 'lodash';
import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  DESTROY_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from './actions';

const {SHOW_ALL} = VisibilityFilters;

const initialTodos = [
  {id: uniqueId('todo_'), text: 'abc', completed: false},
  {id: uniqueId('todo_'), text: 'def', completed: true},
]

function todos(state = initialTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: uniqueId('todo_'),
        text: action.text,
      }];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id)
          return {...todo, completed: !todo.completed};
        return todo;
      });
    case DESTROY_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
