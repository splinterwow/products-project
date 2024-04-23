import React, { useState } from "react";
import allProducts from "./data";

function App() {
  const [products, setProducts] = useState(allProducts);

  // delete
  const deleteProduct = (id) => {
    const filterProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(filterProducts);
  };

const filterByBrand = (brand) => {
  if (brand === "all") {
    setProducts(allProducts);
  } else {
    const filterBrand = allProducts.filter((product) => {
      return product.brand === brand;
    });

    setProducts(filterBrand);
  }
};


  return (
    <div className="App">
      <div className="filter-container">
        <select onChange={(e) => filterByBrand(e.target.value)}>
          <option value="all">All products</option>
          {[
            ...new Set(
              allProducts.map((product) => {
                return product.brand;
              })
            ),
          ].map((brand) => {
            return (
              <option
              key={Math.random().toString(36).substr(2, 9)}
              value={brand}
              >
                {brand}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="product-grid">
        {products.map((product) => {
          const {
            id,
            thumbnail,
            title,
            description,
            price,
            discountPercentage,
            brand,
            rating,
          } = product;

          return (
            <li key={id}>
              <img src={thumbnail} alt={description} width={400} />
              <div className="card-body">
                <h3>
                  <b>Title:</b> {title}
                </h3>
                <p>
                  <b>Brand: </b>
                  {brand}
                </p>
                <p>
                  <b>Description:</b> {description}
                </p>
                <p>
                  <b>Price:</b> ${price}
                </p>
                <p>
                  <b>Discount:</b> {discountPercentage}%
                </p>
                <p>
                  <b>Rating: </b> {rating}
                </p>

                <button onClick={() => deleteProduct(id)}>
                  <span className="shadow"></span>
                  <span className="edge"></span>
                  <span className="front text">Delete</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
