import React, { useCallback, useState, useEffect } from "react";
import "./Leftsidebar.css";
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdOutlineVideoLibrary,
  MdSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import shorts from "./shorts.png";
import { NavLink } from "react-router-dom";

const LibraryItem = React.memo(({ icon, text, to, onClick }) => {
  useEffect(() => {
    console.log(`Rendering LibraryItem: ${text}`);
  }, [text]);

  return (
    <NavLink to={to} className="icon_sidebar_div" onClick={onClick}>
      <p>
        {icon}
        <div className="text_sidebar_icon">{text}</div>
      </p>
    </NavLink>
  );
});

const Drawersliderbar = ({ toggledraw, toggledrawersidebar }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleItemClick = useCallback((section) => {
    console.log(`Clicked section: ${section}`);
    setActiveSection(section);
  }, []);

  useEffect(() => {
    console.log("Rendering Drawersliderbar");
  }, [activeSection]);

  return (
    <div className="container_DrawaerLeftSidebar" style={toggledrawersidebar}>
      <div className="container2_DrawaerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <LibraryItem
            icon={<AiOutlineHome size={22} />}
            text="Home"
            to="/"
            onClick={() => handleItemClick("home")}
          />
          <LibraryItem
            icon={<MdOutlineExplore size={22} />}
            text="Explore"
            to="/explore"
            onClick={() => handleItemClick("explore")}
          />
          <LibraryItem
            icon={<img src={shorts} width={22} />}
            text="Shorts"
            to="/shorts"
            onClick={() => handleItemClick("shorts")}
          />
          <LibraryItem
            icon={<MdSubscriptions size={22} />}
            text="Subscriptions"
            to="/subscriptions"
            onClick={() => handleItemClick("subscriptions")}
          />
        </div>
        <div className="libraryBtn_Drawerleftsidebar">
          <LibraryItem
            icon={<MdOutlineVideoLibrary size={22} />}
            text="Library"
            to="/library"
            onClick={() => handleItemClick("library")}
          />
          <LibraryItem
            icon={<FaHistory size={22} />}
            text="History"
            to="/watchhistory"
            onClick={() => handleItemClick("history")}
          />
          <LibraryItem
            icon={<AiFillPlaySquare size={22} />}
            text="Your Videos"
            to="/yourvideo"
            onClick={() => handleItemClick("yourvideo")}
          />
          <LibraryItem
            icon={<MdOutlineWatchLater size={22} />}
            text="Watch Later"
            to="/watchlater"
            onClick={() => handleItemClick("watchlater")}
          />
          <LibraryItem
            icon={<AiFillLike size={22} />}
            text="Liked Videos"
            to="/likedvideo"
            onClick={() => handleItemClick("likedvideo")}
          />
        </div>
        <div className="subScriptions_lsdbar">
          <h3>Your Subscription</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
        </div>
      </div>
      <div
        className="container3_DrawaerLeftSidebar"
        onClick={() => toggledraw()}
      ></div>
    </div>
  );
};

export default React.memo(Drawersliderbar);
