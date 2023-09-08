import Track from './Track'

function TrackList({tracks, handleAdd}){

  return (
        <>
        { tracks ? (tracks.map(track => {
          return (
          <li key={track.id} >
            <Track track={track} handleAdd={handleAdd}/>
          </li>)
        })) : (<p>no data</p>)}
        </>
  )
}

export default TrackList;