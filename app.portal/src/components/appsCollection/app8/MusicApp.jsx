import {useState, useEffect} from 'react';
//import {SearchResults} from './SearchResults';
import {BsMusicNoteList, BsTrash } from 'react-icons/bs';
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
    const [newTitle, setNewTitle] = useState('My list');
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
  return response.json()
}).then(jsonResponse=> {
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

  const handleReset = () => {
    setSearchKey('');
    setTracks([]);
  }


  return (
  <div className='flex-box'> 
    <h2 className='mb-1 text-xl'><BsMusicNoteList className='inline-block align-center mr-2 mt-0'/>Music App</h2>
    <p className='font-light mb-3'>Spotify music search</p>
    <div className='mb-4'>
    {token? (
        <form onSubmit={searchArtists} >
          <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder='Keyword' className='padding-1 text-center shadow-md'/>
          <button className='bg-green-500 text-white font-bold rounded-md shadow-lg p-2 mt-2 ml-2 hover:bg-green-700 hover:text-white hover:font-bold hover:shadow-md' type={"submit"}>Search</button>
        </form>
      ) : <p></p>}
       { !token ? (<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}  className='font-bold text-green-500 hover:text-gray-700 underline'>Login to Spotify</a>) : <button className='text-sm text-gray-500 hover:text-gray-700 hover:underline ' onClick={logout}>Logout</button>}
      </div>
      
      <div className='flex justify-evenly'>
      <div className='w-2/5 '>
      <ul className='text-center divide-y divide-gray-400'>
        <div className='inline-flex'>
        <h3 className='text-lx font-bold text-green-500 mb-2'>Search results</h3>
        <button className='ml-1 mb-1 text-gray-400 hover:text-gray-700' onClick={() => handleReset()}><BsTrash /></button>
        </div>
        { tracks ? (tracks.map(track => {
          return (
          <li key={track.id} ><span className='font-medium leading-tight '>{track.name}</span> <br/>by {track.artists[0].name} 
          <button onClick={() => handleAdd([track.id, track.name, track.artists[0].name])}><BiMessageSquareAdd className='ml-2 text-gray-400 align-center hover:text-blue-500 ' /></button></li>)
        })) : (<p>no data</p>)
        }
      </ul>
      </div>
      <div className='w-2/5 '>
        {newTitle ? (<div className='flex justify-center' ><h3 className='text-lx font-bold mb-2'>{newTitle}</h3><button onClick={() => setNewTitle('')}><BiEditAlt className='ml-1 text-gray-400 hover:text-gray-700 mb-1'/></button></div>) : (<div className='flex justify-center bg-white border-2'>
        <input  className='rounded-md text-center' type='text'  placeholder='Set new title -> -> save' onChange={(e) => setValue(e.target.value)}/><button onClick={() => setNewTitle(value)}><BiSave className='ml-3 text-lg text-gray-400 hover:text-gray-700' /></button></div>)}
      
      <ul className='text-center divide-y divide-gray-400'>
      { yourPlayList ? (yourPlayList.map(list => {
          return (
          <li key={list.id} ><span className='font-medium leading-tight '>{list.name}</span> <br/>by {list.artistName} 
          <button onClick={() => handleRemove(list.id)}><MdRemoveCircle className='ml-2 text-gray-400 align-center hover:text-pink-500 ' /></button></li>)
        })) : (<p></p>)
        }
        </ul>
      </div>

    </div>
  </div>
  )

}

export default MusicApp;