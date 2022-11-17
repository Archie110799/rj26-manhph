import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "./common/Navigation";
import DetailUser from "./DetailUser";
import FormUser from "./FormUser";
import ListUser from "./ListUser";

function ConfigRoute() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <div>
        <Link to={"/list"} style={{ margin: "20px" }}>
          List
        </Link>
        <Link to={"/form"}>Form</Link>
      </div>
      {/* Config routes */}
      <Routes>
        <Route path="/list" element={<ListUser />} />
        <Route path="/form" element={<FormUser />} />
        <Route path="/form/:id" element={<FormUser />} />
        <Route path="/detail/:id" element={<DetailUser />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 Page not found 😂😂😂</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ConfigRoute;
