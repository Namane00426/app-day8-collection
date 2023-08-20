import { 
  useParams
 } from 'react-router-dom/cjs/react-router-dom.min';


import {posts} from './postsData';
 
const  Post = () =>  {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  return (
    <div className='w-1/2 bg-yellow-100 pt-5 divide-y divide-black-500'>
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p>{post.content}</p>
    </div>
    
  )
}

export default Post;