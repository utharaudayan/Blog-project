import React, { useState } from "react";
import axios from 'axios'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
  const [formData, setFormData] = useState({
    imgurl: "",
    title: "",
    autorname: "",
    date: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData(({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("New Post Data:", formData);
  //   // You can integrate axios.post here to send data to your backend
  // };


const navigate = useNavigate();



  const submitHandler=async(e)=>{
    console.log("click")
    e.preventDefault()
    const data=new FormData();
    data.append("title",formData.title)
    data.append("imgurl",formData.imgurl)
    data.append("autorname",formData.autorname)
    data.append("date",formData.date)
    data.append("content",formData.content)
    data.append("category",formData.category)

try {
  const res= await axios.post("http://localhost:3000/",formData)
  // navigate("/blogs"); // Redirect to blog list
  window.location.reload();
} catch (error) {
  console.log("error to create post",error)
  
}

  }

  return (
    <>
    
  
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-16 flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in-up"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create New Blog Post
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          type="text"
          name="autorname"
          placeholder="Author Name"
          value={formData.autorname}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Projects, Tutorial)"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <input
          type="text"
          name="imgurl"
          placeholder="Image URL"
          value={formData.imgurl}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        <textarea
          name="content"
          rows="5"
          placeholder="Post Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-slate-600 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-all duration-300"
        >
          Publish Post
        </button>
      </form>
    </div>
    <Footer/>
      </>
  );
};

export default CreatePost;
