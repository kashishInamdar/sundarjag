import "./OurServicesCard.css"


const OurServicesCard = ({title , description , id , image })=>{

    return (
        <div data-aos="flip-left " key={id} className="servicesCard">
            <img  src={image} className="seviceLogo" />
            <h3  >{title}</h3>
            <p  >{description}</p>
        </div>
    )
}

export default OurServicesCard