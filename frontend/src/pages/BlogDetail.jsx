import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiInstance } from "../axios";
import CommentSection from "../components/CommentSection";
import Header from "../components/Header";
import { FaRegHeart, FaHeart } from "react-icons/fa";  // Importing the like and unlike icons
import profilePlaceholder from "../assets/user.png";
import LikeButton from "../components/LikeButton";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false); // State to track like status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await apiInstance.get(`/blog/${id}`);
        setBlog(response.data.blog);
        setLiked(response.data.blog.likes.includes(response.data.userId)); 
        setLoading(false);
      } catch (error) {
        setError("Error fetching blog details. Please try again later.");
        setLoading(false);
        console.error("Error fetching blog detail:", error.response ? error.response.data : error.message);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const handleLike = async () => {
    try {
      const response = await apiInstance.post(`/blog/${id}/like`);
      setLiked(!liked); // Toggle the like state
      setBlog((prevBlog) => ({
        ...prevBlog,
        likes: response.data.likes,
      }));
    } catch (error) {
      console.error("Error liking/unliking blog:", error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-gray-500">Loading blog...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 bg-[#C9E6F0] lg:px-8 py-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold leading-tight text-[#000B58] mb-6">{blog.title}</h1>
          <div className="flex items-center text-sm text-black-900 mb-6">
            <img
              src={profilePlaceholder}
              alt={blog.author?.fullname || "Author"}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span>
              {blog.author ? blog.author.fullname : "Anonymous"} -{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>
          <img
            src={`http://localhost:5000${blog.image || "/uploads/default-image.jpg"}`}
            alt={blog.title}
            className="w-full h-auto object-cover rounded-md shadow-lg mb-9 bg-[#Ffb200]"
          />
          <div className="prose lg:prose-xl text-black-900 leading-relaxed">
            {blog.content}
          </div>
        </article>


        <LikeButton 
          liked={liked} 
          handleLike={handleLike}
          blog={blog} 
        />


        <hr className="my-8" />
        <CommentSection blogId={id} />
      </div>
    </div>
  );
};

export default BlogDetail;
