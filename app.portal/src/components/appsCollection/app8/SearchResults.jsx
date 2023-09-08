import {BsTrash } from 'react-icons/bs';
import {BiEditAlt, BiSave} from 'react-icons/bi';
import {MdRemoveCircle} from 'react-icons/Md';
import TrackList from './TrackList';

function SearchResults({handleReset, handleAdd, newTitle, setNewTitle, value, setValue, tracks, yourPlayList, handleRemove, handleAddToSpotify}) {
  return (
    <div className='flex justify-evenly'>
      <div className='w-2/5 '>
      <div className='inline-flex'>
        <h3 className='text-lx font-bold text-green-500 mb-2'>Search results</h3>
        <button className='ml-1 mb-1 text-gray-400 hover:text-gray-700' onClick={() => handleReset()}><BsTrash /></button>
        </div>
        <ul className='text-center divide-y divide-gray-400'>
        <TrackList tracks={tracks} handleAdd={handleAdd}/>
        </ul>

      </div>
      <div className='w-2/5 '>
        {newTitle ? (<div className='flex justify-center' ><h3 className='text-lx font-bold mb-2'>{newTitle}</h3><button onClick={() => setNewTitle('')}><BiEditAlt className='ml-1 text-gray-400 hover:text-gray-700 mb-1'/></button></div>) : (<div className='flex justify-center bg-white border-2'>
        <input  className='rounded-md text-center' type='text'  placeholder='Set new title -> -> save' onChange={(e) => setValue(e.target.value)}/><button onClick={() => setNewTitle(value)}><BiSave className='ml-3 text-lg text-gray-400 hover:text-gray-700' /></button></div>)}
      
      {/**search results  playl*/}
      <ul className='text-center divide-y divide-gray-400'>
      { yourPlayList ? (yourPlayList.map(list => {
          return (
          <li key={list.id} ><span className='font-medium leading-tight '>{list.name}</span> <br/>by {list.artistName} 
          <button onClick={() => handleRemove(list.id)}><MdRemoveCircle className='ml-2 text-gray-400 align-center hover:text-pink-500 ' /></button></li>)
        })) : (<p></p>)
        }
        </ul>
        <div>
          { yourPlayList[0] ? (<button className='mx-auto mt-4 border-2 p-1 border-gray-400 hover:text-green-500 leading-tight hover:border-green-400 flex ' onClick={handleAddToSpotify}> Add to Spotify</button>) : (<p></p>)}
        </div>
      </div>
      </div>
  )
}

export default SearchResults;