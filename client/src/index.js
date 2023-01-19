import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
// import store from './app/store'
// import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <Provider store={store}> */}
    <App />
  {/* </Provider> */}
  </React.StrictMode>
);


