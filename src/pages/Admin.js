import { useState } from "react";
// firebase
import { storage } from "../firebase/Firebase";
import { postBlog } from "../firebase/BlogHandler";
import { uploadBytes, ref } from "firebase/storage";

export const Admin = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    const handleUpload = async () => {
        // upload the blog to the firestore
        postBlog(title, description).then((id) => {
            if (file == null) {
                alert("add file for upload");
                return;
            }
            // get the id for the doc to name the file after the id
            const fileRef = ref(storage, `blogs/${id}.md`);
            uploadBytes(fileRef, file).then(() => {
                alert("blog uploaded");
            }).catch((e) => {
                console.log(e);
            });
        });
        
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-2 text-osuch-black">
            <h1 className="text-5xl font-semibold">Admin Panel</h1>
            <h2 className="text-3xl font-medium">Add Blog</h2>
            <input
                type="text"
                placeholder="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                className="border border-black p-2 rounded-md w-1/3"
            />
            <input
                type="text"
                placeholder="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                className="border border-black p-2 rounded-md w-1/3"
            />
            <input
                type="file"
                className="w-1/3"
                onChange={(event) => {
                    setFile(event.target.files[0]);
                }}
            />
            <button
                className="bg-osuch-black text-white pl-8 pr-8 pt-2 pb-2 rounded-lg"
                onClick={handleUpload}
            >submit</button>
        </div>
    );
}