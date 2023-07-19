import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
// import { AppStudy } from 'study/componentsStudy/AppStudy';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <AppStudy /> */}
    </Provider>
  </React.StrictMode>
);
