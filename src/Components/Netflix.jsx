import React from "react";

function Netflix(props){
    // console.log(props);

    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.img} 
                        alt="mypic" 
                        className="card_img" 
                    />
                    <div className="card_info">
                        
                        <span className="card_category">
                            {props.title}
                        </span>
                        <h3 className="card_title">
                            {props.name}
                        </h3>
                        <a href={props.link} 
                            target="_blank">
                            <button>
                                {props.btn}
                            </button>
                        </a>
                    </div>
                
                </div>
                
            </div>
        </>
    );
}

export default Netflix;