import React,{Component, useState } from 'react';
import '../App.css'



function Home(){
   
        const [switchToggle,setSwitchToggle]=useState(false);
        const ToggleSwitch=()=>{
            switchToggle ? setSwitchToggle(false):setSwitchToggle(true);
        }      
        return(

               


               <div>
                    <header class={switchToggle ? "header":"heade"}>
      <a href="#" class="logo"><i class="fas fa-magic"></i>design.</a>

      {/* <div class="fas fa-bars"></div> */}
      <button className='Butn' onClick={ToggleSwitch}><div class="fas fa-bars"></div></button>

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
    <section id="home" class="home">  
    <h1 class="banner">Web Design & Development Services</h1>
    <h3 class="slogan">you have a vision, we have a team to get you there</h3>
    <a href="#"><button>Get Started</button></a>

    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>

    <div class="fas fa-cog nut1"></div>
    <div class="fas fa-cog nut2"></div>
    </section>

    <section id="about" class="about">
        <h1 class="heading">about us</h1>
        <div class="row">
            <div class="content">
                <h3>We build website that build your busines</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, porro? Error porro, cumque voluptatibus maiores unde temporibus eos facilis ab omnis suscipit quaerat nulla neque debitis delectus provident? Laborum, pariatur!</p>
                <a href="#"><button class="btn">read more</button></a>
            </div>
            <div class="image">
                <img src="About-us.PNG" alt=""/>
            </div>
        </div>
    </section>

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

    <section id="contact" class="contact">
        <h1 class="heading">Contact us</h1> 
        <div class="row">
            <div class="image">
                <img src="contact.PNG" alt=""/>
            </div>
            <div class="form-container">
                <form action="">
                    <div class="inputBox">
                        <input type="text" placeholder="first name"/>
                        <input type="text" placeholder="last name"/>
                    </div>
                    <input type="email" placeholder="email"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                    <input type="submit" value="send"/>
                </form>
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
               );
        
}
export default Home;
