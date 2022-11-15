import React, { useState } from "react";
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
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", userName, userAvatar);
    // khoi tao object data
    let data = {
      name: userName,
      avatar: userAvatar,
    };
    postUser(data)
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
