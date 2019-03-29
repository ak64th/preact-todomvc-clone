import { h, Component } from 'preact';
import { css } from 'emotion';
import { VisibilityFilters } from '../actions';
import FilterLink from './FilterLink';
import TodoCount from './TodoCount';
import ClearCompleted from './ClearCompleted';


const footer = css`
	color: #777;
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	border-top: 1px solid #e6e6e6;

	&:before {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 50px;
		overflow: hidden;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
		            0 8px 0 -3px #f6f6f6,
		            0 9px 1px -3px rgba(0, 0, 0, 0.2),
		            0 16px 0 -6px #f6f6f6,
		            0 17px 2px -6px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 430px) {
		& {
			height: 50px;
		}
	}
`

const filters = css`
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;

	& li {
		display: inline;
	}

	& li a {
		color: inherit;
		margin: 3px;
		padding: 3px 7px;
		text-decoration: none;
		border: 1px solid transparent;
		border-radius: 3px;
	}

	& li a.selected,
	& li a:hover {
		border-color: rgba(175, 47, 47, 0.1);
	}

	& li a.selected {
		border-color: rgba(175, 47, 47, 0.2);
	}

	@media (max-width: 430px) {
		& {
			bottom: 10px;
		}
	}
`;


class Footer extends Component {
	render() {
		return (
      <footer class={footer}>
        <TodoCount />
        <ul class={filters}>
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
