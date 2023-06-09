import React from 'react'
import './Footer.css'

import master from '../../src/images/master.svg'
import bkash from "../../src/images/bkash.svg"
import nagad from "../../src/images/nagad.svg"
import roket from "../../src/images/roket.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
                    <h2>Donate us</h2>
            <div className="sub_footer section_padding">
                <div className="sub_footer-links">
                    <div className="sub_footer-links-div">
                            <h3>Card Payments</h3>
                            <img src={master} alt="master" />
                            <a href="#">
                              
                            
                            <h5>click here</h5>
                            </a>

                    </div>
                    <div className="sub_footer-links-div">
                            <h3>Bkash</h3>
                            <img src={bkash} alt="bkash" />
                            <a href="#">
                             
                              <h5>click here</h5>
          
                            </a>

                    </div>

                    <div className="sub_footer-links-div">
                            <h3>Roket</h3>
                            <img src={roket} alt="roket" />
                            <a href="#">
                            
                            <h5>click here</h5>
                            </a>

                    </div>

                    <div className="sub_footer-links-div">
                    
                            <h3>Nagad</h3>
                            <img src={nagad} alt="nagad" />
                            <a href="#">
                            <h5>click here</h5>
                            </a>

                    </div>


              <hr/>

                <div className='sub_footer-below'>
                    <div className="sub_footer-copyright">
                        <p>@{new Date().getFullYear()} Arafathislam. All right reserved.</p>
                    </div>
                    <div className="sub_footer-below-links">
                        <a href="#"><div><p>Terms & conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>



                </div>

            </div>
 
      </div>

    </>
  )
}

export default Footer