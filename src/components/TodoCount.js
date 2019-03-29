import { h, Component } from 'preact';
import { css } from 'emotion';
import { connect } from 'preact-redux';

const todoCount = css`
	float: left;
	text-align: left;

  & strong {
  	font-weight: 300;
  }
`;

const mapStateToProps = ({todos}) => ({
  count: todos.filter((t) => !t.completed).length
});

class TodoCount extends Component {
  render() {
    const {count} = this.props;
    return (
      <span class={todoCount}>
        <strong>{count}</strong> item left
      </span>
    )
  }
}

export default connect(
  mapStateToProps
)(TodoCount);
