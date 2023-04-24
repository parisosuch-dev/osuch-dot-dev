import Nav from "../components/Nav";

export default function About() {
    return (
        <div className='min-h-screen bg-osuch-black'>
            <Nav />
            <div className="relative flex flex-col justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-col justify-between sm:space-y-5 space-y-2">
                    <h1 className="text-white font-black sm:text-8xl text-3xl"><span className="text-osuch-primary">ABOUT ME</span>.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-sm">Hi! My name is Paris Osuch, I am 23 years old and grew up on the Central Coast of California (SLO) for 21 years before moving to Yosemite. I attended Sonoma State University from 2018 to 2023, graduating with a B.S in Computer Science. I enjoy graphic design, video games, spending time with my family, and creating visual products for clients.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-sm">I am a Full Stack Developer with expertise in React, Tailwind CSS, Figma, Firebase, and Django. With several years of experience in web development, I have worked on various projects from small-scale to enterprise-level, delivering quality solutions that cater to the client's specific needs.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-sm">As a front-end developer, I specialize in using React to create dynamic and responsive user interfaces that provide a seamless user experience. I am well-versed in implementing custom designs using Tailwind CSS, and I use Figma for prototyping and design collaboration with the team.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-sm">On the backend, I have extensive experience in building RESTful APIs using Django, which allows me to create scalable and secure applications that can handle complex data management. I also have expertise in integrating Firebase, which helps me build real-time applications, push notifications, and user authentication.</h1>
                    <h1 className="text-white font-regular sm:text-4xl text-sm">My approach to development is to always stay up-to-date with the latest technology trends and to follow best practices for code quality and maintainability. I also prioritize clear communication and collaboration with the team to ensure that the project is delivered on time and within budget.</h1>
                </div>
            </div>
        </div>
    );
};