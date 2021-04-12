// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-app-832b2.web.app/";
const clientId = "7d01358688b3451eb90952811e2f6eca";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash // getting complete access token
    .substring(1) // get substring
    .split("&") // splitting the substring
    .reduce((initial, item) => {
      let parts = item.split("="); // splitting the token from "=" sign
      initial[parts[0]] = decodeURIComponent(parts[1]); // creating dictionary {object}
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;
