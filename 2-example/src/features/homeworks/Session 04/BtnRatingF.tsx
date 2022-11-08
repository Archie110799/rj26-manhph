import { useMemo, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./styles.module.css";
function BtnRatingF() {
  const [star, setStar] = useState(0);
  const arrDefault = useMemo(() => [1, 2, 3, 4, 5], []);
  const arr = [1, 2, 3, 4, 5];
  const handleClick = (item: number) => {
    setStar(item);
  };
  return (
    <div>
      {arrDefault.map((item) => {
        return (
          <span
            className={styles.font__size__70}
            key={item}
            onMouseEnter={() => handleClick(item)}
          >
            {item <= star ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
}

export default BtnRatingF;
