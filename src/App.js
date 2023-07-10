import './App.css';
import {useState} from "react";
import {sculptureList} from "./components/data.js"


export default function App() {
  const [index,setIndex]=useState(0);
  const [showMore, setshowMore]=useState(false);

  function handleClick() {
    if(index<sculptureList.length-1){
      setIndex(index+1)
    }
    else{
      setIndex(index-index)
    }
    
  }
  function handleMoreClick(){
    setshowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className='container'>
      <button className="nextBtn" onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>

      <button className="detailBtn" onClick={handleMoreClick}>
        {showMore? "Hide": "Show"} details
      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  );
}


