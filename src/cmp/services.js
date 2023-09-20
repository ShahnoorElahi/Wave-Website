import React,{Component, useState } from 'react';
import '../App.css'
function Services(){
   
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
<section id="services" class="services">
        <h1 class="heading">Services</h1>
        <div class="row">
            <div class="image">
                <img src="services.PNG" alt=""/>
            </div>            
            <div class="content">
                <h3>Web development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
        </div>


        <div class="row">           
            <div class="content">
                <h3>Mobile Friendly</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
            <div class="image">
            <img src="mobile.PNG" alt=""/>
        </div> 
        </div>


        <div class="row">           
            <div class="image">
                <img src="responsive.PNG" alt=""/>
            </div> 
            <div class="content">
                <h3>Responsive Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
        </div>


        <div class="row">           
            <div class="content">
                <h3>Web Hosting</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
            <div class="image">
                <img src="web.PNG" alt=""/>
            </div>            
        </div>


        

        <div class="row">           
            <div class="image">
                <img src="SEO.PNG" alt=""/>
            </div>            
            <div class="content">
                <h3>SEO Friendly</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
        </div>


        <div class="row">           
            <div class="content">
                <h3>Graphics Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
            <div class="image">
                <img src="graphics.PNG" alt=""/>
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
export default Services;
