import { useEffect, useState } from "react";

function Hello(){
  const destroyFn=()=>{
    console.log("destroy")
  }
  const effectFn=()=>{
    console.log("created~") //생성될때 호출
    return destroyFn; //return값에 넣어주면 삭제될때 호출
  }
  useEffect(effectFn,[])
  return <h1>Hello</h1>
}

function App(){
    const [showing,setShowing]=useState(false);
    const onClick=()=>setShowing((prev)=>!prev);
    return <div>
      {showing?<Hello/>:null}
        <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
    </div>;
}

export default App;