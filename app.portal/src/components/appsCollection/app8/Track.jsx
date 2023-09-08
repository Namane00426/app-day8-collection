import {BiMessageSquareAdd} from 'react-icons/bi';

function Track({handleAdd, track}) {

return (
    < >
      <span className='font-medium leading-tight '>{track.name}</span> <br/>by {track.artists[0].name} 

    <button onClick={() => handleAdd([track.id, track.name, track.artists[0].name])}><BiMessageSquareAdd className='ml-2 text-gray-400 align-center hover:text-blue-500 ' /></button>
    </>
    )
}

export default Track;