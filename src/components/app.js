import { h, Component } from 'preact';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import Info from './Info';
import style from './style';

if (module.hot) {
	require('preact/debug');
}

class App extends Component {
	render() {
		return (
			<div role="application">
        <section class={style.todoapp}>
          <Header />
          <TodoList />
          <Footer />
        </section>
        <Info />
			</div>
		);
	}
}

export default App;
