import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInAPI } from "../actions/index";

function Login(Props) {
  return (
    <div>
      <form>
        <button
          style={{
            margin: "40vh",
            backgroundColor: "white",
            padding: "10px 15px",
          }}
          onClick={() => Props.signIn()} >
          sign up with google
        </button>
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
