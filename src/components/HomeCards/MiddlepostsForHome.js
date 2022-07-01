import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import PublicIcon from "@mui/icons-material/Public";
import { useEffect } from "react";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { getArticlesAPI } from "../../actions";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function MiddlepostsForHome(props) {

  useEffect(() => {
    props.getArticles();
  }, []);

  console.log('=>>>>>',props.articles);


  return < >{!props.articles ? <Box sx={{ display: 'flex',marginTop:'50px',marginLeft:'50%' }}>
  <CircularProgress />
</Box> : (
  <>
  {props.articles.map(i => {
    return <div className="middlePosts flex flex-col items-start rounded-lg">

<div className="post-top flex flex-row justify-between">
  <div className="pt-left">
    <img
      src={i.actor.image}
      alt=""
    />
  </div>
  <div className="pt-right">
    <h1>{i.actor.title}</h1>
    <small className="flex items-center">
      4h. <PublicIcon />
    </small>
  </div>
</div>

<div className="post-title">
  <h1>
    {i.description}
  </h1>
</div>

<div className="post-img">
{i.video === '' ? <img
    src={i.sharedImg}
    alt=""
  />   :  <ReactPlayer width={"100%"} height={"300px"} url={i.video} /> }
 
</div>

<div className="post-bottom w-full py-1">
  <div
    className="pb-top flex justify-between text-xs  px-5 color-b py-3"
    style={{ color: "rgba(0, 0, 0, 0.621)" }}
  >
    <p>Nidhin M and 200 others</p>
    <p>0 comments , 0 shares</p>
  </div>

  <div
    className="pb-bottom flex justify-between p-5"
    style={{ color: "rgba(0, 0, 0, 0.621)" }}
  >
    <li className="post-icon flex justify-center">
      <ThumbUpOutlinedIcon />
    </li>
    <li className="post-icon flex justify-center">
      {" "}
      <InsertCommentOutlinedIcon />
    </li>
    <li className="post-icon flex justify-center">
      <ShareOutlinedIcon />
    </li>
    <li className="post-icon flex justify-center">
      <TelegramIcon />
    </li>
  </div>
</div>
</div>
  })}
     
        </>
  )}</>;
}

const mapStateToProps = (state) => {
  return {
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiddlepostsForHome);

   