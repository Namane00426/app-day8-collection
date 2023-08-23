import {useState, useEffect} from 'react';
//import {SearchResults} from './SearchResults';
import {BsMusicNoteList } from 'react-icons/bs';
import {BiMessageSquareAdd, BiEditAlt, BiSave} from 'react-icons/bi';
import {MdRemoveCircle} from 'react-icons/Md';

const MusicApp = () => {

    

    const CLIENT_ID = import.meta.env.VITE_MUSIC_APP_ID
    const REDIRECT_URI = 'http://localhost:5173/myApps/' 
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    const [token, setToken] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [tracks, setTracks] = useState([]);
    const [yourPlayList, setYourPlayList] = useState([]);
    const [newTitle, setNewTitle] = useState('Set new title here');
    const [value, setValue] = useState('');

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
  //console.log([jsonResponse.tracks])
  //console.log(jsonResponse.tracks.items[0].artists[0].name)
  let newList = [];
  jsonResponse.tracks.items.map(item => newList.push(item));
  setTracks(newList);
  
  return tracks;
})
.catch(error => console.error(error))
}


  function addToNewPlayList(arr){

  const newPlayList = [...yourPlayList, {
    "id": arr[0],
    "name": arr[1],
    "artistName": arr[2]
   }]

  const uniqueList = Array.from(new Map(newPlayList.map((list) => [list.id, list])).values())

   setYourPlayList(uniqueList);
  // console.log('playList', [yourPlayList])
   return yourPlayList;
 }

 function handleAdd(arr){
  console.log(arr);
  addToNewPlayList(arr);
  }

  const handleRemove = (id) => {
    const newPlaylist = yourPlayList.filter((list) => list.id !== id);
    setYourPlayList(newPlaylist);
    console.log(newPlaylist)
    return yourPlayList;
  }


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
      
      <div className='flex justify-evenly'>
      <div className='w-2/5'>
      <ul className='text-center divide-y divide-gray-400'>
        <h3 className='text-lx font-bold mb-2'>Search results</h3>
       
        { tracks ? (tracks.map(track => {
          return (
          <li key={track.id} ><span className='font-medium leading-tight '>{track.name}</span> <br/>by {track.artists[0].name} 
          <button onClick={() => handleAdd([track.id, track.name, track.artists[0].name])}><BiMessageSquareAdd className='ml-2 text-gray-400 align-center hover:text-blue-500 ' /></button></li>)
        })) : (<p>no data</p>)
        }
      </ul>
      </div>
      <div className='w-2/5'>
        {newTitle ? (<div className='flex justify-center' ><h3 className='text-lx font-bold mb-2'>{newTitle}</h3><button onClick={() => setNewTitle('')}><BiEditAlt className='ml-1'/></button></div>) : (<div className='flex justify-center bg-white border-2'>
        <input  type='text'  placeholder='Set new title -> -> save' onChange={(e) => setValue(e.target.value)}/><BiSave className='ml-1 mt-1' onClick={() => setNewTitle(value)}/></div>)}
      
      <ul className='text-center divide-y divide-gray-400'>
      { yourPlayList ? (yourPlayList.map(list => {
          return (
          <li key={list.id} ><span className='font-medium leading-tight '>{list.name}</span> <br/>by {list.artistName} 
          <button onClick={() => handleRemove(list.id)}><MdRemoveCircle className='ml-2 text-gray-400 align-center hover:text-pink-500 ' /></button></li>)
        })) : (<p></p>)
        }
        </ul>
      </div>

    {/* <div>
      <SearchResults searchResults={searchResults} handleAdd={handleAdd} yourPlayList={yourPlayList} handleRemove={handleRemove}/>
    </div> */}
    </div>
  </div>
  )

}

export default MusicApp;