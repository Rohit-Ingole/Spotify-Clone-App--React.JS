import "./App.css";
import Login from "./Login";
import React, { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { UserDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = UserDataLayerValue(); // {user} = DataLayer.user
  // dispatch is like the gun that shoots the data to the DataLayer that is created.

  // Run code based on the given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); // setting token to spotify api

      spotify.getMe().then((user) => {
        // getting the user data using the token

        // getting the user data and pushing it to the data layer.
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcUVp4DAmPaL3").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, [dispatch]);
  //   console.log("👱", user);
  return (
    // BEM
    <div className="app">
      {token ? (
        // <Player />
        <Player spotify={spotify} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
