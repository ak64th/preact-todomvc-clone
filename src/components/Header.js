import { h, Component } from 'preact';
import NewTodo from './NewTodo';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <NewTodo />
      </header>
    )
  };
}
