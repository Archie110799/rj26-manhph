import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// form  user { name , avatar}
// component FormUser
// Create Form
// form , 2 input (inputName, inputAvatar), btnSubmit
// click Submmit -> log value 2 input
// let data = { name : 'inputName', avatar:'inputAvatar'}
// truyen data vao body cua fetch
// Tao thanh cong -> log(success)
// That bai -> log(error)
function FormUser() {
  const [userName, setUserName] = useState();
  const [userAvatar, setUserAvatar] = useState();
  let params = useParams();
  useEffect(() => {
    getUser(params.id);
  }, []);

  const getUser = (userId: string | undefined) => {
    let url =
      "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data?.name)
        setUserAvatar(data?.avatar)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", userName, userAvatar);
    // khoi tao object data
    let data = {
      name: userName,
      avatar: userAvatar,
    };
    if(params.id){
      updateUser(data, params.id)
    }else{
      postUser(data)
    }
    
  };

  const updateUser = (data : any, userId : string) => {
    // call api postUser
    let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const postUser = (data : any) => {
    // call api postUser
    let url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
      case "avatar":
        setUserAvatar(event.target.value);
        break;

      default:
        break;
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userName ? userName : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        onChange={handleChange}
        value={userAvatar ? userAvatar : ""}
        name="avatar"
      />
      <input type="submit" />
    </form>
  );
}

export default FormUser;
