import React,{useState,useEffect} from "react";
import Swipper from "./swipper";
function Categories() {



return(
    
         <div className="m-10 space-y-5">
       {}
            <Swipper title="Smileys & Emotion" categories="smileys-emotion" />
            <Swipper title="People & Body" categories="people-body" />
            <Swipper title="Animals & Nature" categories="animals-nature" />
            <Swipper title="Food & Drink" categories="food-drink" />
            <Swipper title="Activities" categories="activities" />
            <Swipper title="Travel & Places" categories="travel-places" />
            <Swipper title="Objects" categories="objects" />
            <Swipper title="Symbols" categories="symbols" />
            <Swipper title="Flags" categories="flags" />
     

         </div>
          
        
         
    

   
);



}

export default Categories;



