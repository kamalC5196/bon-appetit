import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './App';
import WinePairings from './components/WinePairings';
import Category from './components/Category';
import Ingerident from './components/Ingerident';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./js/reducers";

const store = createStore(rootReducer);
store.subscribe(()=> console.log('store',store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/winepairings' component={WinePairings} />
                <Route path='/category' component={Category} />
                <Route path='/ingeridents' component={Ingerident} />
            </Switch>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
