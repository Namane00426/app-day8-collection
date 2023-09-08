import {BsMusicNoteList} from 'react-icons/bs';

function SearchBar({token, searchArtists, searchKey, authUrl,setSearchKey, logout}){
  return (
    <> 
    <h2 className='mb-1 text-xl'><BsMusicNoteList className='inline-block align-center mr-2 mt-0'/>Music App</h2>
    <p className='font-light mb-3'>Spotify music search</p>
    <div className='mb-4'>
    {token? (
        <form onSubmit={searchArtists} >
          <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder='Keyword' className='padding-1 text-center shadow-md'/>
          <button className='bg-green-500 text-white font-bold rounded-md shadow-lg p-2 mt-2 ml-2 hover:bg-green-700 hover:text-white hover:font-bold hover:shadow-md' type={"submit"}>Search</button>
        </form>
      ) : <p></p>}
       { !token ? (<a href={authUrl} className='font-bold text-green-500 hover:text-gray-700 underline'>Login to Spotify</a>) : <button className='text-sm text-gray-500 hover:text-gray-700 hover:underline ' onClick={logout}>Logout</button>}
      </div>
    </>
  )
}

export default SearchBar;