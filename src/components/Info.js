import { h, Component } from 'preact';
import style from './style';

export default class Info extends Component {
	render() {
		return (
      <footer class={style.info}>
        <p>Double-click to edit a todo</p>
      </footer>
    );
  }
}
