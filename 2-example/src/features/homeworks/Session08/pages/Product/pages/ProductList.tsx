import React, { useState, useEffect } from "react";
import axios from "axios";
import FeatureField from "../../components/FeatureField";
import { IProduct } from "../../../interfaces";

export default function ProductList() {
  const [productList, setProductList] = useState<IProduct[]>([]);

  async function fetchData() {
    let url = "https://62ce2903066bd2b699309018.mockapi.io/api/v1/product";
    try {
      let response = await axios.get(url);
      let temp = await response.data;
      setProductList(temp);
    } catch (err: any) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id: number) => {
    axios
      .delete(
        "https://62ce2903066bd2b699309018.mockapi.io/api/v1/product/" + id
      )
      .then(function (response) {
        console.log("delete", id, response);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Color</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product, index) => {
          return (
            <tr key={`product-${product?.id}`}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.color}</td>
              <td>
                <FeatureField
                  itemId={product?.id}
                  name="product"
                  onDelete={() => deleteData(product?.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
