import { BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Posts from './components/posts/Posts.jsx'
import AppContainer from './components/AppContainer';


function App() {
 
  
 return(
    <BrowserRouter>
    <nav className="flex w-full items-center justify-center bg-[#FBFBFB] px-10 py-2 align-middle text-neutral-500 shadow-lg "
  >
           <div className='ml-2'>
            <h3 className='text-xl text-purple-800' >
              <NavLink activeClassName="active" exact to='/' >My React Apps</NavLink>
                    </h3>
          </div>
     
    <div>
      
        {/* Left navigation links*/}
          <ul className="flex flex-row list-style-none mr-auto pl-10"
        >
            <li className="mb-0 pl-0 pr-5 text-neutral-500 transition duration-200 hover:text-purple-900 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
          >
              <NavLink to='/myApps' className={({isActive}) => 
            isActive ? "text-neutral-500" : "" }>My apps</NavLink>
            </li>
            <li className="mb-0 pl-0 pr-5 text-neutral-500 transition duration-200 hover:text-purple-900 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
          >
              <NavLink to='/about' className={({isActive}) => 
            isActive ? "text-neutral-500" : "" }>About</NavLink>
            </li>
            <li className="mb-0 pl-0 pr-5 text-neutral-500 transition duration-200 hover:text-purple-900 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
          >
              <NavLink to='/contact' className={({isActive}) => 
            isActive ? "text-neutral-500" : "" }>Contact</NavLink>
            </li>
            <li className="mb-0 pl-0 pr-5 text-neutral-500 transition duration-200 hover:text-purple-900 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
          >
            <NavLink to='/posts' className={({isActive}) => 
            isActive ? "text-neutral-500" : "" }>Posts</NavLink>
            </li>
          </ul>
      </div>
    </nav>
   
    <Switch>
      <Route exact path="/" >
      <header className='text-black-500 mt-5 text-xl text-center'>
      <h1>My Apps</h1>
      </header>
        <Home />
      </Route >
      <Route path="/myApps" render={() => <AppContainer />} />
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/contact"  >
        <Contact />
      </Route>
      <Route path="/posts" render={()=> <Posts />} />
      <Route  >
        <NotFound />
      </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

function Home() {
  return (
    <h2 className='text-center'>Home</h2>
  )
}

function NotFound() {
  return <h2 className='text-center'>Not Found Page</h2>;
}

export default App;