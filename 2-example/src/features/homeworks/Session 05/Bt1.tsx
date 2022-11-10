import React, { useState } from "react";

function Bt1() {
  const [inputNumber, setInputNumber] = useState<number>();
  const [result, setResult] = useState<number | undefined>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNumber(parseInt(e.target.value));
  };
  const handleClick = () => {
    // tach phan xu ly bt1 -> func 
    let res = bt1(inputNumber)
    setResult(res);
  };

  const bt1 = (_inputNumber : number | undefined) =>{
    // tinh toan so gap doi cua tk inputNumber
    return _inputNumber ? _inputNumber * 2 : undefined
  }
  return (
    <>
      <input
        value={inputNumber ? inputNumber : ""}
        onChange={(e) => handleChange(e)}
        type="text"
      />
      <button onClick={handleClick}>Run</button>
      {result}
    </>
  );
}

export default Bt1;
