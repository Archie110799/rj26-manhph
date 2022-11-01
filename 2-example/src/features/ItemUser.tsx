import React from "react";

interface IUser {
  name: string;
  age: number;
}

interface IProps {
  userProps: IUser;
}

function ItemUser(props: IProps) {
  const { userProps } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{userProps.name}</h5>
        <p className="card-text">{userProps.age}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ItemUser;
