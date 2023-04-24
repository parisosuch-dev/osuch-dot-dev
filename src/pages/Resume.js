import React from 'react';
import Navbar from '../components/Nav';

export default function Resume() {
    return (
        <div className='bg-osuch-black pb-2'>
            <Navbar />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <h1 className="text-white font-black sm:text-8xl text-3xl"><span className="text-osuch-primary">RESUME</span>.</h1>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">Skills</h2>
                    <div className='grid grid-cols-2 sm:gap-y-8 gap-y-2'>
                        <h3 className="sm:text-4xl text-md text-white font-medium">Languages & Tools //</h3>
                        <h4 className='sm:text-3xl text-sm text-white'>Python, C++, C, SQL, JavaScript, HTML5, CSS3, UNIX, Git</h4>
                        <h3 className="sm:text-4xl text-md text-white font-medium">Frameworks //</h3>
                        <h4 className='sm:text-3xl text-sm text-white'>Django, ReactJS, NodeJS, Tailwind, Drupal, SQLite3, RESTful APIs</h4>
                        <h3 className="sm:text-4xl text-md text-white font-medium">Libraries //</h3>
                        <h4 className='sm:text-3xl text-sm text-white'>Numpy, Pandas, Matplotlib, Keras, Tensorflow, Sci-Kit Learn, Beautiful Soup 4</h4>
                        <h3 className="sm:text-4xl text-md text-white font-medium">Etc //</h3>
                        <h4 className='sm:text-3xl text-sm text-white'>Comp. Vision, Machine Learning, Quantum Computing, Adobe Illustrator, Figma</h4>
                    </div>
                    <h2 className="sm:text-5xl text-xl font-bold text-osuch-secondary">Experience</h2>
                    <div className='space-y-2'>
                        <div className='mt-2'>
                            <h3 className='sm:text-4xl text-md text-white font-medium'>Web Developer, Sonoma State University</h3>
                            <h4 className='sm:text-2xl text-xs text-white font-thin'>Aug 2019 - Aug 2021</h4>
                            <ul className='ml-6 list-disc text-white'>
                                <li class='sm:text-3xl text-sm'>Utilized a content management system known as Drupal, alongside HTML5, CSS3, and JavaScript, to generatecontent for department sites.</li>
                                <li class='sm:text-3xl text-sm'>Increased site traffic by 12% according to Google Analytics; via utilization of Search Engine Optimization.</li>
                                <li class='sm:text-3xl text-sm'>Automated legacy site content retrieval using web-scraping via Beautiful Soup 4 in Python.</li>
                                <li class='sm:text-3xl text-sm'>Provided content direction to various departments.</li>
                                <li class='sm:text-3xl text-sm'>Ensured sites followed Web Content Accessibility Guidelines to comply with ADA Web Compliance.</li>
                            </ul>
                        </div>
                        <div className='pt-4'>
                            <h3 className='sm:text-4xl text-md text-white font-medium'>Undergraduate Researcher, Sonoma State University</h3>
                            <h4 className='sm:text-2xl text-xs text-white font-thin'>Dec 2021 - Present</h4>
                            <ul className='ml-6 list-disc text-white'>
                                <li class='sm:text-3xl text-sm'>Recipient of Koret Scholarship to develop web application regarding the simulation of quantum circuits.</li>
                                <li class='sm:text-3xl text-sm'>Team was one of the only undergraduate groups invited to SIGCSE 2023, a prestigious international conference for computer science education.</li>
                                <li class='sm:text-3xl text-sm'>Coauthored peer reviewed abstract that was published in the ACM Digital Library of research papers.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}