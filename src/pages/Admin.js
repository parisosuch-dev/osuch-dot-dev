import { useState, useEffect } from "react";
// firebase
import { storage } from "../firebase/Firebase";
import { postBlog } from "../firebase/BlogHandler";
import { uploadBytes, ref } from "firebase/storage";
import { auth } from "../firebase/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Admin = () => {
    // view for admin panel
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    // handler for auth
    const [isAuth, setAuth] = useState(false);
    // view for login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("Signed in as:");
            console.log(userCredential.user);
            setAuth(true);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((authObj => {
            if (authObj) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        }));
    });

    return (
        <div className="min-h-screen bg-gray-100 text-osuch-black">
            {isAuth ?
                <div className="h-screen flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-3xl font-medium">Add Blog</h1>
                    <input
                        type="text"
                        placeholder="title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        className="border border-black p-2 rounded-md w-1/3"
                        value={title}
                    />
                    <input
                        type="text"
                        placeholder="description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        className="border border-black p-2 rounded-md w-1/3"
                        value={description}
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
                </div> :
                <div className="h-screen flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-3xl font-medium">Sign In</h1>
                    <input
                        type="email"
                        placeholder="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="border border-black p-2 rounded-md w-1/6"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="border border-black p-2 rounded-md w-1/6"
                    />
                    <button
                        className="bg-osuch-black text-white pl-8 pr-8 pt-2 pb-2 rounded-lg"
                        onClick={handleSignIn}
                    >submit</button>
                </div>}
        </div>
    );
}