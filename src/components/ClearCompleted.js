import { h, Component } from 'preact';
import { css } from 'emotion';
import { connect } from 'preact-redux';
import { destroyTodo } from '../actions';

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

const clearCompleted = css`
  &,
  html &:active {
  	float: right;
  	line-height: 20px;
  	text-decoration: none;
  	cursor: pointer;
  	position: relative;
  }

  &:hover {
  	text-decoration: underline;
  }
`

const ClearCompleted = ({count, onClick}) => {
  if (!count) return '';
  return (
    <button
      class={clearCompleted}
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
