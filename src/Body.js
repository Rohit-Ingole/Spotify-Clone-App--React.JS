import React from "react";
import "./Body.css";
import Header from "./Header";
import { UserDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body(spotify) {
  const [{ discover_weekly }, dispatch] = UserDataLayerValue();
  return (
    <div className="body">
      <div className="upperBody">
        <Header spotify={spotify} />
        <div className="body__info">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
      </div>
      <div className="lowerBody">
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className="body__shuffle" />
            <FavoriteIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
          {/* List of songs */}
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
