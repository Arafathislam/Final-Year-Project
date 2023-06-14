import React from 'react'
import './css/Home.css'
import roket from "../../images/roket.png"
import nagad from "../../images/nagad.svg"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MosqueIcon from '@mui/icons-material/Mosque';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
   <>        
   
    <div className="home">

    <div class="p-5 mx-5">

          <div class="container text-center">
            <div class="row row-cols-lg-5 gap-2 justify-content-center">
                        {/* medicine Service */}
            <div class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <Link class="text-decoration-none text-dark" to="/medicine">
                <div class="inner">
                  <MedicalInformationIcon sx={{color:"red"}}/>                
                        <p class="card-title fs-5 p-2">ঔষধ সেবা</p>
                </div>
                    
                  </Link>
                  </div>

                                            {/* Ambulance service */}

                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'chess_rule'%}">
                <div class="inner">
                <DepartureBoardIcon sx={{color:"red"}}/>  
                  
                <h5 class="card-title fs-5 p-2">অ্যাম্বুলেন্স সার্ভিস</h5>
                </div>
                    </a>
                  </div>

                            {/* Blood Donation */}
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'cricket_rule'%}">
                <div class="inner">
                <LocalHospitalIcon sx={{color:"red"}}/> 
                <h5 class="card-title fs-5 p-2">রক্তদান</h5>
                </div>
                    </a>
                  </div>
                  

                              {/* Hospital Service */}
                  
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'football_rule'%}">
                <div class="inner">
                <MedicalServicesIcon sx={{color:"red"}}/> 
                <h5 class="card-title fs-5 p-2">হাসপাতালের সেবা</h5>
                </div>
                    </a>
                  </div>

                                {/* Health Advice */}
              <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'highjump_rule'%}">
                <div class="inner">
                <MonitorHeartIcon sx={{color:"red"}}/> 
                <h5 class="card-title fs-5 p-2">স্বাস্থ্য পরামর্শ</h5>
                </div>
                    </a>
                  </div> 

                              {/* Prayer service */}
              <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"    
              >
              <a class="text-decoration-none text-dark" href="{%url 'pc3_rule'%}">
                <div class="inner">
                <MosqueIcon sx={{color:"red"}}/> 
                <h5 class="card-title fs-5 p-2">প্রার্থনা সেবা</h5>
                </div>
                    </a>
                  </div>

                                          {/* Health Anaylisis */}
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
               
              >
              <a class="text-decoration-none text-dark" href="{%url 'kabaddi_rule'%}">
                <div class="inner">
                <AccessibilityIcon sx={{color:"red"}}/> 
                <h5 class="card-title fs-5 p-2">স্বাস্থ্য বিশ্লেষণ</h5>
                </div>
                    </a>
                  </div>
                  

            
             </div>
             </div>
             </div> 



    </div>




    
   </>
  )
}

export default Home