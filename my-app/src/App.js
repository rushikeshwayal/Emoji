import React from "react";
import './index.css'; 
import Nav from "./components/Nav";
// import Search from "./components/Search";
import Home from "./components/home";

function App() {
    return(
        <div>
        <div>
           <Nav />
        </div>
        <div>
        <Home />
        </div>

        </div>
    );
}
export default App;