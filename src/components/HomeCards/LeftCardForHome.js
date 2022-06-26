import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import { connect} from 'react-redux'

function LeftCardForHome(props) {
  return (
    <div className="left flex flex-col items-center relative ">
      <div className="left-top rounded-t-lg"></div>

      <div className="left-body flex flex-col items-center">
        <div className="prof"><img style={{borderRadius:'50%'}} src={props.user && props.user.photoURL ? props.user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'} alt="" /></div>
        <h1 className="text-base">{props.user && props.user.displayName ?  props.user.displayName : 'Welcome user !'}</h1>
        <p>Start your Journey !</p>
      </div>

      <div className="left-bottom">
        <li className=" flex flex-row  justify-between">
          <p>Who's viewed your profile</p> <p>294</p>
        </li>

        <li className=" flex flex-row  justify-between">
          <p>Impressions of your posts</p> <p>294</p>
        </li>
      </div>

      <div className="left-bottom-last ">
        <li className=" flex flex-row items-center  justify-start">
          <TouchAppIcon className="mr-2" /> Try Premium for free
        </li>
        <li className=" flex flex-row items-center  justify-start rounded-b-lg">
          <BookmarkIcon className="mr-2" /> My items
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftCardForHome);
