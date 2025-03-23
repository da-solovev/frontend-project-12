import { Provider } from 'react-redux';
import App from './App';
import store from './store/index.js';

const init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default init;
