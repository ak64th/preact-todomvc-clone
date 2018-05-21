import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import style from './style';

const mapStateToProps = ({todos}) => ({
  count: todos.filter((t) => t.completed).length
});

class TodoCount extends Component {
  render() {
    const {count} = this.props;
    return (
      <span class={style['todo-count']}>
        <strong>{count}</strong> item left
      </span>
    )
  }
}

export default connect(
  mapStateToProps
)(TodoCount);
