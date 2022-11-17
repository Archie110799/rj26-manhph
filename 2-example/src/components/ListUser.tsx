import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// dump data listUser = [{},{},{}]
// dua vao listUser.map -> render UI nhu requirement
// Thay doi data listUser: tu data dump -> data res API
// call API getListUser o componentWillMount
// call API -> res data -> setListUser(data)
function ListUser() {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState([]);
  // du lieu gia dump
  useEffect(() => {
    getListUser();
  }, []); // 1 lan , sau lan first-render
  const getListUser = () => {
    let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
        // setState listuser -> cpn re-render -> listuser = data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // viet func handle Delete (nhan userId tuong ung vs row)
  // call API delete user
  // call xoa API thanh cong -> update ListUser (setState -> re-render)
  const handleDelete = (userId: number) => {
    console.log("delete", userId);
    let data = {
      name: "giatri input name",
      avatar: "gia tri cua input avatar",
    };
    let url =
      "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // update list user -> call getListUser();
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const gotoDetail = (userId : number) =>{
    console.log(userId);
    navigate('/detail/' + userId);
  }

  
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Url Avatar</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {listUser.map((user: any) => {
          return (
            <tr key={`user-${user.id}`}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td className="text-break">{user.avatar}</td>
              <td>
                <button onClick={()=>gotoDetail(user.id)}>Detail</button>
                {/* <Link to={'/detail/' +user.id}>Detail</Link> */}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUser;
