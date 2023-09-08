import {useState, useEffect} from 'react';
import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import {authUrl, api_Url, search_Url} from './Spotify';

function MusicApp() {
    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [tracks, setTracks] = useState([]);
    const [yourPlayList, setYourPlayList] = useState([]);
    const [newTitle, setNewTitle] = useState('My list');
    const [value, setValue] = useState('');
    const [addUris, setAddUris] = useState([]);

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
  const searchUrl = `${api_Url}${search_Url}${searchKey}`
await fetch(searchUrl, {
  headers: {
    'Authorization': `Bearer ${token}`
}}
).then(response => {
  return response.json()
}).then(jsonResponse=> {
  let newList = [];
  jsonResponse.tracks.items.map(item => newList.push(item));
  setTracks(newList);
  return tracks;
})
.catch(error => console.error(error))
}

const savePlayList = (newTitle, addUris) => {
  if(!newTitle || !addUris) {
    return;
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json'
  }

  let userId; 
  return fetch(`${api_Url}me`, {headers: headers}
  ).then (response => response.json())
  .then(jsonResponse => {
    userId = jsonResponse.id;
    return fetch(`${api_Url}users/${userId}/playlists`, 
    {
     headers: headers,
     method: 'POST',
     body: JSON.stringify({name: newTitle, public: false }),
    }).then(response => response.json())
    .then(jsonResponse => {
      let playListId;
      playListId = jsonResponse.id;
      console.log(JSON.stringify({uris: addUris}));
      return fetch(`${api_Url}users/${userId}/playlists/${playListId}/tracks`, 
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({uris: addUris}),
        json: true,
      })
    })
  })
    
  }

  function addToNewPlayList(arr){
    let newId = yourPlayList.length +1 ;
  const newPlayList = [...yourPlayList, {
    "id": newId,
    "name": arr[1],
    "artistName": arr[2],
    "track_uri": `spotify:track:${arr[0]}`
   }]

  const uniqueList = Array.from(new Map(newPlayList.map((list) => [list.id, list])).values())

   setYourPlayList(uniqueList);
   return yourPlayList;
 }

 const addTracks_Spotify = () => {
  let newUris = [];
  yourPlayList.forEach(track => {
    newUris.push(track.track_uri)
  })
  setAddUris(newUris)
 }

 const handleAddToSpotify = () => {
  addTracks_Spotify();
  savePlayList(newTitle, addUris);
 }

 function handleAdd(arr){
  addToNewPlayList(arr);
  }

  const handleRemove = (id) => {
    const newPlaylist = yourPlayList.filter((list) => list.id !== id);
    setYourPlayList(newPlaylist);
    return yourPlayList;
  }

  const handleReset = () => {
    setSearchKey('');
    setTracks([]);
  }


  return (
    //search box
  <div className='flex-box'> 
   <SearchBar 
   token={token} searchArtists={searchArtists} searchKey={searchKey} setSearchKey={setSearchKey} logout={logout} authUrl={authUrl}/>

      
    {/**search results  */}
    <SearchResults 
    handleReset={handleReset} handleAdd={handleAdd} newTitle={newTitle} setNewTitle={setNewTitle} value={value} setValue={setValue} tracks={tracks} yourPlayList={yourPlayList} handleRemove={handleRemove} handleAddToSpotify={handleAddToSpotify}/>
     
  </div>
  )

}

export default MusicApp;