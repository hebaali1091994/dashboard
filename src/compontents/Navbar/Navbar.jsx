import {
  ChatBubbleOutline,
  DarkModeOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutline className="icon"/>
            <div className="counter">1</div>

          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
          <img src=" https://images.pexels.com/photos/9507678/pexels-photo-9507678.jpeg?cs=srgb&dl=pexels-hanna-auramenka-9507678.jpg&fm=jpg"  className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
