import React, {useState ,useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from './right.png'
import { Link } from 'react-router-dom';


  function Swipper(props) {
    
const [emoji,setEmoji] = useState([]);
const fetchApiData = async () => {
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

  

    useEffect(() => {
    fetchApiData();
  }, []);

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };


   
return (
  <div className='space-y-10'>

          {/* First */}
         <div className="w-full bg-[#5B99C2] rounded-lg">
  <div>
  <Link to={`/categories/${props.categories}`}  className='flex justify-start p-5 transition-transform transform hover:scale-x-95  '>
    <h1 className="text-black font-bold text-xl ">{props.title} </h1>
   <img className='size-5 mt-[7px] ml-3 ' src={RightArrow} alt='>' />
    </Link>
  </div>
  <Slider {...settings} className="flex justify-center items-center w-[80%] ml-20 p-4 space-x-4">
    {emoji.map((e, index) =>
      e.group === props.categories   ? (
        <div key={index} className="flex-none">
          <div className="bg-white m-5 p-4 text-center rounded-lg ">
            <h1 className="text-2xl mb-2 text-gray-800">{e.character}</h1>
            <p className="text-gray-600">{e.unicodeName}</p>
            <p className="text-blue-500 italic">{e.subGroup}</p>
          </div>
        </div>
      ) : null
    )}
  </Slider>
</div>
</div>

        
      
      
       
      
);
   
  
}
  
  export default Swipper;

  
