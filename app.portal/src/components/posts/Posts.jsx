import { Link,Route, useRouteMatch} from "react-router-dom/cjs/react-router-dom"
import Post from  './Post';
import posts from './postsData';


export const Posts = () =>  {
  //let history = useHistory();
  const {path, url } = useRouteMatch();

  //console.log(useRouteMatch);
  //console.log(useLocation);
  //console.log(history);
  /*const query = new URLSearchParams(useLocation().search);
  console.log(query.get('sort'));*/

  return (
    <div>
      <h2>Post list</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} >
            <Link to={{
              pathname: `${url}/${post.id}`,
              search: '?sort=desc',
            }}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`}>
        <Post/>
      </Route>
    </div>
    
  )
}

export default Posts;
