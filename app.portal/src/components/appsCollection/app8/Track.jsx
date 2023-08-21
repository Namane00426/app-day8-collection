

export const Track = (handleAdd,  track) => {

   return (
     <>
     <div> 
     <li key={track[0]}> 
     <h3>{track[1]} by `&quot;` {track[2]}`&quot;` from Album {track[3]}</h3> 
     </li>
     <button onClick={() => handleAdd(track)}> + </button>
   </div> 

   {/* <div>
       <p>{yourPlayList}</p>
        <li key={yourPlayList[0]}><h3>{yourPlayList[1]} by `&quot;`{yourPlayList[2]}`&quot;`</h3></li><button onClick={() => handleRemove(yourPlayList[0])}> - </button>
   </div> */}
   </>
   )

 }

 export default Track;