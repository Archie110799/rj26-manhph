import React from "react";
import logo from "./logo.svg";
import "./App.css";
import JSX from "./2-example/1-JSX";

interface IUser {
  name : string,
  age : number,
  address: string
}

function App() {
  const arr : Array<number> = [1,2,3,4]
  const listUser : Array<IUser> = [
    {
      name: "manh",
      age: 25,
      address: "38 Yen Bai",
    },
    {
      name: "manh1",
      age: 26,
      address: "38 Yen Bai",
    },
    {
      name: "manh2",
      age: 27,
      address: "38 Yen Bai",
    }
  ]

  return (
    <div className="w-50 m-auto">
      {
        listUser?.map((user : IUser)=>{
          return (
            <div key={user.age}>
              <p>{user.name}</p>
              <p>{user.address}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
