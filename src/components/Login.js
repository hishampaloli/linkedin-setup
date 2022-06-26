import React from "react";
import { connect } from "react-redux";
import { signInAPI } from "../actions/index";
import {  useNavigate} from 'react-router-dom'

function Login(props) {
  const navigate = useNavigate();
  console.log(props.user);
  return (
    <div>
    {props.user && navigate('/home')}
      <form>
        <p
          style={{
            margin: "40vh",
            backgroundColor: "white",
            padding: "10px 15px",
          }}
          onClick={() => props.signIn()} >
          sign up with google
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
