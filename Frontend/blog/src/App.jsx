import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Navbar from './Components/Navbar'
import BlogCard from './Components/BlogCard '
import Home from './Components/Home'
import Footer from './Components/Footer'
import axios from 'axios'
import AboutUS from './Components/AboutUS'
import ContactUs from './Components/ContactUs'
import BlogPoste from './Components/BlogPoste'
import SingleBlog from './Components/SingleBlog'
import CreatePost from './Components/CreatePost'


const getAllPoste = async (req, res) => {
  let allPoste = []
  await axios.get("http://localhost:3000/")
    .then(res => {
      allPoste = res.data

    })
  return allPoste

}

const router = createBrowserRouter([
  { path: "/", element: <Home />, loader: getAllPoste },
  { path: "/home", element: <Home />, loader: getAllPoste },
  { path: "/blogs", element: <BlogPoste />, loader: getAllPoste },
  { path: "/singleblog/:id", element: <SingleBlog />, loader: getAllPoste },
  { path: "/create-post", element: <CreatePost /> },
  { path: "/about", element: <AboutUS /> },
  { path: "/contact", element: <ContactUs /> },



])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      {/* <CreatePost/>
  */}
    </>
  )
}

export default App
