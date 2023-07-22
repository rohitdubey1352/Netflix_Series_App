import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './App.css';
import Navbar from './Components/Navbar';
import Netflix from './Components/Netflix';
import Sdata  from './Sdata';

// function ncard(val) {
//   // console.log(val);
  
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='Main_div'>
      <Navbar />
        <h1 className='list'>LIST OF TOP 3 <span>NETFLIX</span> SERIES</h1>
        
        <div className="main_card__grp">
        {Sdata.map((val, index) => {
          
          return(
                <div className='row'>
                  <div className="column">
                    <Netflix 
                      img={val.img}
                      title={val.title}
                      name={val.name}
                      link={val.link}
                      btn={val.btn} 
                    />
                  </div>
                </div>
          );

      })}
        </div>


    </div>

  </React.StrictMode>
);
