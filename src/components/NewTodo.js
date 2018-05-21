import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { addTodo } from '../actions';
import style from './style';

const mapDispatchToProps = (dispatch) => ({
  onEnter: (text) => dispatch(addTodo(text))
});

const NewTodo = ({onEnter}) => (
  <input
    class={style['new-todo']}
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
