import {useState, useEffect} from 'react';
//import {SearchResults} from './SearchResults';
import {BsMusicNoteList} from 'react-icons/bs';
const MusicApp = () => {

    

    const CLIENT_ID = import.meta.env.VITE_MUSIC_APP_ID
    const REDIRECT_URI = 'http://localhost:5173/myApps/' 
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [tracks, setTracks] = useState({
      "id": '',
      "name": '',
      "uri": ''
    });
  //const [searchResults, setSearchResults] = useState([]);
    //  const [yourPlayList, setYourPlayList] = useState([]);

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

 //eslint-disable-next-line no-unused-vars
const searchArtists = async (e) => {
  e.preventDefault();
await fetch(`http://api.spotify.com/v1/search?q=${searchKey}&type=track,album&limit=8`, {
  headers: {
    'Authorization': `Bearer ${token}`
}}
).then(response => {
  //console.log(response.ok);
  return response.json()
}).then(jsonResponse=> {
  //console.log(jsonResponse.tracks.items[0].album.id);
  jsonResponse.tracks.items.map(track => setTracks({
    id: track.id,
    name: track.name,
    uri: track.uri,
  }))
 console.log([tracks])

})
.catch(error => console.error(error))
}

//  const handleAdd = (list) => {
//    let newData = [list[0], list[1], list[2] ];
//    const newPlaylist = [...yourPlayList,  newData];
//    setYourPlayList(newPlaylist);
//    return yourPlayList;
//  }

//  const handleRemove = (id) => {
//    const newPlaylist = yourPlayList.filter((list) => list[0] !== id);
//    setYourPlayList(newPlaylist);
//    console.log(newPlaylist)
//    return yourPlayList;
//  }


  return (
  <div className='flex-box'> 
    <h2 className='mb-1'><BsMusicNoteList className='inline-block align-center mr-2 mb-2'/>Music App</h2>
    <p className='font-light mb-3'>Spotify music search</p>
    <div >
    {token? (
        <form onSubmit={searchArtists} >
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} placeholder='keyword' className='shadow-md'/>
          <button className='bg-green-500 text-white font-bold rounded-md shadow-lg p-2 mt-2 hover:bg-green-700 hover:text-white hover:font-bold hover:shadow-md' type={"submit"}>Search</button>
        </form>
      ) : <p>Please login</p>}
       { !token ? (<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}  >Login to Spotify</a>) : <button className='text-gray-500 hover:text-gray-700 hover:underline mt-2' onClick={logout}>Logout</button>}
      </div>
      <div className='w-1/2'>
      <ul>
        <li>{tracks.name} {tracks.artist}<button> + </button></li>
      </ul>
      </div>

    {/* <div>
      <SearchResults searchResults={searchResults} handleAdd={handleAdd} yourPlayList={yourPlayList} handleRemove={handleRemove}/>
    </div> */}
  
  </div>
  )

}

export default MusicApp;