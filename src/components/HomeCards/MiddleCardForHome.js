import React from "react";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import WorkIcon from "@mui/icons-material/Work";
import FeedIcon from "@mui/icons-material/Feed";
import { connect } from 'react-redux'
function MiddleCardForHome(props) {
  return (
    <div className="middle flex flex-col items-center rounded-lg">
      <div className="middle-top flex items-center justify-between">
        <div className="logo">
          <img
            src={props.user && props.user.photoURL ? props.user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
            alt=""
          />
        </div>

        <button>Ask your network for advice</button>
      </div>
      <div className="middle-bottom w-full list-none flex items-center justify-around">
        <li className="flex items-center">
          <PhotoSizeSelectActualIcon
            style={{ color: "rgb(1, 213, 255)", marginRight: "5px" }}
          />{" "}
          Photo
        </li>
        <li className="flex items-center">
          <VideoLibraryIcon
            style={{ color: "rgba(79, 255, 73, 0.808)", marginRight: "5px" }}
          />
          Video
        </li>
        <li className="flex items-center">
          <WorkIcon
            style={{ color: " rgba(224, 85, 255, 0.808)", marginRight: "5px" }}
          />
          Job
        </li>
        <li className="flex items-center">
          <FeedIcon
            style={{ color: "  rgba(255, 187, 85, 0.808)", marginRight: "5px" }}
          />
          Article
        </li>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MiddleCardForHome);


