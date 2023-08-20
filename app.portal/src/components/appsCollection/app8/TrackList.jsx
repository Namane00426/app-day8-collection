import Track from './Track'


const Tracklist = (handleAdd,  handleRemove, searchResults, yourPlayList) => {

  if(searchResults && handleAdd ) {
    return <Track searchResults={searchResults} key={searchResults[0]} handleAdd={handleAdd} />

  } else if (yourPlayList && handleRemove) {
   return  <Track yourPlayList={yourPlayList} handleRemove={handleRemove}/>
  }  

}

export default Tracklist;