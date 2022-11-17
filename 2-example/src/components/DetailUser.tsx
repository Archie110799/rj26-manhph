import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface IUser {
  avatar: string;
  code: string;
  email: string;
  id: string;
  name: string;
}

function DetailUser() {
  let params = useParams();
  const [user, setUser] = useState<IUser>();
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
        setUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={user?.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">
            {user?.email}
          </p>
          <Link to={'/form/' + user?.id} className="btn btn-primary">
            Update
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailUser;
