import React from "react";
import './styles.css'
import * as Icons from "react-icons/fa";

type Keys = keyof typeof Icons;
interface ICustomFaIconProps {
  name : Keys
}
const CustomFaIcon = (props : ICustomFaIconProps) => {
  const FaIcon = Icons[props.name];
  if (!FaIcon) return <p>Icon not found!</p>;

  return <FaIcon />;
};

function ChartBar2({
  text = "TEXT",
  color = "pink",
  iconName = "fa-solid fa-house",
  percentage = 50,
}) {
  return (
    <div className="div__bar">
      <CustomFaIcon name="FaStar" />
      <i className={iconName}></i>
      <span>{text}</span>
      <div className="process__bar">
        <div className="success" style={{ backgroundColor: color, width: (`${percentage}%`) }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default ChartBar2;
