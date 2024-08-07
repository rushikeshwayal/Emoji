import React,{createContext,useState,useEffect} from 'react';





const YourComponent = () => {
// const [emoji,setEmoji] = useState([]);//setEmoji is function to do some work and emoji is variable or value return by the useState
 

// const fetchApiData = () => {
//   fetch('http://localhost:3000/emoji/api')
//     .then(response=>{
//       return response.json()
//     })
//     .then(data=>{
//         setEmoji(data)
//     })
// }

//     useEffect(() => {
//     fetchApiData();
//   }, []);

//   // eslint-disable-next-line array-callback-return
//   const SearchEmoji = emoji.filter((e)=>e.unicodeName.toLowerCase().includes(' big eyes'))
// console.log(SearchEmoji)


  const [query,setQuery] = useState([]);


function On_input(e) {
  setQuery(e.target.value.toLowerCase())
}


  return (
   
   
      <div className=" flex justify-center flex-1">
         <form>
        <input
          type="text" 
          className="w-80 mx-10 py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
          placeholder="This is placeholder" 
           onChange={On_input}
        />
        {/* <button 
          type="button" 
          className=" py-3 px-4 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        >
          Button
        </button> */}
        </form>
      </div>        
   
  );
};

export default YourComponent;
