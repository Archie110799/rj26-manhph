import React, { useEffect, useState } from "react";
// dump data listUser = [{},{},{}]
// dua vao listUser.map -> render UI nhu requirement
// Thay doi data listUser: tu data dump -> data res API
// call API getListUser o componentWillMount
// call API -> res data -> setListUser(data)
function ListUser() {
  const [listUser, setListUser] = useState([]);
  // du lieu gia dump
  useEffect(() => {
    getListUser();
  }, []); // 1 lan , sau lan first-render
  const getListUser = () => {
    fetch(
      "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users?page=1&limit=10",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setListUser(data);
        // setState listuser -> cpn re-render -> listuser = data
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
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
                <button>Detail</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUser;
