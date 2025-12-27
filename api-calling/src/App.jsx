import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  // AXIOS API
  // const  getData = async() =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response.data)
  // }

  // FETCH API
  // const getData = async() =>{
  //   const response = await fetch ('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data)
  // }

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  //}

  return (
    <div>
      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map((elem, idx) => {
          return <div><h3>hello {elem.author} {idx}</h3></div>;
        })}
      </div>
    </div>
  );
};

export default App;
