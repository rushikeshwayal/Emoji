import React from 'react';

const YourComponent = () => {
  return (
   
   
      <div className=" flex justify-center">
         <form>
        <input 
          type="text" 
          className="w-80 mx-10 py-3 px-4 border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" 
          placeholder="This is placeholder" 
        />
        <button 
          type="button" 
          className=" py-3 px-4 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        >
          Button
        </button>
        </form>
      </div>        
   
  );
};

export default YourComponent;
