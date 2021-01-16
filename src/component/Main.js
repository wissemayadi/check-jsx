import React from 'react';
import '../style.css';
import  ImageSrc from "../imageInSrc.png";

const Convert=()=>{

return(
       <div>
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}> 
        <h1 className="titleRed">Wissem</h1>
        <br />

       <img src={ImageSrc} />
       <br />
       <img src="/imageInPublic.jpg" />
       </div>
       <video width={320} height={240}controls />

     <source src="myVideo.mp4" type="video/mp4"/>

     </div>
   
    

    
)}

export default Convert ;