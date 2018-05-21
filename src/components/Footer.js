import { h, Component } from 'preact';
import { VisibilityFilters } from '../actions';
import FilterLink from './FilterLink';
import TodoCount from './TodoCount';
import ClearCompleted from './ClearCompleted';
import style from './style';

class Footer extends Component {
	render() {
		return (
      <footer class={style.footer}>
        <TodoCount />
        <ul class={style.filters}>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </ul>
        <ClearCompleted />
      </footer>
    );
  }
}

export default Footer;
