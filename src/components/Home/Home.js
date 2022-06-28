import React from "react";
import "./Home.css";
import LeftCardForHome from "../HomeCards/LeftCardForHome";
import RightCardForHome from "../HomeCards/RightCardForHome";
import MiddleCardForHome from "../HomeCards/MiddleCardForHome";

import {  useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import MiddlepostsForHome from "../HomeCards/MiddlepostsForHome";
import PostModalForHome from "../HomeCards/PostModalForHome";

function Home(props) {
  const navigate = useNavigate();

  return (
    <div className="main">
     {/* {!props.user && navigate('/')} */}
      <div className="home flex justify-around">
        <div className="row1">
          <LeftCardForHome />
          <div className="middlemain ">
            <MiddleCardForHome />
            <MiddlepostsForHome />
          </div>
        </div>
        <RightCardForHome />
      </div>
      <PostModalForHome />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};


export default connect(mapStateToProps)(Home);
