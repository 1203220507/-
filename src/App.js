import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./page/home/Home'),
  loading: () => <div>加载中...</div>
})

const Login = Loadable({
  loader: () => import('./page/login/Login'),
  loading: () => <div>加载中...</div>
})

const Register = Loadable({
  loader: () => import('./page/register/Register'),
  loading: () => <div>加载中...</div>
})

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </HashRouter>
  );
}

export default App;
