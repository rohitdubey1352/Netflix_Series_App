import React from "react";

function Greerings(){

let currDate = new Date().getHours();

let greetings = '';

if(currDate >= 1 && currDate <12){
    greetings = 'Good Morning';
}else if(currDate >= 12 && currDate < 19){
    greetings = 'Good Afternoon';
}else{
    greetings = 'Good Night';
}

return(
    <>
        <div className="greetings">
            <h2>Hello, Dev, {greetings}</h2>
        </div>
    </>

);


}

export default Greerings;