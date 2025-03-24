import { use } from "react";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {

  const [render, setRender] = useState("true");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRender(false);
  //   }, 10000)
  // }, [])
  
  useEffect(() => {
    setInterval(() => {
     setRender(r => !r)
    },5000)
  },[])

  return (
    <>
      { render ? <MyComponent/> : <div></div>}
    </>
  );
}

function MyComponent() {
  
  useEffect(() => {
    console.error("Component Mounted!");

    return () => {
      console.log("Component UnMounted!");
    };
  }, []);

  return <div>Form inside MyComponent.</div>;
}

export default App;
