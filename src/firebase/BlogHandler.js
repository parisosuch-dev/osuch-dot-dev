// firebase imports
import { db, storage } from "./Firebase";
import { collection, addDoc, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export const postBlog = async (title, description) => {
    // add a blog post to firebase
    try {
        let id = null;
        await addDoc(collection(db, "blogs"), {
            title: title,
            description: description,
            date: Date.now(),
            updated: null
        }).then((docRef) => {
            console.log("Blogs document written with ID: ", docRef.id);
            id = docRef.id;
        });
        return id;

    } catch (error) {
        console.log("Error: Blog.postBlog() - " + error)
    }
}

export const getBlogs = async () => {
    const docsRef = collection(db, "blogs");
    const q = query(docsRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    const blogs = []
    snapshot.forEach((doc) => {
        const blog = doc.data();
        blog.id = doc.id;
        blogs.push(blog);
    });
    return blogs;
}

export const getBlog = async (id) => {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

// returns the text from the HTTP response
export const getBlogMarkdown = async (id) => {
    return new Promise((resolve, reject) => {
        const blogPath = `blogs/${id}.md`
        getDownloadURL(ref(storage, blogPath)).then((url) => {
            fetch(url).then((res) => {
                res.text().then((text) => {
                    resolve(text);
                });
            }).catch((e) => {
                reject(e);
            });
        });
    });
}