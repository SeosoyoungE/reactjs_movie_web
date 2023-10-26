import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const onChange=(event)=>setKeyword(event.target.value);
  const [keyword,setKeyword]=useState("");
  const onClick=()=>setValue((prev)=>prev+1);
  useEffect(()=>{
    console.log("once run") //한번만 불러옴
  },[]);
  useEffect(()=>{ 
    if(keyword!==""){
    console.log("keyword changed")
    }
  },[keyword]) //키워드가 바뀔때만 불러옴
  useEffect(()=>{ 
    if(counter!==0){
      console.log("counter changed")
    }
  },[counter])
  useEffect(()=>{
    console.log("counter or keyword changed")
  },[keyword,counter])

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search"></input>
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text="click me"/>
    </div>
  );
}

export default App;

