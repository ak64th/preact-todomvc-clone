import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { every } from 'lodash';
import { toggleTodo } from '../actions';
import style from './style';

const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAll: (todos, status) => {
      todos.forEach((t) => {
        if(t.completed !== status)
          dispatch(toggleTodo(t.id));
      });
    }
  }
};

const mergeProps = ({todos}, {toggleAll}) => {
  const allCompleted = every(todos, (t) => t.completed);
  return {
    checked: allCompleted,
    onClick: () => toggleAll(todos, !allCompleted)
  }
};

const ToggleAll = ({checked, onClick}) => (
  <input
    class={style['toggle-all']}
    type="checkbox"
    checked={checked}
    onClick={onClick}
  ></input>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ToggleAll);
