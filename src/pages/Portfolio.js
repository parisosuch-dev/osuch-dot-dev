import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className='min-h-screen bg-osuch-black'>
            <Nav />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <h1 className="text-white font-black sm:text-8xl text-3xl"><span className="text-osuch-primary">PORTFOLIO</span>.</h1>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">QC.py: A Quantum Computing Library for Python</h2>
                    <h3 className="sm:text-4xl text-md text-white">QCpy is an open source project for simulations in quantum computing. The library is written for Python; utilizing Numpy for computations. This project was awarded the Koret Foundation Scholarship,  presented at SIGCSE 2023 in Toronto, Canada, and an abstract was uploaded to the ACM digital library.</h3>
                    <Link to='https://github.com/QCpython/QCpy' className="sm:border-4 border-2 border-osuch-primary hover:bg-osuch-primary text-white p-3 rounded-xl sm:w-2/12 w-1/4 text-center sm:text-2xl text-sm font-medium">repo</Link>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">Scribe: Discord Logging API</h2>
                    <h3 className="sm:text-4xl text-md text-white">Scribe is a REST API created using Django and the Django REST Framwork in Python. The API contains multiple endpoints to serve the client information about their server.</h3>
                    <Link to='https://github.com/parisosuch-dev/Scribe' className="sm:border-4 border-2 border-osuch-primary hover:bg-osuch-primary text-white p-3 rounded-xl sm:w-2/12 w-1/4 text-center sm:text-2xl text-sm font-medium">repo</Link>
                </div>
            </div>
        </div>
    );
};