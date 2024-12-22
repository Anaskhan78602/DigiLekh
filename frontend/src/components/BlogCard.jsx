import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card"; // Import your 3D card components

const BlogCard = ({ blog }) => {
  // Construct the image URL
  const imageUrl = blog.image
    ? `http://localhost:5000${blog.image}` // Image path from backend
    : `http://localhost:5000/uploads/default-image.jpg`; // Fallback image

  // Check if the author is populated
  const authorName = blog.author ? blog.author.fullname || blog.author.username : "Anonymous";

  return (
    <CardContainer containerClassName="group rounded-lg">
      <CardBody className="rounded-lg shadow-lg bg-white w-80 h-[320px] flex flex-col">
        {/* Image Section */}
        <div className="h-[60%] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={blog.title || "Blog image"}
          />
        </div>

        {/* Yellow Section */}
        <div className="h-[40%] bg-[#001F3F] p-4 flex flex-col justify-start">
          <h3 className="text-lg  font-semibold text-[#78B7D0] ">
            {blog.title || "Untitled Blog"}
          </h3>
          <div className="p-1 mt-3">
          <p className="text-[#FF8225] text-sm">Posted by {authorName}</p>
          <Link
            to={`/api/blog/${blog._id}`}
            className="text-white hover:text-[#FF8225] underline"
          >
            Read more
          </Link>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default BlogCard;
