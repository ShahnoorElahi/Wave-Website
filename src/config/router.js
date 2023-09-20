import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from '../cmp/home';
import About from '../cmp/About';
import Contact from '../cmp/contact';
import Services from '../cmp/services';
import Team from '../cmp/Team';
import header from '../cmp/header';

class Approuter extends React.Component{
    render(){
        return(
            <div>
            <Router> 
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route path="/About" Component={About} />
                    <Route path="/contact" Component={Contact} />
                    <Route path="/services" Component={Services} />
                    <Route path="/team" Component={Team} />
                    {/* <Route path="/header" Component={header} /> */}
                </Routes>
            </Router>
            </div>
        );
    }
}
export default Approuter;