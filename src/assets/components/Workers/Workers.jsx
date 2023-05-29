import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const Workers = (props) => {
  const [entredWorkerName, SetEntredWorkerName] = useState("");
  const [entredWorkerWage, SetEntredWorkerWage] = useState("");
  const [error, setError] = useState()

  const minimumWage = 2000

  const workerNameChangeHandler = (e) => {
    SetEntredWorkerName(e.target.value);
  };
  const workerWageChangeHandler = (e) => {
    SetEntredWorkerWage(e.target.value);
  };
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      entredWorkerName.trim().length === 0 
    ) {
      setError({
        title:"Duhet te Shenohet Emri!",
      message: "Ju lutem shenoje emrin e punetorit"})
      return;
    }

    if(+entredWorkerWage < minimumWage){
      setError({
        title:"Paga duhet te shenohet!",
      message: `Paga duhet te jete min-${minimumWage}€`})
      return
    }
    
    props.setWorkers((prevState)=> [
      {
        id: Math.random() * 1000,
        name:entredWorkerName,
        wage:entredWorkerWage
      },
      ...prevState,
    ])
    SetEntredWorkerName("");
    SetEntredWorkerWage("");
    
  };
  const errorHandler = ()=>{
    setError(null)
   
  };
  return (
    <div className="">
      {error && <ErrorModal onConfirm={errorHandler} error={error}/>}
    <Card className="mt-10 ">
      <form action="" className="flex flex-col" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="text-left text-black">
          Sheno Emrin
        </label>
        <input
          type="text"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Emri:"
          id="name"
          onChange={workerNameChangeHandler}
          value={entredWorkerName}
        />
        <label htmlFor="wage" className="text-left text-black">
          Paga
        </label>
        <input
          type="number"
          className="max-w-[40rem] w-full mx-auto border p-2"
          placeholder="Paga:"
          id="wage"
          onChange={workerWageChangeHandler}
          value={entredWorkerWage}
        />
        <Button className=" mt-2" type="submit">
          Add
        </Button>
      </form>
    </Card></div>
   
    
  );
};

export default Workers;
