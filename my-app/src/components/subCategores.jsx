import React,{useState,useEffect} from "react";
import SubgroupCategories from "./subgroupCategories";


function SubCategories() {



return(
    
         <div className="m-10 space-y-5">
       
            <SubgroupCategories subGroup="face-smiling"  />
            <SubgroupCategories subGroup="face-affection"  />
            <SubgroupCategories subGroup="face-tongue"  />
            <SubgroupCategories subGroup="face-hand"  />
            <SubgroupCategories subGroup="face-neutral-skeptical"  />
            <SubgroupCategories subGroup="face-hat"  />
            <SubgroupCategories subGroup="face-glasses"  />
            <SubgroupCategories subGroup="face-concerned"  />
            <SubgroupCategories subGroup="face-negative"  />
            <SubgroupCategories subGroup="face-costume"  />
     

         </div>
          
        
         
    

   
);



}

export default SubCategories;



