import "./OurServicesCard.css"


const OurServicesCard = ({title , description , id , image})=>{

    return (
        <div key={id} className="servicesCard">
             <img  src={image} className="seviceLogo" />
            <h3 data-aos="zoom-in" data-aos-duration="1000" className="service-name" >{title}</h3>
            <p data-aos="zoom-in" data-aos-duration="1000" className="service-description"  >{description}</p>
        </div>
    )
}

export default OurServicesCard