import React,{useState,useEffect} from "react";
import SubgroupCategories from "./subgroupCategories";
// import groupSubgroupArr from "./groupSubgroupArr";

function SubCategories() {

   const hrStyle = {
   margin: 0,
  height: '2px',
  backgroundImage: 'linear-gradient(to right, rgba(255, 0, 150, 0), rgba(78, 0, 150, 0.75), rgba(255, 0, 150, 0))',
  // background: 'black',
  };

 const [emoji,setEmoji] = useState([]);
   //  const {group} = useParams();

 const fetchApiData = async () => {
  try {
    const response = await fetch("https://emoji-server-i1vidukqu-rushikeshwayals-projects.vercel.app/");
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const data = await response.json();
    setEmoji(data);
  } catch (error) {
    console.log(error)
  }
 }

   useEffect(()=>{
      
     fetchApiData();
   
   },[]);



   const categories = [
  { group: "smileys-emotion", subGroup: "face-smiling" },
  { group: "smileys-emotion", subGroup: "face-affection" },
  { group: "smileys-emotion", subGroup: "face-tongue" },
  { group: "smileys-emotion", subGroup: "face-hand" },
  { group: "smileys-emotion", subGroup: "face-neutral-skeptical" },
  { group: "smileys-emotion", subGroup: "face-hat" },
  { group: "smileys-emotion", subGroup: "face-glasses" },
  { group: "smileys-emotion", subGroup: "face-concerned" },
  { group: "smileys-emotion", subGroup: "face-negative" },
  // People & Body
  { group: "People & Body", subGroup: "face-costume" },
  { group: "People & Body", subGroup: "hand-fingers-open" },
  { group: "People & Body", subGroup: "hand-fingers-partial" },
  { group: "People & Body", subGroup: "hand-single-finger" },
  { group: "People & Body", subGroup: "hand-fingers-closed" },
  { group: "People & Body", subGroup: "hands" },
  { group: "People & Body", subGroup: "hand-prop" },
  { group: "People & Body", subGroup: "body-parts" },
  { group: "People & Body", subGroup: "person" },
  { group: "People & Body", subGroup: "person-gesture" },
  { group: "People & Body", subGroup: "person-role" },
  { group: "People & Body", subGroup: "person-fantasy" },
  { group: "People & Body", subGroup: "person-activity" },
  { group: "People & Body", subGroup: "person-sport" },
  { group: "People & Body", subGroup: "person-resting" },
  // Animals & Nature
  { group: "Animals & Nature", subGroup: "animal-mammal" },
  { group: "Animals & Nature", subGroup: "animal-bird" },
  { group: "Animals & Nature", subGroup: "animal-amphibian" },
  { group: "Animals & Nature", subGroup: "animal-reptile" },
  { group: "Animals & Nature", subGroup: "animal-marine" },
  { group: "Animals & Nature", subGroup: "animal-bug" },
  { group: "Animals & Nature", subGroup: "plant-flower" },
  { group: "Animals & Nature", subGroup: "plant-other" },
  // Food & Drink
  { group: "Food & Drink", subGroup: "food-fruit" },
  { group: "Food & Drink", subGroup: "food-vegetable" },
  { group: "Food & Drink", subGroup: "food-prepared" },
  { group: "Food & Drink", subGroup: "food-asian" },
  { group: "Food & Drink", subGroup: "food-marine" },
  { group: "Food & Drink", subGroup: "food-sweet" },
  { group: "Food & Drink", subGroup: "drink" },
  { group: "Food & Drink", subGroup: "dishware" },
  // Activities
  { group: "Activities", subGroup: "event" },
  { group: "Activities", subGroup: "award-medal" },
  { group: "Activities", subGroup: "sport" },
  { group: "Activities", subGroup: "game" },
  { group: "Activities", subGroup: "arts & crafts" },
  // Travel & Places
  { group: "Travel & Places", subGroup: "place-map" },
  { group: "Travel & Places", subGroup: "place-geographic" },
  { group: "Travel & Places", subGroup: "place-building" },
  { group: "Travel & Places", subGroup: "place-religious" },
  { group: "Travel & Places", subGroup: "place-other" },
  { group: "Travel & Places", subGroup: "transport-ground" },
  { group: "Travel & Places", subGroup: "transport-water" },
  { group: "Travel & Places", subGroup: "transport-air" },
  { group: "Travel & Places", subGroup: "hotel" },
  // Objects
  { group: "Objects", subGroup: "phone" },
  { group: "Objects", subGroup: "computer" },
  { group: "Objects", subGroup: "light & video" },
  { group: "Objects", subGroup: "book-paper" },
  { group: "Objects", subGroup: "money" },
  { group: "Objects", subGroup: "mail" },
  { group: "Objects", subGroup: "writing" },
  { group: "Objects", subGroup: "office" },
  { group: "Objects", subGroup: "lock" },
  { group: "Objects", subGroup: "tool" },
  { group: "Objects", subGroup: "science" },
  { group: "Objects", subGroup: "medical" },
  { group: "Objects", subGroup: "household" },
  { group: "Objects", subGroup: "other-object" },
  // Symbols
  { group: "Symbols", subGroup: "keycap" },
  { group: "Symbols", subGroup: "alphanum" },
  { group: "Symbols", subGroup: "geometric" },
  { group: "Symbols", subGroup: "av-symbol" },
  { group: "Symbols", subGroup: "transport-sign" },
  { group: "Symbols", subGroup: "warning" },
  { group: "Symbols", subGroup: "arrow" },
  { group: "Symbols", subGroup: "religion" },
  { group: "Symbols", subGroup: "zodiac" },
  { group: "Symbols", subGroup: "math" },
  { group: "Symbols", subGroup: "punctuation" },
  { group: "Symbols", subGroup: "currency" },
  { group: "Symbols", subGroup: "other-symbol" },
  // Flags
  { group: "Flags", subGroup: "country-flag" },
  { group: "Flags", subGroup: "subdivision-flag" },
];


return(
    
         <div className="m-10 ">
{categories.map(({ group, subGroup }, index) => (
        <div key={index}>
          <SubgroupCategories group={group} subGroup={subGroup} />
          <hr group={group} subGroup={subGroup} style={hrStyle}  />
        </div>
      ))}
         </div>
          
        
         
    

   
);



}

