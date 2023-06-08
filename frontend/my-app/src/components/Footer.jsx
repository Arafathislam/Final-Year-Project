import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
                    <h2>Donate us</h2>
            <div className="sub_footer section_padding">
                <div className="sub_footer-links">
                    <div className="sub_footer-links-div">
                            <h4>Card Payments</h4>
                            <a href="#">done</a>

                    </div>
                    <div className="sub_footer-links-div">
                            <h4>Bkash</h4>
                            <a href="#">done</a>

                    </div>

                    <div className="sub_footer-links-div">
                            <h4>Roket</h4>
                            <a href="#">done</a>

                    </div>

                    <div className="sub_footer-links-div">
                            <h4>Nagad</h4>
                            <a href="#">done</a>

                    </div>




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