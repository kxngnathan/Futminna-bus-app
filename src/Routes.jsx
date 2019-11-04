// import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';

// import Dashboard from './views/Dashboard';
// import Reviews from './views/Reviews/Reviews';
// import Home from './views/Home';
// import Account from './views/Account';
// import Settings from './views/Settings';
// import SignUp from './views/SignUp';
// import SignIn from './views/SignIn';
// import Register from './views/Register'

// export default class Routes extends Component {
//   render() {
//     return (
//       <Switch>
//         <Redirect exact from="/" to="/dashboard"/>
//         <Route component={Dashboard} exact path="/dashboard"/>
//         <Route component={Home} exact path="/channels"/>
//         <Route component={Reviews} exact path="/reviews"/>
//         <Route component={Account} exact path="/account"/>
//         <Route component={Settings} exact path="/settings"/>
//         <Route component={SignUp} exact path="/sign-up"/>
//         <Route component={SignIn} exact path="/sign-in"/>
//         <Route component={Register} exact path="/register"/>
//       </Switch>
//     );
//   }
// }



import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Reviews from './views/Reviews/Reviews';
import Home from './views/Home';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Register from './views/Register';
import ScanReader from './views/Home';
import InputAmt from './views/InputAmt';
import Reciept from './views/Reciept';
// import DashNew from './views/DashNew';
import TopUp from './views/TopUp/Reviews';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/sign-in"/>
        <Route component={Dashboard} exact path="/dashboard"/>
        {/* <Route component={DashNew} exact path="/DashNew"/> */}
        <Route component={Home} exact path="/channels"/>
        <Route component={Reciept} exact path="/reciept"/>
        <Route component={ScanReader} exact path="/home"/>
        <Route component={InputAmt} exact path="/InputAmt"/>
        <Route component={Reviews} exact path="/reviews"/>
        <Route component={TopUp} exact path="/TopUp"/>
        <Route component={Account} exact path="/account"/>
        <Route component={Settings} exact path="/settings"/>
        <Route component={SignUp} exact path="/sign-up"/>
        <Route component={SignIn} exact path="/sign-in"/>
        <Route component={Register} exact path="/register"/>
      </Switch>
    );
  }
}
