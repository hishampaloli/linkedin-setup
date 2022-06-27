import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import PublicIcon from "@mui/icons-material/Public";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ChatIcon from "@mui/icons-material/Chat";
import Chat from "@mui/icons-material/Chat";
import ReactPlayer from "react-player";

function PostModalForHome(props) {
  const [text, setText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [showvid, setshowvid] = useState(false);

  const reset = (e) => {
    setText("");
    setShareImage("");
    setVideoLink("");
    setshowvid(false)
    props.handleClick(e);
  };

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const swithItem = (e) => {
    setshowvid(true);
    setVideoLink('')
    setShareImage('')
  }

  const swithIte = (e) => {
    setshowvid(false);
    setVideoLink('');
    setShareImage('') 
  }

  return (
    <>
      {props.showmodal === "open" && (
        <div className="post">
          <div className="modal">
            <div className="modal-top flex p-3 items-center justify-between">
              <p>Create a post</p>
              <ClearIcon
                onClick={(e) => reset(e)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="modal-profile p-3 flex items-center">
              <div className="mdpf-left">
                <img
                  src="https://media-exp2.licdn.com/dms/image/C5603AQH9Fjs8i_oRuQ/profile-displayphoto-shrink_100_100/0/1643992170235?e=1661990400&v=beta&t=hkCkIn57fOXi0J7E_dnlPD2_SbaVEH0VWruh9m8ubsM"
                  alt=""
                />
              </div>

              <div className="mdpf-right ml-3">
                <h1>hisham paloli</h1>
                <button className="flex px-3">
                  <PublicIcon /> Anyone <ArrowDropDownIcon />
                </button>
              </div>
            </div>

            <div className="modal-textarea flex justify-center p-3">
              <textarea
                value={text}
                placeholder="What do you want to talk about ?"
                id=""
                cols="70"
                rows="3"
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            <div className="modal-img flex justify-evenly">
              {shareImage && !videoLink && <img src={URL.createObjectURL(shareImage)} />}
              {videoLink && !shareImage && (
                <ReactPlayer width={"45%"} height={"190px"} url={videoLink} />
              )}
            </div>

            <div className="modal-bottom p-3">
              <div className="mdbt-top">
                <h1>Add Hashtag</h1>
                <input
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                  id="file"
                  name="image"
                  style={{ display: "none" }}
                  onChange={handleChange}
                />
                {showvid && ( <input
                  type="text"
                  placeholder="Please input a video link"
                 
                  onChange={(e) => setVideoLink(e.target.value)}
                />)}
               
              </div>
              <div className="mdbt-bottom flex items-center justify-between">
                <ul className="flex items-center">
                  <label htmlFor="file">
                    <li className="mr-3">
                      <PhotoSizeSelectActualIcon onClick={swithIte} />
                    </li>
                  </label>

                  <li>
                    <YouTubeIcon
                      onClick={swithItem}
                      fontSize="large"
                    />
                  </li>
                </ul>

                <ul className="flex items-center">
                  <li>
                    <ChatIcon /> Anyone
                  </li>
                  <button
                    disabled={false}
                    style={
                      text === ""
                        ? { cursor: "not-allowed" }
                        : { cursor: "pointer" }
                    }
                  >
                    Post
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModalForHome;
