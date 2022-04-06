 import React from "react";
 import {
  BrowserRouter as Router,Switch,
  Route ,
  
} from "react-router-dom";


 import Student from './pages/Student';
 import AddStudent from './pages/AddStudent'
 import EditStudent from "./pages/EditStudent";
 import IncDec from "./pages/IncDec";
function App() {

 
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Student} />
      <Route path="/add-student" component={AddStudent} />
      <Route path="/edit-tmp/:id" component={EditStudent} />      
      <Route path="/inc-dec" component={IncDec} />   
      </Switch>
    </Router>
  );
}

export default App;
