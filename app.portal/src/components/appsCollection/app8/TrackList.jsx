import {Track} from './Track';


export const TrackList = (handleAdd, { searchResults}) => {


  return (
    <>
   {searchResults.map(track => <Track key={track.id} handleAdd={handleAdd} track={track} />)}
   </>
  )
  
}

export default TrackList;