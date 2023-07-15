// firebase imports
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

export const postBlog = async (title, description) => {
    // add a blog post to firebase
    try {
        const docRef = await addDoc(collection(db, "blogs"), {
            title: title,
            description: description,
            date: Date.now(),
            updated: null
        });
        console.log("Blogs document written with ID: ", docRef.id);
    } catch (error) {
        console.log("Error: Blog.postBlog() - "+ error)
    }
}