export default SubCategories;



//  {/* adding if condition for dynamic pages */}
//        {/* {emoji.map((e,index)=>{ e.group==='smileys-emotion' ?( */}
//         <div>
//             <SubgroupCategories group="smileys-emotion" subGroup="face-smiling"  />
//             <hr group="smileys-emotion"  style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-affection"  />
//         <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-tongue"  />
//            <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-hand"  />
//           <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-neutral-skeptical"  />
//              <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-hat"  />
//              <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories  group="smileys-emotion"subGroup="face-glasses"  />
//                <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-concerned"  />
//                <hr group="smileys-emotion" style={hrStyle} />
//             <SubgroupCategories group="smileys-emotion" subGroup="face-negative"  />


//       {/* people and body */}
//             <SubgroupCategories   group="People & Body" subGroup="face-costume"  />
//             <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hand-fingers-open"  />
//               <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hand-fingers-partial  "  />
//               <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hand-single-finger"  />
//               <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hand-fingers-closed"  />
//               <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hands"  />
//                <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="hand-prop"  />
//                 <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="body-parts"  />
//                 <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person"  />
//                <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-gesture"  />
//                 <hr   group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-role"  />
//                <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-fantasy"  />
//                 <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-activity"  />
//                 <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-sport"  />
//                <hr  group="People & Body" style={hrStyle} />
//             <SubgroupCategories group="People & Body" subGroup="person-resting"  />
            
//             {/* Animal And Nature */}
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-mammal"  />
//                <hr group="Animals & Nature" style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-bird"  />
//                <hr group="Animals & Nature" style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-amphibian"  />
//                 <hr group="Animals & Nature" style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-reptile"  />
//                 <hr style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-marine"  />
//                <hr style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="animal-bug"  />
//                <hr style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="plant-flower"  />
//                 <hr style={hrStyle} />
//             <SubgroupCategories group="Animals & Nature" subGroup="plant-other"  />
 
             

//       {/* Food & Drink */}
//       <SubgroupCategories group="Food & Drink" subGroup="food-fruit" />
//                   <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="food-vegetable" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="food-prepared" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="food-asian" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="food-marine" />
//          <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="food-sweet" />
//          <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="drink" />
//          <hr style={hrStyle} />
//       <SubgroupCategories group="Food & Drink" subGroup="dishware" />
    

//       {/* Activities */}
//       <SubgroupCategories group="Activities" subGroup="event" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Activities" subGroup="award-medal" />
//          <hr style={hrStyle} />
//       <SubgroupCategories group="Activities" subGroup="sport" />
//          <hr style={hrStyle} />
//       <SubgroupCategories group="Activities" subGroup="game" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Activities" subGroup="arts & crafts" />
  

//       {/* Travel & Places */}
//       <SubgroupCategories group="Travel & Places" subGroup="place-map" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="place-geographic" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="place-building" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="place-religious" />
//           <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="place-other" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="transport-ground" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="transport-water" />
//      <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="transport-air" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Travel & Places" subGroup="hotel" />


//       {/* Objects */}
//       <SubgroupCategories group="Objects" subGroup="phone" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="computer" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="light & video" />
//        <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="book-paper" />
//        <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="money" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="mail" />
//        <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="writing" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="office" />
//       <hr style={hrStyle} />
//       <SubgroupCategories group="Objects" subGroup="lock" />
//       <hr />
//       <SubgroupCategories group="Objects" subGroup="tool" />
//       <hr />
//       <SubgroupCategories group="Objects" subGroup="science" />
//       <hr />
//       <SubgroupCategories group="Objects" subGroup="medical" />
//       <hr />
//       <SubgroupCategories group="Objects" subGroup="household" />
//       <hr />
//       <SubgroupCategories group="Objects" subGroup="other-object" />


//       {/* Symbols */}
//       <SubgroupCategories group="Symbols" subGroup="keycap" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="alphanum" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="geometric" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="av-symbol" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="transport-sign" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="warning" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="arrow" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="religion" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="zodiac" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="math" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="punctuation" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="currency" />
//       <hr />
//       <SubgroupCategories group="Symbols" subGroup="other-symbol" />
      

//       {/* Flags */}
//       <SubgroupCategories group="Flags" subGroup="country-flag" />
//       <hr />
//       <SubgroupCategories group="Flags" subGroup="subdivision-flag" />
//       <hr />

//             </div>