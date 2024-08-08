import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";

function SubgrouCategories(props) {
    
    const [emoji,setEmoji] = useState([]);
    const {group} = useParams();

   const fetchApiData = () =>{
    fetch("http://localhost:3000/emoji/api")
    .then((response)=>response.json())
    .then((data)=>{
      const filtered=data.filter((e)=>e.group=== group);
      console.log(filtered)
      setEmoji(filtered);

    })
   }

   useEffect(()=>{
    fetchApiData();
   },[group]);

 


    return(
    <div className="flex flex-wrap justify-between space-y-5">
    <div className="w-full">
    {/* <h1 className="text-3xl text-center font-bold ">{group.toUpperCase()}</h1> */}
    <h1 className="text-xl   font-bold  hover:bg-orange-100">{props.subGroup.toUpperCase()}</h1>
</div>
     {emoji.map((e, index) =>
      e.subGroup === props.subGroup   ? (
       
        <div key={index} className="flex-none ">
    
          <div className="bg-white w-[300px] bg-gray-800 text-white m-5 p-4 text-center rounded-lg ">
          
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