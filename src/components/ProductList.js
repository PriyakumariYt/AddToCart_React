

import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Product Page</h1>
      <section className="main-cointainer">
        {products.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <img src={image} alt="images" className="card-media" />
                  <h2 className="card-title"> {name} </h2>
                  <span className="card-description subtitle">
                    {description}
                  </span>
                </div>

                <button className="addToCart_btn" onClick={() => addToCart(curElem)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProductList;

