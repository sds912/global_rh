import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/Main';
import Account from '../account/Account';
import Register from '../register/Register';
import Login from '../login/Login';


function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/"  component={Main}/>
         <Route exact path="/account/:id"  component={Account}/>
         <Route exact path="/register" component={Register} />
         <Route exact path="/login" component={Login} />
       </Switch>
    </div>
  );
}

export default App;
