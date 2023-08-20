import {TrackList} from './TrackList';

const SearchResults = (handleAdd,  handleRemove, searchResults, yourPlayList) => {


 return (
  <div>
    {/* Searched list */}
    <TrackList searchResults={searchResults} handleAdd={handleAdd} />
    {/* New play list */}
    <TrackList handleRemove={handleRemove} yourPlayList={yourPlayList} />
  </div>
 )
  
} 

export default SearchResults;