import { h, Component } from 'preact';
import { css } from 'emotion';
import { connect } from 'preact-redux';
import { VisibilityFilters } from '../actions';
import ToggleAll from './ToggleAll';
import Todo from './Todo';

const main = css`
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
`;

const todoList = css`
	margin: 0;
	padding: 0;
	list-style: none;

  & li {
  	position: relative;
  	font-size: 24px;
  	border-bottom: 1px solid #ededed;
  }

  & li:last-child {
  	border-bottom: none;
  }

  & li.editing {
  	border-bottom: none;
  	padding: 0;
  }

  & li.editing .edit {
  	display: block;
  	width: 506px;
  	padding: 13px 17px 12px 17px;
  	margin: 0 0 0 43px;
  }

  & li.editing .view {
  	display: none;
  }

  & li .toggle {
    /* autoprefixer: off */
  	text-align: center;
  	width: 40px;
  	/* auto, since non-WebKit browsers doesn't support input styling */
  	height: auto;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	margin: auto 0;
  	border: none; /* Mobile Safari */
  	-webkit-appearance: none;
  	appearance: none;
  }

  & li .toggle:after {
  	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }

  & li .toggle:checked:after {
  	content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }

  & li label {
  	white-space: pre-line;
  	word-break: break-all;
  	padding: 15px 60px 15px 15px;
  	margin-left: 45px;
  	display: block;
  	line-height: 1.2;
  	transition: color 0.4s;
  }

  & li.completed label {
  	color: #d9d9d9;
  	text-decoration: line-through;
  }

  & li .destroy {
  	display: none;
  	position: absolute;
  	top: 0;
  	right: 10px;
  	bottom: 0;
  	width: 40px;
  	height: 40px;
  	margin: auto 0;
  	font-size: 30px;
  	color: #cc9a9a;
  	margin-bottom: 11px;
  	transition: color 0.2s ease-out;
  }

  & li .destroy:hover {
  	color: #af5b5e;
  }

  & li .destroy:after {
  	content: '×';
  }

  & li:hover .destroy {
  	display: block;
  }

  & li .edit {
  	display: none;
  }

  & li.editing:last-child {
  	margin-bottom: -1px;
  }

	@media screen and (-webkit-min-device-pixel-ratio:0) {
		& li .toggle {
			background: none;
			height: 40px;
		}
	}
`;

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
      <section class={main}>
        <ToggleAll />
        <ul class={todoList}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </section>
    );
  }
}

export default connect(mapStateToProps)(TodoList);
