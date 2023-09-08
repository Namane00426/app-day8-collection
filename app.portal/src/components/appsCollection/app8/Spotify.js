const CLIENT_ID = import.meta.env.VITE_MUSIC_APP_ID;
const REDIRECT_URI = 'http://localhost:5173/myapps';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

//Authentification url for Spotify API
const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-private,playlist-modify-public,playlist-read-private,user-read-private&redirect_uri=${REDIRECT_URI}`;

//Search track url for Spotify API
const api_Url = 'http://api.spotify.com/v1/';
const search_Url = 'search?type=track,album&limit=8&q=';
export  {authUrl, api_Url, search_Url};