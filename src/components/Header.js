import { h, Component } from 'preact';
import NewTodo from './NewTodo';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>todos</h1>
        <NewTodo />
      </header>
    )
  };
}
