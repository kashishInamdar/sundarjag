import React from 'react'
import idevifyLogo from "./../../assests/idevifysolutions.png"
import './Footer.css'

function Footer() {
    return (
        <div className='container-fluid p-2 my-3 bg-white'>
            <div className='row'>
                <div className='col col-md-6 text-start text-primary'>
                    <div>
                        <img src={idevifyLogo} alt='idevifylogo' className='idevifylogo  mx-5' />
                    </div>

                </div>

                <div className='col col-md-3 text-start text-primary'>
                    <h4>Quick Links</h4>
                    <ul >
                        <li className='text-primary'>Home</li>
                        <li className='text-primary'>Sevices</li>
                        <li className='text-primary'>Career</li>
                        <li className='text-primary'>About</li>
                        <li className='text-primary'>Contact</li>
                    </ul>

                </div>

                <div className='col col-md-3 text-start text-primary '>
                    <h4>Subscribe to Our Newsletter</h4>
                    <div>
                        <label className='text-primary'>Email *</label><br />
                        <input type='email' className='p-1 footerEmailInput my-2' />
                        <button className='btn btn-outline-primary p-2 px-4 my-3'>Submit</button><br />
                        <label className='text-primary'>Address *</label><br />
                        <p className='text-primary'>C BUILDING SAI RES BESA VELAHARI Nagpur,  440037<p className='text-primary my-2'>info@devtechsolutionsllp.in</p>
                            <p className='text-primary'>+91 8669307988</p></p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Footer