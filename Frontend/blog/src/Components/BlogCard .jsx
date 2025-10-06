import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, imgurl, title, autorname, date, category, onDelete }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Edit post:", _id);
  };

  return (
    <div className="relative">
      <Link to={`/singleblog/${_id}`} className="block">
        <div className="bg-white rounded-xl shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition p-4 h-[400px] flex flex-col justify-between">
          <img src={imgurl} alt={title} className="h-48 w-full object-cover rounded-lg" />
          <div>
            <h2 className="text-xl font-semibold mt-3 line-clamp-2">{title} · {category}</h2>
            <p className="text-sm text-gray-500">{autorname} • {date}</p>
          </div>
          <button className="mt-3 w-40 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-slate-600">
            View Details
          </button>
        </div>
      </Link>

      <div className="absolute bottom-4 right-4 flex gap-4 mt-3">
        {/* <span onClick={handleEdit} className="text-lg cursor-pointer hover:scale-110" title="Edit">🖉</span> */}
        <span onClick={(e) => { e.preventDefault(); onDelete(_id); }} className="text-lg cursor-pointer hover:scale-110" title="Delete">🗑</span>
      </div>
    </div>
  );
};

export default BlogCard;
