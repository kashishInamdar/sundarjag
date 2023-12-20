import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import Aos from "aos"
import OurService from "./../../config/OurService.json"
import OurServicesCard from "../../components/OurServicesCard/OurServicesCard"
const Home = () => {


    
    return (
        <>

            <div className="home-container">
                <Navbar />
                <h1 data-aos="fade-right" className="main-heading">The IDEVIFY Solutions we are passionate about transforming ideas
                 into cutting-edge software solutions.</h1>
                <p className="p-line"></p>

            </div>
            <div>
                <h2 className="heading-2">Our Software Development Services</h2>
                <div   className="service-container">
                    {
                        OurService.map((service , index)=>{
                            const {title , description } = service
                            return(
                                <div  >
                                    <OurServicesCard title={title} description={description} id={index} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>

    )
}
export default Home