import React from "react";
import GitHub from './git.png';
function Contact() {
    return(
        
               <div className="flex justify-center items-center h-[765px] ">
    <div className="flex justify-center items-center bg-[#FFEBD4] rounded-lg w-[98%] h-[600px] gap-20">

    <div className="w-[510px] flex flex-wrap justify-around items-center gap-3">
        <h1 className="text-gray-600  text-4xl font-extrabold ">Contact Us</h1>
       <p className="text-xl">
  Got a question or need assistance? We're here to help! 🤝 Whether you're looking to collaborate, provide feedback, or just say hello 👋, feel free to reach out. Our team is dedicated to ensuring your experience is smooth and satisfying 😊. Drop us a message anytime, and we'll get back to you as soon as possible 🕒. We value your input and look forward to connecting with you! 💬
</p>
<ul className=" mt-10 flex justify-center items-center gap-x-5">
<li>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZfRmgxnJcsghhfGfkxQDgkwmMbghvhFmktjbkRCFsbNrJMTRdxwQHjLZMGQQLRQBGfbDB" className="hover:text-blue-500 text-xl ">📩</a> 
</li>
<li >
<a href="https://github.com/rushikeshwayal" className="hover:translate-x-20  "><img className="size-[40px]" src={GitHub} alt="Git" /></a> 

</li>
</ul>
    </div>


    <div className=" flex w-[700px]  space-x-5">
    <div className="relative">
<img src="https://images.pexels.com/photos/12570892/pexels-photo-12570892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="about img"
className="absolute h-40 rounded-lg"

 />

<img src="https://images.pexels.com/photos/7987039/pexels-photo-7987039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="about img"
className="h-80 mt-10 ml-20 rounded-lg"
 />
 </div>
 <div className="relative">
 
<img src="https://images.pexels.com/photos/3905906/pexels-photo-3905906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="about img"
className=" absolute    h-60 "
 />
 <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?&cs=tinysrgb&w=1260&h=750&dpr=2"
alt="about img"
className=" h-40  mt-52 ml-20 rounded-lg"
 />



 </div>


    </div>
       </div>
       </div>
       
    );
}
export default Contact;