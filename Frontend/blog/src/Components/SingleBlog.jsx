
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLoaderData, Form } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import BlogCard from './BlogCard ';



function SingleBlog() {
  const { id } = useParams();
  const data = useLoaderData();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = data.find((e) => String(e._id) === String(id));
    setBlog(found);
  }, [id, data]);
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {blog ? (
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <img src={blog.imgurl} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-4">{blog.autorname} • {blog.date}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">{blog.content}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Blog not found.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SingleBlog;



// function SingleBlog() {
//   const { id } = useParams(); // Get the ID from URL
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         console.log('Fetching post with ID:', id); // Debug log
        
//         const response = await axios.get(`http://localhost:3000/poste/${id}`);
//         console.log('Received post data:', response.data); // Debug log
        
//         setPost(response.data);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching post:', err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchPost();
//     }
//   }, [id]);

//   // Loading State
//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
//           <div className="text-center">
//             <div className="inline-block w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//             <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Loading article...</p>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   // Error State
//   if (error || !post) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
//           <div className="text-center px-4">
//             <div className="text-6xl mb-4">😕</div>
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Article Not Found</h2>
//             <p className="text-gray-600 dark:text-gray-400 mb-6">
//               {error ? `Error: ${error}` : 'The article you are looking for does not exist.'}
//             </p>
//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => navigate('/categories')}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300"
//               >
//                 Back to Blog
//               </button>
//               <button
//                 onClick={() => navigate(-1)}
//                 className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
//               >
//                 Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//         <div className="max-w-5xl mx-auto px-4 py-12">
          
//           {/* Back Button */}
//           <button
//             onClick={() => navigate(-1)}
//             className="mb-8 flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//             </svg>
//             <span className="font-medium">Back to Articles</span>
//           </button>

//           {/* Article Container */}
//           <article className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            
//             {/* Featured Image */}
//             {post.imgurl && (
//               <div className="relative h-96 overflow-hidden">
//                 <img 
//                   src={post.imgurl} 
//                   alt={post.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
//                 {/* Category Badge on Image */}
//                 <div className="absolute top-6 left-6">
//                   <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
//                     {post.category}
//                   </span>
//                 </div>
//               </div>
//             )}

//             {/* Article Content */}
//             <div className="p-8 md:p-12">
              
//               {/* Title */}
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//                 {post.title}
//               </h1>

//               {/* Meta Information */}
//               <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200 dark:border-gray-700">
                
//                 {/* Author */}
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                     {post.autorname?.charAt(0).toUpperCase() || 'A'}
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 dark:text-gray-400">Written by</div>
//                     <div className="font-semibold text-gray-900 dark:text-white">{post.autorname || 'Anonymous'}</div>
//                   </div>
//                 </div>

//                 {/* Date */}
//                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                   </svg>
//                   <span className="text-sm">
//                     {post.date ? new Date(post.date).toLocaleDateString('en-US', { 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     }) : 'Date not available'}
//                   </span>
//                 </div>

//                 {/* Reading Time */}
//                 <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span className="text-sm">
//                     {post.content ? Math.ceil(post.content.split(' ').length / 200) : 0} min read
//                   </span>
//                 </div>
//               </div>

//               {/* Article Content */}
//               <div className="prose prose-lg dark:prose-invert max-w-none">
//                 <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
//                   {post.content || 'No content available.'}
//                 </div>
//               </div>

//               {/* Tags Section */}
//               <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//                 <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">TAGS</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {['Blog', post.category, 'Article'].filter(Boolean).map((tag, index) => (
//                     <span 
//                       key={index}
//                       className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
//                     >
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Share Section */}
//               <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
//                 <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">SHARE THIS ARTICLE</h3>
//                 <div className="flex space-x-3">
//                   {[
//                     { name: 'Twitter', color: 'hover:bg-blue-400', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
//                     { name: 'Facebook', color: 'hover:bg-blue-600', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
//                     { name: 'LinkedIn', color: 'hover:bg-blue-700', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
//                     { name: 'Copy Link', color: 'hover:bg-gray-600', icon: 'M13.544 10.456a4.368 4.368 0 00-6.176 0l-3.089 3.088a4.367 4.367 0 106.177 6.177L12.544 17.633' }
//                   ].map((social, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         if (social.name === 'Copy Link') {
//                           navigator.clipboard.writeText(window.location.href);
//                           alert('Link copied to clipboard!');
//                         }
//                       }}
//                       className={`w-11 h-11 bg-gray-100 dark:bg-gray-700 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group`}
//                       aria-label={`Share on ${social.name}`}
//                       title={social.name}
//                     >
//                       <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
//                         <path d={social.icon} />
//                       </svg>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Buttons */}
//               <div className="mt-12 flex flex-col sm:flex-row gap-4">
//                 <button
//                   onClick={() => navigate('/categories')}
//                   className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 text-center"
//                 >
//                   View All Articles
//                 </button>
//                 <button
//                   onClick={() => navigate(-1)}
//                   className="flex-1 px-6 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 text-center"
//                 >
//                   Go Back
//                 </button>
//               </div>
//             </div>
//           </article>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default SingleBlog;