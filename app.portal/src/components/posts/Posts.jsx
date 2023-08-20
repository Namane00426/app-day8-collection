import { Link,Route, useRouteMatch} from "react-router-dom/cjs/react-router-dom"
import Post from  './Post';
import posts from './postsData';
import {BsPen} from 'react-icons/bs'

const Posts = () =>  {
  //let history = useHistory();
  const {path, url } = useRouteMatch();

  //console.log(useRouteMatch);
  //console.log(useLocation);
  //console.log(history);
  /*const query = new URLSearchParams(useLocation().search);
  console.log(query.get('sort'));*/

  return (
    <div className='mx-auto w-full mt-5 text-center'>
      <h2 className="text-xl text-purple-500 mb-10" ><BsPen className="inline-block align-center mr-2 "/>Post list</h2>
      <div className="flex justify-evenly w-3/5 mx-auto">
      <ul className="w-1/3 divide-y divide-gray-200 mb-10">
        {posts.map((post) => (
          <li key={post.id} className="divide-y divide-gray-200 mb-10">
            <Link to={{
              pathname: `${url}/${post.id}`,
              search: '?sort=desc',
            }}
            >{post.title}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`} >
        <Post/>
      </Route>
      </div>
    </div>
    
  )
}

export default Posts;
