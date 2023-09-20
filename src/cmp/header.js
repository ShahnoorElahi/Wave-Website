import React from 'react';
import '../App.css'
class header extends React.Component{
    render(){
            return(
               <div>
                    <header class="heade">
      <a href="#" class="logo"><i class="fas fa-magic"></i>design.</a>

      <div class="fas fa-bars"></div>

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
  </div>
               );
        }
}
export default header;
