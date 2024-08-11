import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function SubgrouCategories(props) {
    const hrStyle = {
    border: '0',
  height: '2px',
  backgroundImage: 'linear-gradient(to right, rgba(255, 0, 150, 0), rgba(78, 0, 150, 0.75), rgba(255, 0, 150, 0))',
  margin: ' 0', // Add spacing around the hr
  };
    const [emoji,setEmoji] = useState([]);
    const {group} = useParams();

 

   useEffect(()=>{
      
const fetchData = async () => {
    try {
      const response = await fetch("https://emoji-server-sand.vercel.app/");
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const data = await response.json();
      setEmoji(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
   
   },[group]);

 


    return(
    <div className="flex flex-wrap justify-between space-y-5">
    <div className="w-full">
    {/* <h1 className="text-3xl text-center font-bold ">{group.toUpperCase()}</h1> */}
    
</div>

     {emoji.map((e, index) =>
      e.subGroup === props.subGroup   ? (
       
        <div key={index} className="flex-none ">
        <h1>{props.group}</h1>
        <h1 className="text-xl   font-bold  hover:bg-orange-100">{props.subGroup.toUpperCase()}</h1>
    
          <div className=" w-[300px] bg-gray-800 text-white m-5 p-4 text-center rounded-lg ">
          
            <h1 className="text-2xl mb-2 ">{e.character}</h1>
            <p className="">{e.unicodeName}</p>
            <p className=" italic">{e.subGroup}</p>
          </div>
          
        </div>
      ) : null
    )}
    
    </div>
    
);
}
export default SubgrouCategories;