import { useState,useEffect } from 'react'

export default function Useeffect() {
  const [count,setCount]=useState(0);
  const [calculation, setCalculation] = useState(0);


  useEffect(() => {
    setCalculation(() => count * 2);
  },[count]); 
 
  // useEffect(()=>{
  //   let timer=setTimeout(()=> {
  //     setCalculation(() => count * 2);
  //   },1000);
  //   return ()=>clearTimeout(timer)

  // },[count])

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );

}


