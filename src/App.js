import { useState } from "react";

function Square(){
  const [value, setValue] = useState(null);

  function handleClick(){

    setValue('X');
    console.log(" CLICKED ")
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}



export default function board() {
  return (
    <>
      <div className="board-row">
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
      </div>
      <div className="board-row">
      <Square value={4}></Square>
      <Square value={5}></Square>
      <Square value={6}></Square>
      </div>
      <div className="board-row">
      <Square value={7}></Square>
      <Square value={8}></Square>
      <Square value={9}></Square>
      </div>
    </>
  );
}