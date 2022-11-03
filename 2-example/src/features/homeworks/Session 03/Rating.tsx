import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const MAX_STAR = 5;

function Rating() {
  const [star, setStar] = useState(4);
  const arrStar = [1, 2, 3, 4, 5]; // Array<number>
  
  const renderStar = () => {
    let result = [];
    // FOR IN so 1
    for (let index = 0; index < MAX_STAR; index++) {
      // index = 0 -> setStar(1) -> setStar(index+1)
      // index = 1 -> setStar(2) -> setStar(index+1)
      // index = 2 -> setStar(3)
      // index =3
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiFillStar />
        </span>
      );
    }
    // FOR in so 0
    for (let index = star; index < MAX_STAR; index++) {
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiOutlineStar />
        </span>
      );
    }
    return result;
  };
  return (
    <div>
      {/* {renderStar()} */}
      {/* check null arrStar */}
      {/* index : 0 -> arrStar.length = 5  */}
      {arrStar?.map((index) => {
        return index <= star ? (
          <AiFillStar key={index} onClick={()=>setStar(index)}/>
        ) : (
          <AiOutlineStar key={index} onClick={()=>setStar(index)}/>
        );
      })}
      
    </div>
  );
}

export default Rating;
