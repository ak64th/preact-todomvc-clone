import { h, Component } from 'preact';
import { css } from 'emotion';

const info = css`
	margin: 65px auto 0;
	color: #bfbfbf;
	font-size: 10px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;

	& p {
		line-height: 1;
	}

	& a {
		color: inherit;
		text-decoration: none;
		font-weight: 400;
	}

	& a:hover {
		text-decoration: underline;
	}
`


export default class Info extends Component {
	render() {
		return (
      <footer class={info}>
        <p>Double-click to edit a todo</p>
      </footer>
    );
  }
}
