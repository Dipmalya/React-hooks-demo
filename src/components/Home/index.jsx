import React, { useState, useEffect } from "react";

const { Home: data } = CONFIG;

const Home = (props) => {
  const { products, fetchProducts } = props;

  const [productData, getProductData] = useState([]);
  useEffect(() => fetchProducts(), []);
  useEffect(() => getProductData(products), [products]);

  return (
    <div>
      <div className="bg-dark py-4">
        <div className="text-white text-center container">
          <h1>{data.heading}</h1>
        </div>
      </div>
      <div className="container-fluid col-md-10 my-5">
        <table className="table table-striped">
          <thead>
            <tr>
              {data.tableHeaders.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.id}>
                {
                  <>
                    <td>
                      <img src={product.image[0]} height="80" width="80" />
                    </td>
                    <td>
                      <span>{product.name}</span>
                    </td>
                    <td>
                      <span>{product.brand}</span>
                    </td>
                    <td>
                      <span>Rs. {product.price}</span>
                    </td>
                  </>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
