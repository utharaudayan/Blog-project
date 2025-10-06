import React, { useState } from "react";
import BlogCard from "../Components/BlogCard ";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useLoaderData } from 'react-router-dom'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("Latest");

    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim() !== "") {
            setSubscribed(true);
            // You can add API call here to save the email
        }
    };

    const posts = useLoaderData()
    console.log(posts)

    const categories = ["Latest", "Tutorial", "Development", "Projects"];

    const filteredPosts = selectedCategory === "Latest"
        ? posts
        : posts.filter(post =>
            post.category &&
            post.category.toLowerCase() === selectedCategory.toLowerCase()
        );

    return (
        <>

            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-black-50 to-white-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 py-12">

                    {/* Hero Section with Enhanced Design bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white */}
                    <div className="relative overflow-hidden  bg-gradient-to-r from-slate-950 to-white-300 text-white rounded-3xl shadow-2xl mb-16">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-pulse">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
                                <span className="text-sm font-medium">New articles every week</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Welcome to My Blog
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                                Discover insights, tutorials, and stories that inspire innovation
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link to="/blogs">
                                    <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                        Start Reading
                                    </button>
                                </Link>

                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 max-w-2xl mx-auto">
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold">50+</div>
                                    <div className="text-sm md:text-base text-white/80 mt-1">Articles</div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold">10K+</div>
                                    <div className="text-sm md:text-base text-white/80 mt-1">Readers</div>
                                </div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-bold">5+</div>
                                    <div className="text-sm md:text-base text-white/80 mt-1">Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter Section */}
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Latest Articles
                            </h2>
                            <div className="hidden md:flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <span className="mr-2">📚</span>
                                {filteredPosts.length} posts found
                            </div>
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category
                                        ? "bg-gradient-to-r from-zinc-600 to-stone-900 text-white shadow-lg shadow-purple-500/50"
                                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                    </div>

                    {/* Blog Cards Grid with Animation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.slice(-3).reverse().map((post, index) => (
                            <div
                                key={post._id || index}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <marquee behavior="scroll" direction="left" scrollamount="5" style={{
                                    color:"red",
                                    fontWeight:"bold",
                                    background:"gray"
                                }}>Poste Only Can Delete In The Blog Section</marquee>
                                <BlogCard {...post} />
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-20 bg-gradient-to-r from-slate-950 to-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl animate-fade-in-up">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h2>
                            <p className="text-lg text-white/90 mb-8">
                                Subscribe to our newsletter and get the latest articles delivered to your inbox
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                {!subscribed ? (
                                    <>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 flex-1 max-w-md transition-all duration-300"
                                        />
                                        <button
                                            onClick={handleSubscribe}
                                            className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                                        >
                                            Subscribe
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex items-center gap-3 bg-green-600 px-6 py-4 rounded-xl text-white font-semibold shadow-lg animate-bounce-in">
                                      <span className="text-2xl">✅</span>

                                        Subscribed!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Featured Topics */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Explore Topics
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: "💻", name: "Development", color: "from-gray-400 to-gray-600" },
                                { icon: "🎨", name: "Design", color: "from-zinc-500 to-zinc-800" },
                                { icon: "🚀", name: "Projects", color: "from-stone-500 to-stone-300" },
                                { icon: "📚", name: "Tutorials", color: "from-slate-900 to-slate-400" },
                            ].map((topic, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${topic.color} rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}
                                >
                                    <div className="text-4xl mb-3">{topic.icon}</div>
                                    <div className="font-semibold text-lg">{topic.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Add custom animations */}
                <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>

            </div>
            <Footer />
        </>
    );
};

export default Home;