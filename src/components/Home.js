import React from 'react'
import '../cssfiles/homes.css'
import SimpleImageSlider from "react-simple-image-slider";

const images = [{
    url: "realestate-1.jpg"
  },
  {
    url: "realestate-3.jpg"
  },
  {
    url: "realestate-4.jpg"
  },
  {
    url: "realestate-6.jpg"
  },
];


function Home() {
  return ( 
    

    <div className = "dev">
     WELCOME TO EASY SPACE  
    
    Welcome to Easy spce the one stop solution
    for all your realestate needs We are the leading corporates in the domain of realestate

    We offer all services in the path of finding your dream space which perfectly matches your vibe.We have the best team who could analyze your needs perfectly and could suggest some awesome recomendations or can even design the best plan
    for your dream space.We also have more than 120 companies in our collab 's and we can find the best space with in a snap of a finger.  
    </div>
  )

}
export default Home;