import Nav from "../components/Nav";
import me from '../assets/me.jpg'

export default function Landing() {
    return(
        <div class='h-screen bg-osuch-black'>
            <Nav/>
            <div>
            <img class="w-64 object-cover h-64 rounded-full" src={me} alt="Rounded avatar"></img>
            </div>
        </div>
    );
};  