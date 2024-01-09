import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HomePoster from "../../components/HomePoster/HomePoster";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return (
        <div className="full-body">

            <div className="home-container h-screen ">
                <Navbar />
                <HomePoster />

            </div>    
            <div>
                <h3>Why Choose Us</h3>
            </div>
            <div>
                <h3>travling Plan card</h3> 
                {/* with See more Option */}
            </div>
            <div>
                <h3>Travling Add Poster</h3>

            </div>
            <div>
                <h3 > Reviews</h3>
                {/* scroling card */}
            </div>
            <div>
                <Footer />
            </div>


        </div>

    )
}
export default Home