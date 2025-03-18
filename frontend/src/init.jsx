import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index.js";


const init = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
  
}

export default init;