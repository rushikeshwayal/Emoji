import React,{useState,useEffect} from "react";

function Home() {
// const apiUrl = 'http://localhost:3000/emoji/api';

const [emoji,setEmoji] = useState([]);//setData is function to do some work and Data is variable or value return by the useState
// const [error, setError] = useState(null); 

const fetchApiData = () => {
  fetch('http://localhost:3000/emoji/api')
    .then(response=>{
      return response.json()
    })
    .then(data=>{
        setEmoji(data)
    })
}

    useEffect(() => {
    fetchApiData();
  }, []);
    return(<div className="pt-10 m-4">
          {emoji.length > 0 ? 
          ( <ul className="flex flex-wrap justify-around gap-5 flex-1  ">
              {emoji.map((e, index) => (
                <li className=" flex flex-wrap justify-center items-center max-w-md w-[500px] h-[300px] text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <div className="flex flex-wrap w-full justify-center items-center">
                 <h1 className=" text-center  text-7xl">{e.character} </h1> 
                 <p className="font-extrabold text-center text-xl w-[100%] p-5">{e.unicodeName}</p>  
                 </div>
                 <p className="font-bold">{e.subGroup}</p>
                </li>
              ))}
            </ul>) : (<p>Loading...</p>)}
        </div>)
}
export default Home;


