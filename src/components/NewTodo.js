import { h, Component } from 'preact';
import { css } from 'emotion';
import { connect } from 'preact-redux';
import { addTodo } from '../actions';

const newTodo = css`
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	border: 0;
	outline: none;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-font-smoothing: antialiased;
	font-smoothing: antialiased;
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`


const mapDispatchToProps = (dispatch) => ({
  onEnter: (text) => dispatch(addTodo(text))
});

const NewTodo = ({onEnter}) => (
  <input
    class={newTodo}
    placeholder="What needs to be done?"
    value=""
    onKeyUp={(e) => {
      const value = e.target.value.trim();
      if(e.key === 'Enter' && value.length > 0) {
        onEnter(value);
        e.target.value = '';
      }
    }}
  />
)

export default connect(
  null,
  mapDispatchToProps
)(NewTodo);
