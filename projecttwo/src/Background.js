import React from "react";
import { useEffect } from "react";

function Background() {
   
    useEffect(() => {
  
        document.title = 'The Local Project';
      }, []);
    
    return (
        <main className="topHeaderContainer"> 
            <div className="mainImageTxt">
                <h1>Issue No. 16<br />Trio out now</h1>
            </div>
            <img className="mainImg" src="IMAGES/Main-one.gif" alt="Issue No.16 Trio cover" />
        </main>
    );
}

export default Background;
