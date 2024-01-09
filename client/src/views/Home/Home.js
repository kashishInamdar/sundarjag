import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HomePoster from "../../components/HomePoster/HomePoster";

const Home = () => {

    return (
        <div className="full-body">

            <div className="home-container h-screen ">
                <Navbar />
                <HomePoster />

                
            </div>    
        </div>

    )
}
export default Home