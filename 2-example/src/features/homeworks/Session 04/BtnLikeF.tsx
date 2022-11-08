import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

function BtnLikeF() {
  const [isLike, setIsLike] = useState<boolean>(true);
  const handleClick = () => {
    setIsLike(!isLike);
  };
  
  return (
    <div onClick={handleClick}>
      {isLike ? <AiFillLike /> : <AiOutlineLike />}
    </div>
  );
}

export default BtnLikeF;
