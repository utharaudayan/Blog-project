import React, { useEffect } from 'react'
import BlogCard from './BlogCard '
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function BlogPoste() {
    //     const [poste,setposte]=useState([])
    //     useEffect(()=>{

    //     axios.get("http://localhost:3000/poste")
    //     .then((res)=>{
    // console.log(res.data)
    // setposte(res.data)
    //     }).catch((err)=>{
    // console.log(err)
    //     })
    //     },[])

    const initialPosts = useLoaderData();
    const [posts, setPosts] = useState(initialPosts);
    // const [delpost, setdelpost] = useState([])
    const handleDelete = async (_id) => {
  try {
    await axios.delete(`http://localhost:3000/${_id}`);
    setPosts((prev) => prev.filter((post) => post._id !== _id));
    console.log("delete success");
  } catch (error) {
    console.log("error deleting post", error.message);
  }
};

    // console.log(posts)
    return (
        <>
            <Navbar />
            <h2 className='flex justify-center text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6'>ALL BLOGS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {posts?.slice(-200).reverse().map((blog, index) => (
                    <BlogCard
                        key={index}
                        _id={blog._id}
                        title={blog.title}
                        category={blog.category}
                        date={blog.date}
                        autorname={blog.autorname}
                        content={blog.content}
                        imgurl={blog.imgurl}
                        onDelete={handleDelete}

                    />

                ))}

            </div>



            <Footer />
        </>
    )
}

export default BlogPoste