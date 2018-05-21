import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import {toggleTodo, destroyTodo} from '../actions';
import style from './style';

const mapDispatchToProps = (dispatch, {todo: {id}}) => {
  return {
    onToggleClick: () => dispatch(toggleTodo(id)),
    onDestroyClick: () => dispatch(destroyTodo(id)),
  }
}

const Todo = ({todo: {text, completed}, onToggleClick, onDestroyClick}) => {
  return (
    <li class={completed?style.completed:''}>
      <div class={style.view}>
        <input
          class={style['toggle']}
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
          class={style.destroy}
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
