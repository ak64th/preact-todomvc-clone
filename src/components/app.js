import { h, Component } from 'preact';
import { css, injectGlobal } from 'emotion';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import Info from './Info';

if (module.hot) {
	require('preact/debug');
}

class App extends Component {
	render() {

    injectGlobal`
      html,
      body {
      	margin: 0;
      	padding: 0;
      }

      button {
      	margin: 0;
      	padding: 0;
      	border: 0;
      	background: none;
      	font-size: 100%;
      	vertical-align: baseline;
      	font-family: inherit;
      	font-weight: inherit;
      	color: inherit;
      	-webkit-appearance: none;
      	appearance: none;
      	-webkit-font-smoothing: antialiased;
      	-moz-osx-font-smoothing: grayscale;
      }

      body {
      	font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
      	line-height: 1.4em;
      	background: #f5f5f5;
      	color: #4d4d4d;
      	min-width: 230px;
      	max-width: 550px;
      	margin: 0 auto;
      	-webkit-font-smoothing: antialiased;
      	-moz-osx-font-smoothing: grayscale;
      	font-weight: 300;
      }

      :focus {
      	outline: 0;
      }
    `

    const todoapp = css`
    	background: #fff;
    	margin: 130px 0 40px 0;
    	position: relative;
    	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    	            0 25px 50px 0 rgba(0, 0, 0, 0.1);

      & input::-webkit-input-placeholder {
      	font-style: italic;
      	font-weight: 300;
      	color: #e6e6e6;
      }

      & input::-moz-placeholder {
      	font-style: italic;
      	font-weight: 300;
      	color: #e6e6e6;
      }

      & input::input-placeholder {
      	font-style: italic;
      	font-weight: 300;
      	color: #e6e6e6;
      }

      & h1 {
      	position: absolute;
      	top: -155px;
      	width: 100%;
      	font-size: 100px;
      	font-weight: 100;
      	text-align: center;
      	color: rgba(175, 47, 47, 0.15);
      	-webkit-text-rendering: optimizeLegibility;
      	-moz-text-rendering: optimizeLegibility;
      	text-rendering: optimizeLegibility;
      }
    `

		return (
      <section class={todoapp}>
        <Header />
        <TodoList />
        <Footer />
      </section>
		);
	}
}

export default App;
