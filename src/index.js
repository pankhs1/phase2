import React, { Component } from 'react';
import { render } from 'react-dom';
import Notification from './Components/UserCompanyNotification/notification'
import AddCompany from './Components/AddCompany/AddCompany';
import ShowCompanyDetails from './Components/ShowCompanyDetails/ShowCompanyDetails'
import StudentDetails from './Components/StudentDetails/StudentDetails'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import TestName from './Components/TestName/TestName'
class App extends Component {
  constructor() {
    super();
  }
    render()
    {
      return(
     <BrowserRouter>
        <div>
        <Route exact path="/" component={AddCompany} /> 
         <Route path="/notification" component={Notification}                               /> 
         <Route path="/ShowCompanyDetails" component={ShowCompanyDetails}/>
          <Route path="/TestName" component={TestName}/>
         <Route path="/StudentDetails" component={StudentDetails}/>
         </div>

        </BrowserRouter>
      );
    }
  }


render( <App/>, document.getElementById('root'));
