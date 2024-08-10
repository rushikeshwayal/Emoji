import React from "react";

function About() {
    return( 
    <div className="flex justify-center items-center h-screen ">
    <div className="flex justify-center items-center bg-[#FFEBD4] rounded-lg w-[98%] h-[600px] gap-40">

    <div className="w-[510px] flex flex-wrap justify-around items-center gap-3">
    <h1 className="text-gray-600  text-4xl font-extrabold ">About Emoji</h1>
    <p className="text-xl" >Emojis 😁 , born in Japan in the late 1990s, started as a way to express emotions that words sometimes fail to capture. Created by Shigetaka Kurita 🧑‍🦱, these tiny symbols have evolved into a universal language 🌍🌏🌎 that transcends cultural and linguistic boundaries. From a simple smiley 😊 to a heart 💖, emojis connect us by conveying feelings of joy 😃, love 😍, and everything in between. They remind us that, despite our differences, we all share the same emotions, making our digital communication more heartfelt and expressive 🫡 </p>

    </div>


    <div className=" flex  space-x-5">
    <div className="relative">
<img src="https://images.pexels.com/photos/7313450/pexels-photo-7313450.jpeg?&cs=tinysrgb&w=800"
alt="about img"
className="absolute h-40 rounded-lg"

 />

<img src="https://images.pexels.com/photos/8830979/pexels-photo-8830979.jpeg?&cs=tinysrgb&w=800"
alt="about img"
className="h-80 mt-10 ml-20 rounded-lg"
 />
 </div>
 <div className="relative">
<img src="https://images.pexels.com/photos/8834289/pexels-photo-8834289.jpeg?&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="about img"
className="absolute h-80 rounded-lg"
 />

<img src="https://images.pexels.com/photos/7313447/pexels-photo-7313447.jpeg?auto=compress&cs=tinysrgb&w=800"
alt="about img"
className="h-40 mt-72 rounded-lg"
 />
 </div>


    </div>
       </div>
       </div>
      );
}

export default About;