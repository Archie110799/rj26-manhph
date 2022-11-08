import React, { useState } from "react";
import ItemAcc from "./itemAcc";

function Accordions() {
  const [indexAcc, setIndexAcc] = useState(0);
  const ar = [
    {
      title: "acc 1",
      content: "content acc 1",
    },
    {
      title: "acc 2",
      content: "content acc 2",
    },
    {
      title: "acc 3",
      content: "content acc 3",
    },
  ];
  return (
    <>
      {ar.map((item, index) => (
        <ItemAcc key={index} item={item} />
      ))}
    </>
  );
}

export default Accordions;
