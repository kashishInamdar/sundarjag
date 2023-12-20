import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import Aos from "aos"
import webLogo from "./web-devlopment.png"
import OurService from "./../../config/OurService.json"
import OurServicesCard from "../../components/OurServicesCard/OurServicesCard"



const Home = () => {



    return (
        <div className="full-body">

            <div className="home-container">
                <Navbar />

                <h1 data-aos="fade-right" className="main-heading">The IDEVIFY Solutions we are passionate about transforming ideas
                    into cutting-edge software solutions.</h1>
                <p className="p-line"></p>

            </div>
            <div className="client-container">
                {/* <h2 className="heading-2">Our Happy Clients</h2> */}
                <marquee width="100%" direction="left" height="80px" className="clients">
                    <img src={webLogo} className="service-logo" />
                    <img src={webLogo} className="service-logo" />
                    <img src={webLogo} className="service-logo" />
                    <img src={webLogo} className="service-logo" />
                    <img src={webLogo} className="service-logo" />
                </marquee>
            </div>
            <div>
                <h2 className="heading-2">Our Software Development Services</h2>
                <div className="service-container">
                    {
                        OurService.map((service, index) => {
                            const { title, description } = service
                            return (
                                <div  >
                                    <OurServicesCard title={title} description={description} id={index} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <h2 className="heading-2">Why IDEVIFY</h2>
                <div class="d-flex flex-wrap justify-content-md-evenly">
                    <div data-aos="fade-right"
                        data-aos-duration="500"
                        className="wht-card"
                    >
                        <h3 >We “Maximize” Convenience</h3>
                        <p>You will always get data “on time” to make informed decisions.</p>
                        <p>only your preferences, if any, will dictate service trade-offs.</p>
                        <p>authentic & seamless exchanges at every interaction touchpoint</p>
                        <p>no “contract-traps” whatsoever</p>
                        <p>proactive address of potential “frictions & barriers” to engagement</p>
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="500"
                        className="wht-card"
                    >
                        <h3 >We “Infuse” Technological Prowess</h3>
                        <p>into your products to meet the evolving demands of your customers</p>
                        <p>to equip you to take the competition head-on</p>
                        <p>to enliven your ideas</p>
                        <p>to make every product of yours compelling</p>


                    </div>
                </div>

            </div>
            <Footer/>

        </div>

    )
}
export default Home