import React,{useState,useEffect} from "react";
import SubgroupCategories from "./subgroupCategories";


function SubCategories() {

 const [emoji,setEmoji] = useState([]);
   //  const {group} = useParams();

 

   useEffect(()=>{
      
    fetch("http://localhost:3000/emoji/api")
    .then((response)=>response.json())
    .then((data)=>{
      setEmoji(data);

    })
   
   },[]);

return(
    
         <div className="m-10 space-y-5">
       {/* adding if condition for dynamic pages */}
            <SubgroupCategories group="smileys-emotion" subGroup="face-smiling"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-affection"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-tongue"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-hand"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-neutral-skeptical"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-hat"  />
            <SubgroupCategories  group="smileys-emotion"subGroup="face-glasses"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-concerned"  />
            <SubgroupCategories group="smileys-emotion" subGroup="face-negative"  />
            <SubgroupCategories   group="smileys-emotion" subGroup="face-costume"  />
            <SubgroupCategories group="smileys-emotion" subGroup="hand-fingers-open"  />
     

         </div>
          
        
         
    

   
);



}

export default SubCategories;



