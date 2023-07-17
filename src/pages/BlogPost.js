import { useParams } from "react-router"
import { useState, useEffect } from "react"
// firebase 
import { getBlog, getBlogMarkdown } from "../firebase/BlogHandler";
// markdown to jsx
import Markdown from "markdown-to-jsx";

export const BlogPost = () => {
    const params = useParams();
    const [blog, setBlog] = useState({});
    const [content, setContent] = useState("");

    useEffect(() => {
        getBlog(params.id).then((data) => {
            console.log(data);
            setBlog(data);
        });
        getBlogMarkdown(params.id).then((res) => {
            setContent(res);
        });
    }, [params.id]);

    return (
        <div>
            <p>This is a blog post with id: {params.id}</p>
            <p>The title is {blog.title}</p>
            <p>The description is {blog.description}</p>
            <Markdown>{content}</Markdown>
        </div>
    )
}