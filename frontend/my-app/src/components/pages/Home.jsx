import React from 'react'
import './css/Home.css'
import roket from "../../images/roket.png"
import nagad from "../../images/nagad.svg"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Home = () => {
  return (
   <>        
   
    <div className="home">

    <div class="p-5 mx-5">
          <div class="container text-center">
            <div class="row row-cols-lg-5 gap-2 justify-content-center">
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'badmintion_rule'%}">
                <div class="inner">
                
                  {/* <img src="{%static 'images/badminton.png'%}" class="card-img-top w-50" alt="..."/> */}
                  <LocalHospitalIcon sx={{color:"red"}}/>                
                        <p class="card-title fs-5 p-2">চিকিৎসা সেবা</p>
                </div>
                    
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'chess_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/chess.png'%}" class="card-img-top w-50" alt="..."/>
                <h5 class="card-title fs-5 p-2">Chess</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'cricket_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/cricket.png'%}" class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title fs-5 p-2">Cricket</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'football_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/football.png'%}" class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title fs-5 p-2">Football</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'highjump_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/64.png'%}" class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title fs-5 p-2">HighJump</h5>
                </div>
                    </a>
                  </div> 
              <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"    
              >
              <a class="text-decoration-none text-dark" href="{%url 'pc3_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/programming group.png'%}" class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title fs-6">Programming Contest (3 members)</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
               
              >
              <a class="text-decoration-none text-dark" href="{%url 'kabaddi_rule'%}">
                <div class="inner">
                  <img src="{%static 'images/000.jpg'%}" class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title">Kabaddi</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'pc1_rule'%}">
                <div class="inner">
                  <img src={nagad} class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title">Programming Contest Single</h5>
                </div>
                    </a>
                  </div>
                  <div
                class="card col-sm-1 col-md-4 border-success rounded-4 pt-3 align-items-center shadow"
                
              >
              <a class="text-decoration-none text-dark" href="{%url 'math_rule'%}">
                <div class="inner">
                  <img src={roket} class="card-img-top w-50 h-50" alt="..."/>
                <h5 class="card-title">চিকিৎসা সেবা</h5>
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