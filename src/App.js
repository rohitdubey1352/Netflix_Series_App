import './App.css';
import Greerings from './Components/Greetings';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Netflix from './Components/Netflix';
import Sdata  from './Sdata';


function App() {
  return (
    <>

      <div className='Main_div'>
        <Navbar />

        <h1 className='list'>LIST OF TOP 3 <span>NETFLIX</span> SERIES</h1>

        <div className='Netflix_cards'>
          <Netflix 
            img={Sdata[0].img}
            title={Sdata[0].title}
            name={Sdata[0].name}
            link={Sdata[0].link}
            btn={Sdata[0].btn} 
          />

        </div>

      </div>

    </>
    );
}

export default App;
