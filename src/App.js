import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routes from './routes/routes';
import './App.css';
class App extends Component {
  show=(routes)=>{
    var result=null;
    if(routes.length>0){
      result=routes.map((route,index)=>{
        return(
          <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        );
      });
    }
    return result;
  }
  render() {
    return (
      <Router>
          <Switch>
            {this.show(routes)}
          </Switch>
      </Router>
    )
  }
}

export default App;
