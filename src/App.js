import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] = useState(0);
  const onChange=(event)=>setKeyword(event.target.value);
  const [keyword,setKeyword]=useState("");
  const onClick=()=>setValue((prev)=>prev+1);
  
  //한번만 불러옴
  useEffect(()=>{
    console.log("once run") 
  },[]);
  //키워드가 바뀔때만 불러옴
  useEffect(()=>{ 
    if(keyword!==""){
    console.log("keyword changed")
    }
  },[keyword]) 
  useEffect(()=>{ 
    if(counter!==0){
      console.log("counter changed")
    }
  },[counter])
  //둘 중 하나라도 키워드가 바뀔때만 불러옴
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

