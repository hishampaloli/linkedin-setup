
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import {connect} from 'react-redux'
import Home from './components/Home/Home';
import { useEffect } from 'react';
import { getUserAuth } from './actions';


function App(Props) {
  

  useEffect(() => {
    Props.getUserAuth();
  }, []);
  

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<div><Header/><Home/></div>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
