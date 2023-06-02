import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts'
import Post from './pages/Post'
import Create from './pages/Create'
import Register from './pages/Register'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Login from './pages/Login';
import { UserContextProvider } from './UserContext.jsx';
import EditPost from './pages/EditPost';


function App() {

  const Layout = () => {
    return (
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
      )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/posts",
          element: <Posts/>
        },
        {
          path: "/post/:id",
          element: <Post/>
        },
        {
          path: "/create",
          element: <Create/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/edit/:id",
          element: <EditPost/>
        }
      ]
    }
  ])
  

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
    
  );
}

export default App;
