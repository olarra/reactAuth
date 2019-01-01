import React, { Component } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ContactDetail from './components/ContactDetails';
import App from './App';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class RouterConfig extends Component {
  render() {
    return (
      <Router>
        <div>
           <App>
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/home" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path='/contact/:id' component={ContactDetail} />
               <Route component={NoMatch}/>
            </Switch>
           </App>
        </div>
      </Router>
    );
  }
}

export default RouterConfig;
