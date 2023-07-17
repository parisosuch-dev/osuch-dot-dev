import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// blog handlers
import { getBlogs, postBlog } from "../firebase/BlogHandler";

export const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs().then((res) => {
            setBlogs(res);
        }).catch((e) => {
            console.log(e);
        });
    });

    return (
        <div>
            <h1>Blogs</h1>
            {blogs.map((blog) => (
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <p>{blog.title}</p>
                    <p>{blog.description}</p>
                </Link>
            ))}
        </div>
    );
}