import { Provider } from 'preact-redux';
import store from './store';
import App from './components/app';

const TodoMVCApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default TodoMVCApp;
