import { h, Component } from 'preact';
import { css } from 'emotion';
import { connect } from 'preact-redux';
import { every } from 'lodash';
import { toggleTodo } from '../actions';

const toggleAllStyle = css`
	position: absolute;
	top: -55px;
	left: -12px;
	width: 60px;
	height: 34px;
	text-align: center;
	border: none; /* Mobile Safari */

  label[for='toggle-all'] {
  	display: none;
  }

  &:before {
  	content: '❯';
  	font-size: 22px;
  	color: #e6e6e6;
  	padding: 10px 27px 10px 27px;
  }

  &:checked:before {
  	color: #737373;
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) {
		background: none;
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-appearance: none;
		appearance: none;
  }
`;

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
  const allCompleted = todos.length && every(todos, (t) => t.completed);
  return {
    checked: allCompleted,
    onClick: () => toggleAll(todos, !allCompleted)
  }
};

const ToggleAll = ({checked, onClick}) => (
  <input
    class={toggleAllStyle}
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
