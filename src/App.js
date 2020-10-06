import React, { createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/LayOut/Homepage';
import AdminHomepage from './components/LayOut/AdminHomepage';
import LandingPage from './components/LayOut/LandingPage';
import Register from './components/Register/Register';
import LoginForm from './components/Login/LoginForm';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserList from './components/Admin/UserList/UserList';
import LogOut from './components/Login/LogOut';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';
import AdminPrivateRoute from './components/PrivateRoute/AdminPrivateRoute';

export const UserContext = createContext();
export const AdminContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); //------- global logged in user
  const [loggedInAdmin, setLoggedInAdmin] = useState({})
  
  
  return (
    <div className="">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <AdminContext.Provider value={[loggedInAdmin, setLoggedInAdmin]}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/'><LandingPage /></Route>

              <Route path='/adminLogin'> <AdminLogin /> </Route>
              <AdminPrivateRoute path='/admin'><AdminHomepage /></AdminPrivateRoute>
              <AdminPrivateRoute path='/admin/user'><AdminHomepage /></AdminPrivateRoute>

              <Route path='/login'> <LoginForm /> </Route>
              <PrivateRoute path='/register/:id'> <Register /> </PrivateRoute>
              <PrivateRoute path='/profile'> <Profile /> </PrivateRoute>

              <Route path='/logout'> <LogOut /> </Route>
              <Route path='*'><h2>404 not found</h2></Route>
            </Switch>
          </BrowserRouter>
        </AdminContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
