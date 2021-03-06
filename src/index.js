import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import store from "./flux/store";
import App from './App';
import * as serviceWorker from './serviceWorker';

const router = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
