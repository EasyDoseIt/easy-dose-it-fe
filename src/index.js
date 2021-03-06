import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HomeScreen from './components/HomeScreen/HomeScreen';
import TopAppBar from './components/TopAppBar/TopAppBar';
import ProductView from './components/ProductView/ProductView';
import Categories from './components/Categories/Categories';
import BottomAppBar from './components/BottomAppBar/BottomAppBar';
import UhOhPage from './components/UhOhPage/UhOhPage';
import Login from './components/Login/Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Route 
      render={ (props) => (
        <TopAppBar {...props} />
      )}
      />
      <Switch>
      <Route path="/login" component={Login}/>
      <Route exact path="/" 
      render={ (props) => (
        <HomeScreen {...props} />
      )}
      />
      <Route path='/newCategory' component={ProductView}/>
      <Route exact path="/categories" 
      render={ (props) => (
        <Categories {...props} />
      )}
      />
      <Route 
      render={ (props) => (
        <UhOhPage {...props} />
      )}
      />
      </Switch>
      <Route 
      render={(props) => (
        <BottomAppBar {...props} />
      )}
      />
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
