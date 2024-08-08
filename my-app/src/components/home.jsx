import React,{useState,useEffect} from "react";

function Home() {
// APi Fetching 
const [emoji,setEmoji] = useState([]);//setEmoji is function to do some work and emoji is variable or value return by the useState
 

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

  

// pagination
let [currentPage,setCurrentPage] = useState(1);
const recordPerPage = 6;
const lastIndex = currentPage * recordPerPage; 
const firstIndex = lastIndex - recordPerPage;
const record = emoji.slice(firstIndex,lastIndex);
const nPages = Math.ceil(emoji.length / recordPerPage);
// const numbers = [...Array(nPages+1).keys()].slice(1);

function Pre_Page() {
  if (currentPage===1) {
     console.log("Page dose not exist")
  }
  else{
setCurrentPage (currentPage-1) ;
  }
  
}
function Next_Page() {
  if (currentPage === nPages) {
    console.log("Page dose not exist")
  }
  else{
setCurrentPage (currentPage+1) ;
  }

}
const [query,setQuery] = useState([]);
// search 
function On_input(e) {
  setQuery(e.target.value.toLowerCase())
}

if (query.length>0) {

   return(
    <div>
     <div className=" flex justify-center flex-1">
         <form>
        <input
          type="text" 
          className="w-80 mx-10 py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
          placeholder="Search Emoji 😁" 
           onChange={On_input}
        />
    </form>
      </div>    
    
    <div className="pt-10 m-4">
          {emoji.length > 0 ? 
          ( <ul className="flex flex-wrap justify-around gap-5 flex-1  ">
              { 
                emoji.filter((e)=>e.unicodeName.toLowerCase().includes(query)).map((e, index) => (
                <li className=" flex flex-wrap justify-center items-center max-w-md w-[500px] h-[300px] text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <div className="flex flex-wrap w-full justify-center items-center">
                 <h1 className=" text-center  text-7xl">{e.character} </h1> 
                 <p className="font-extrabold text-center text-xl w-[100%] p-5">{e.unicodeName}</p>  
                 </div>
                 <p className="font-bold">{e.subGroup}</p>
                </li>
              ))}
            </ul>) : (<p>Loading...</p>)}
        </div>
        </div>
    )
  
}
else{

 return(
    <div>
     <div className=" flex justify-center flex-1">
         <form>
        <input
          type="text" 
          className="w-80 mx-10 py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
          placeholder="Search Emoji 😁" 
           onChange={On_input}
        />
    </form>
      </div>    
    
    <div className="pt-10 m-4">
          {emoji.length > 0 ? 
          ( <ul className="flex flex-wrap justify-around gap-5 flex-1  ">
              { 
                record.filter((e)=>e.unicodeName.toLowerCase().includes(query)).map((e, index) => (
                <li className=" flex flex-wrap justify-center items-center max-w-md w-[500px] h-[300px] text-white bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                <div className="flex flex-wrap w-full justify-center items-center">
                 <h1 className=" text-center  text-7xl">{e.character} </h1> 
                 <p className="font-extrabold text-center text-xl w-[100%] p-5">{e.unicodeName}</p>  
                 </div>
                 <p className="font-bold">{e.subGroup}</p>
                </li>
              ))}
            </ul>) : (<p>Loading...</p>)}
            <div>
              <ul className="flex justify-center space-x-5 mt-10">
              <li >
                <a href="#" className="border bottom-2 px-5 py-1 rounded-lg text-white font-bold bg-blue-500   hover:bg-blue-400 " onClick={Pre_Page}>Prev</a>
                </li>
                
                 <li key='index'>
                    <a href="#" className="text-center font-bold text-sm" ><pre>{currentPage} . . . {nPages}</pre></a>
               
                  </li>
                
                <li >
                <a href="#"  className="border font-bold rounded-lg text-white bottom-2 px-5 py-1 bg-blue-500  hover:bg-blue-400" onClick={Next_Page}>Next</a>
                </li>
                
              </ul>
            </div>
        </div>
        </div>
    )
  
}

   

}
export default Home;


