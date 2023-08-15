import { 
  useParams
 } from 'react-router-dom/cjs/react-router-dom.min';


import {posts} from './postsData';
 
const  Post = () =>  {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
    
  )
}

export default Post;