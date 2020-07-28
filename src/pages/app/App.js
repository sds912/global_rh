import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/Main';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route exact path="/"  component={Main}/>
       </Switch>
    </div>
  );
}

export default App;
