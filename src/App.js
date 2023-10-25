import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const onClick=()=>setValue((prev)=>prev+1);
  console.log('all time run')
  useEffect(()=>{
    console.log("call the API once")
  },[]);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text="click me"/>
    </div>
  );
}

export default App;

