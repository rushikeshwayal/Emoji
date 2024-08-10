import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'; 
import Nav from "./components/Nav";
// import Search from "./components/Search";
import Home from "./components/home";
import Categories from "./components/categories";
import SubCategories from "./components/subCategores";
import About from "./components/About-us";
import Contact from "./components/contact-us";

function App() {
    return(
        <div >
        <div>
           <Nav />
        </div>
        <div className="bg-white">
        
        <BrowserRouter>
            <Routes>
                <Route index element= {<Home/>}  />
                <Route path="/categories" element= {<Categories/>}  />
                <Route path="/categories/:group" element= {<SubCategories/>}  />
                <Route path="/about" element= {<About/>}  />
                <Route path="/contact" element= {<Contact/>}  />
            </Routes>
        </BrowserRouter>

        </div>

        </div>
    );
}
export default App;