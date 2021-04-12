import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { UserDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }] = UserDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, songs or podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
}

export default Header;
