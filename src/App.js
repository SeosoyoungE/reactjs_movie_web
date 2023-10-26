import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const onChange=(event)=>setKeyword(event.target.value);
  const [keyword,setKeyword]=useState("");
  const onClick=()=>setValue((prev)=>prev+1);
  console.log('all time run')
  useEffect(()=>{
    console.log("call the API once")
  },[]);
  useEffect(()=>{
    console.log(keyword)
  },[keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text="click me"/>
    </div>
  );
}

export default App;

