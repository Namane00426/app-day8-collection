import {TrackList} from './TrackList';

const SearchResults = (handleAdd,  searchResults) => {


 return (
  <div>
    <TrackList searchResults={searchResults} handleAdd={handleAdd} />
    {/* <TrackList handleRemove={handleRemove} yourPlayList={yourPlayList} /> */}
  </div>
 )
  
} 

export default SearchResults;