import React from "react"
import BlogPost from "../components/BlogPost"

const BlogPosts = ({ title, content }) => {
    return (
        <main>
                <BlogPost title="Welcome to Berkeley Blog" content="This is your first post on the Berkeley Blog." />
                {/* Add more <BlogPost /> components as needed */}
        </main>
    );
};
export default BlogPosts;