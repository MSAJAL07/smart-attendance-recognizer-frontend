import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/login/SignIn';
import SignUp from './components/signup/SignUp'
import AppBar from './components/appbar/AppBar'
import  ProtectedRoute from "./auth/ProtectedRoute";
import {isAuthenticated, LogOut} from "./auth/Auth";





function App() {
  const [open, setOpen] = React.useState(true);
  const [auth, setAuth] = React.useState(isAuthenticated());

  const handleAuth = (value) => setAuth(value)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <div className="App">
      <Router>
        <AppBar handleDrawerOpen = {handleDrawerOpen} handleAuth = {handleAuth} auth = {auth} />        
        <Switch>
          <Route path = "/sign-in" component = {SignIn} />
          <Route path = "/sign-up" component = {SignUp}/>
          <ProtectedRoute path = "/dashboard" component = {() =>(<Dashboard  handleDrawerClose = {handleDrawerClose} handleDrawerOpen = {handleDrawerOpen} open = {open}/> )}/>
          <ProtectedRoute exact path = "/" component = {() =>(<Dashboard handleDrawerClose = {handleDrawerClose} handleDrawerOpen = {handleDrawerOpen} open = {open} /> )}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
