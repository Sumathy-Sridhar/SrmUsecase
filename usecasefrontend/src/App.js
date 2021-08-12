import {
  React,
  useState,
} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Aboutus from './AboutUs/Aboutus';
import Admindashboard from './AdminDashboard/Admindashboad';
import Adminlogin from './AdminLogin/Adminlogin';
import AdminView from './AdminViewApp/AdminView';
import ApplicationForm from './Application/ApplicationForm';
import ApplicationEdit from './ApproveReject/ApplicationEdit';
import ApproveReject from './ApproveReject/ApproveReject';
import Carddetails from './CardDetails/Carddetails';
import Statusui from './CheckStatus/Statusui';
import CibilScore from './CibilScore/CibilScore';
import CCtype from './Credittypes/CCtype';
import UiSidebar from './Dashboardcomp/UiSidebar';
import Queries from './Queries/Queries';
import PrivateRoute from './Routes/PrivateRoute';
import SignIn from './Signcomponent/SignIn';
import SignUp from './Signcomponent/SignUp';
import ViewPage from './ViewComp/ViewPage';

function App() {

  const [Auth,setSuth]=useState(false);
  return (
    <Router>
    <div className="App">
   
    <Switch>
    
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path='/dashboard' exact component={UiSidebar}/>
    <Route path='/' exact component={ViewPage}/>
    <Route path='/appedit' exact component={ApplicationEdit}/>
    <Route path='/appedit/appreject' exact component={ApproveReject}/>
    <Route path='/cibilreport' exact component={CibilScore}/>
    <Route path='/carddetails' exact component={Carddetails}/>
    <Route path='/admin' exact component={Adminlogin}/>
    <Route path='/adminview' exact component={AdminView}/>
    <Route path='/admindash' exact component={Admindashboard}/>
    <Route path='/status' exact component={Statusui}/>
    {/* <Route path='/applyform' exact component={ApplicationForm}/> */}
    <PrivateRoute exact path="/applyform" a={Auth} component={ApplicationForm} />
    <Route path='/aboutus' exact component={Aboutus}/>
    <Route path='/queries' exact component={Queries}/>
    <Route path='/creditype' exact component={CCtype}/>

    </Switch>



  </div>
  </Router>
    
  );
}

export default App;