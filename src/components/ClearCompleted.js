import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { destroyTodo } from '../actions';
import style from './style';

const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = (dispatch) => {
  return {
    clear: (todos) => {
      todos.forEach((t) => {
        if(t.completed) dispatch(destroyTodo(t.id));
      });
    }
  }
};

const mergeProps = ({todos}, {clear}) => {
  return {
    count: todos.filter((t) => t.completed).length,
    onClick: () => clear(todos)
  }
};

const ClearCompleted = ({count, onClick}) => {
  if (!count) return '';
  return (
    <button
      class={style['clear-completed']}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
    Clear completed
    </button>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ClearCompleted);
