import React,{Component, useState } from 'react';
import '../App.css'
function Team(){
   
    const [switchToggle,setSwitchToggle]=useState(false);
    const ToggleSwitch=()=>{
        switchToggle ? setSwitchToggle(false):setSwitchToggle(true);
    }      
    return(

           


           <div>
                <header class={switchToggle ? "header":"heade"}>
  <a href="#" class="logo"><i class="fas fa-magic"></i>design.</a>

  {/* <div class="fas fa-bars"></div> */}
  <button onClick={ToggleSwitch}><div class="fas fa-bars"></div></button>

  <nav id="navbar" class="navbar">
      <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">about</a></li>
          <li><a href="services">services</a></li>
          <li><a href="team">team</a></li>
          <li><a href="contact">contact</a></li>
      </ul>
  </nav>
</header>

<section id="team" class="team">
            <h1 class="heading">Our Team</h1> 
            <div class="row">
                <div class="card">
                    <div class="image">
                        <img src="me.jpg" alt=""/>
                    </div>
                    <div class="info">
                        <h3>someone's name</h3>
                        <span>Web designer</span>
                        <div class="icon">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="me.jpg" alt=""/>
                    </div>
                    <div class="info">
                        <h3>someone's name</h3>
                        <span>Web designer</span>
                        <div class="icon">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="me.jpg" alt=""/>
                    </div>
                    <div class="info">
                        <h3>someone's name</h3>
                        <span>Web designer</span>
                        <div class="icon">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                        </div>
                    </div>
                </div>
            </div>
    </section>


    <section class="footer">
        <h1>Created by Shahnoor Elahi | all rights reserved</h1>
        <div class="icon">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
        </div>
    </section>
                 </div>
               )
}
export default Team;
