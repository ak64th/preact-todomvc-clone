import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { VisibilityFilters } from '../actions';
import ToggleAll from './ToggleAll';
import Todo from './Todo';
import style from './style';

const mapStateToProps = state => {
  const {todos, visibilityFilter} = state;
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return {todos: todos.filter(t => t.completed)};
    case VisibilityFilters.SHOW_ACTIVE:
      return {todos: todos.filter(t => !t.completed)};
    case VisibilityFilters.SHOW_ALL:
    default:
      return {todos};
  }
}

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <section class={style.main}>
        <ToggleAll />
        <ul class={style['todo-list']}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(mapStateToProps)(TodoList);
