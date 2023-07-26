import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import App from './component/App';
import reportWebVitals from './reportWebVitals';

// アプリケーション内部で唯一のstoreを作成
// また、アプリケーション内部の全てのステートはこのstoreに集約される
const store = createStore(reducer); 

// Providerコンポーネントでラップすることで、
// 全階層のコンポーネントでstoreにアクセスできるようになる
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
