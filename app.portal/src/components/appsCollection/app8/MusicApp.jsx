import {useState, useEffect} from 'react';
import {SearchResults} from './SearchResults';
import {BsMusicNoteList} from 'react-icons/bs';

const MusicApp = () => {

    const CLIENT_ID = import.meta.env.VITE_MUSIC_APP_ID
    const REDIRECT_URI = 'http://localhost:5173/myApps/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [yourPlayList, setYourPlayList] = useState([]);

useEffect(() => {
  const hash = window.location.hash;
  let token = window.localStorage.getItem("token");
  if(!token && hash){
    token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

    window.location.hash = "";
    window.localStorage.setItem("token", token);
    
  }
  setToken(token);
}, [])

const logout = () => {
  setToken("");
  window.localStorage.removeItem("token");
}

// eslint-disable-next-line no-unused-vars
const searchArtists = async (e) => {
  e.preventDefault();
await fetch(`http://api.spotify.com/v1/search?q=${searchKey}&type=artist,album&limit=8`, {
  headers: {
    'Authorization': `Bearer ${token}`
}}
).then(response => {
  return response.json()
}).then(jsonResponse => {
  if(!jsonResponse.artists){
    return [];
  }
  const results = jsonResponse.artists.items;
  console.log(results)
  setSearchResults[results];
  console.log(results)
})

const handleAdd = (list) => {
  let newData = [list[0], list[1], list[2] ];
  const newPlaylist = [...yourPlayList,  newData];
  setYourPlayList(newPlaylist);
  return yourPlayList;
}

const handleRemove = (id) => {
  const newPlaylist = yourPlayList.filter((list) => list[0] !== id);
  setYourPlayList(newPlaylist);
  console.log(newPlaylist)
  return yourPlayList;
}

  return (
  <>
    <h2><BsMusicNoteList className='inline-block align-center mr-2 mb-2'/>Music App</h2>  
    <div >
       { !token ? (<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}  >Login to Spotify</a>) : <button onClick={logout}>Logout</button>}
      {token? (
        <form onSubmit={searchArtists} >
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button className='bg-green-500 text-white font-bold rounded-md shadow-lg p-2 mt-2 hover:bg-green-700 hover:text-white hover:font-bold hover:shadow-md' type={"submit"}>Search</button>
        </form>
      ) : <p>Please login</p>}
      </div>
    <div>
      <ul>
      {searchResults? 
        
        searchResults.map((result) => {
        return <li key={result.id}><p>{result.name}</p></li>}) : (<p>No result</p>)
      }
      </ul>
      <SearchResults searchResults={searchResults} handleAdd={handleAdd} yourPlayList={yourPlayList} handleRemove={handleRemove}/>
    </div>
  
  </>
  )
}
}
export default MusicApp;