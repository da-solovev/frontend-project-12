import { Provider } from 'react-redux';
import App from './App';
import store from './store/index.js';
import connectSocket from './api/socket.js';

const init = () => {
  connectSocket(store);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default init;
