import React, { useState } from "react";

interface IUser {
  userName: string;
  avatar: string;
}

const defaultValue: IUser = {
  userName: "",
  avatar: "",
};

function FormExF() {
  // user={name, avatar, address}
  const [user, setUser] = useState<IUser>(defaultValue);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(user);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userName"
        value={user?.userName ? user.userName : ""}
        onChange={handleChange}
      />
      <input
        type="text"
        name="avatar"
        value={user?.avatar ? user?.avatar : ""}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
}

export default FormExF;
