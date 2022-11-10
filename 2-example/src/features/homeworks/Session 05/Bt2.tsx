import React, { useState } from "react";

function Bt2() {
  const [number1, setNumber1] = useState<number>();
  const [number2, setNumber2] = useState<number>();
  const [number3, setNumber3] = useState<number>();
  const [number4, setNumber4] = useState<number>();
  const [res, setResult] = useState<number | string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name1":
        setNumber1(parseInt(event.target.value));
        break;
      case "name2":
        setNumber2(parseInt(event.target.value));
        break;
      case "name3":
        setNumber3(parseInt(event.target.value));
        break;
      case "name4":
        setNumber4(parseInt(event.target.value));
        break;

      default:
        break;
    }
  };

  const handleClick = () => {
    // check null 4 number
    if (number1 && number2 && number3 && number4) {
      let numberMin = number1;
      if (numberMin > number2) {
        numberMin = number2;
      }
      if (numberMin > number3) {
        numberMin = number3;
      }
      if (numberMin > number4) {
        numberMin = number4;
      }
      setResult(numberMin);
    } else {
      setResult("Vui long nhap du 4 so");
    }
  };
  return (
    <>
      <input
        name="name1"
        value={number1 ? number1 : ""}
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <input
        name="name2"
        value={number2 ? number2 : ""}
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <input
        name="name3"
        value={number3 ? number3 : ""}
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <input
        name="name4"
        value={number4 ? number4 : ""}
        type="text"
        onChange={(event) => handleChange(event)}
      />
      <button onClick={handleClick}>Run</button>
      <p>{res}</p>
    </>
  );
}

export default Bt2;
