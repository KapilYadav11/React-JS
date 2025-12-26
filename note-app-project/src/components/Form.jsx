import { useState } from "react";
import Card from "./Card";
import "remixicon/fonts/remixicon.css";

const Form = () => {
  
  const [tittle, setTittle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault(e);
    
    const copyTask = [...task];

    copyTask.push({tittle, details})

    setTask(copyTask)

    setTittle('')
    setDetails('')
  }
  return (
   
    <div>
      <div className="  ml-40 w-fit h-fit bg-mint-500 text-white rounded-2xl px-2  hover:bg-sky-100 overflow-hidden">
        <h1 className="px-9 py-3 text-2xl text-shadow-orange font-bold inline-block  transition-all duration-300 hover:scale-150  hover:text-orange-200 ">
          Add <span className="text-gray-400">NOTES</span>
          <span className="inline-block w-5 h-5 transition-all duration-300 hover:scale-150 hover:text-black ml-1">
            <i className="ri-arrow-down-line text-xl"></i>
          </span>
        </h1>
      </div>
      <div className="py-4  ">

        <form onSubmit={(e) => {
           handleSubmit(e)
        }}
        className="h-130 w-180 mb-2 flex flex-col gap-10 rounded-4xl  shadow-2xl bg-gradient ">
          <div className=" rounded-4xl bg-amber-500">
          
           <input 
           className="py-6 px-3 text-3xl font-bold text-shadow-cyan-400 outline-none" type="text" placeholder="Notes heading"
           value={tittle}
           onChange={(e) => {
            setTittle(e.target.value)
           }}
           />
          </div>
          
          <textarea className="py-2 px-22 text-xl font-semibold h-100 w-full rounded-4xl bg-yellow-100" type="text" placeholder="Notes content"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          />
          <button className=" h-fit w-40 ml-70 mb-2 active:bg-gray-500 bg-blue-300 text-xl font-semibold rounded-full">ADD NOTES</button>
        </form>
      </div>
      <Card task={task} />
    </div>
  );
};

export default Form;
