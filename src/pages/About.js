import Nav from "../components/Nav";

export default function About() {
    return (
        <div className='sm:h-screen h-fit bg-osuch-black'>
            <Nav />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <h1 className="text-white font-black sm:text-8xl text-3xl"><span className="text-osuch-primary">ABOUT ME</span>.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
                </div>
            </div>
        </div>
    );
};