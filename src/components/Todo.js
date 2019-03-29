import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import {toggleTodo, destroyTodo} from '../actions';

const mapDispatchToProps = (dispatch, {todo: {id}}) => {
  return {
    onToggleClick: () => dispatch(toggleTodo(id)),
    onDestroyClick: () => dispatch(destroyTodo(id)),
  }
}

const Todo = ({todo: {text, completed}, onToggleClick, onDestroyClick}) => {
  return (
    <li class={completed?'completed':''}>
      <div class={'view'}>
        <input
          class={'toggle'}
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            e.preventDefault();
            onToggleClick();
          }}
        >
        </input>
        <label>{text}</label>
        <button
          class={'destroy'}
          onClick={(e) => {
            e.preventDefault();
            onDestroyClick();
          }}
        />
      </div>
    </li>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Todo);
