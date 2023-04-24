import Nav from "../components/Nav";
import me from '../assets/me.jpg'
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Landing() {
    return (
        <div className='min-h-screen bg-osuch-black'>
            <Nav />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <img className="object-cover sm:w-64 sm:h-64 w-24 h-24 rounded-full" src={me} alt="Rounded avatar"></img>
                    <h1 className="text-white font-black sm:text-8xl text-3xl">HI, I'M <span className="text-osuch-primary">PARIS</span>.</h1>
                    <h1 className="text-osuch-secondary sm:text-6xl text-2xl font-bold">I develop websites and design brands.</h1>
                    <h1 className="text-white sm:text-5xl text-md">I'm a computer science graduate with a passion for full stack web development. I create stunning websites and unique brand identities that capture your business's essence. Let's work together and bring your digital presence to life!</h1>
                    <div className="flex space-x-8 sm:w-1/3 py-4 items-center">
                        <Contact label="contact" mailto="mailto:parisosuch.dev@gmail.com" className="bg-osuch-primary text-white p-3 rounded-xl w-full text-center sm:text-2xl text-sm font-medium"/>
                        <Link to='/portfolio' className="bg-osuch-primary text-white p-3 rounded-xl w-full text-center sm:text-2xl text-sm font-medium">portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};  