import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className='sm:h-screen h-fit bg-osuch-black'>
            <Nav />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <h1 className="text-white font-black sm:text-8xl text-3xl"><span className="text-osuch-primary">PORTFOLIO</span>.</h1>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">Project Title</h2>
                    <h3 className="sm:text-4xl text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <Link to='/contact' className="bg-osuch-primary text-white p-3 rounded-xl sm:w-2/12 w-1/4 text-center sm:text-2xl text-sm font-medium">more</Link>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">Project Title</h2>
                    <h3 className="sm:text-4xl text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <Link to='/contact' className="bg-osuch-primary text-white p-3 rounded-xl sm:w-2/12 w-1/4 text-center sm:text-2xl text-sm font-medium">more</Link>
                </div>
            </div>
        </div>
    );
};