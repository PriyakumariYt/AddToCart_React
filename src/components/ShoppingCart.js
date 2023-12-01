
// import React from 'react';

// const ShoppingCart = ({
//   cart,
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
// }) => {
//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <div className="cart-container">
//         {cart.map((item) => (
//           <div key={item.product.id} className="cart-item">
//             <img src={item.product.image} alt="images" className="card-media" />
//             <p>{item.product.name}</p>
//             <p>${item.product.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => incrementQuantity(item.product)}>+</button>
//             <button onClick={() => decrementQuantity(item.product)}>-</button>
//             <button onClick={() => removeFromCart(item.product)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <p>Total Amount: ${calculateTotal(cart)}</p>
//     </div>
//   );
// };

// const calculateTotal = (cart) => {
//   return cart.reduce(
//     (total, item) => total + item.product.price * item.product.quantity,
//     0
//   ).toFixed(2);
// };

// export default ShoppingCart;


// src/components/ShoppingCart.js
// import React from 'react';

// const ShoppingCart = ({
//   cart,
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
// }) => {
//   return (
//     <div>
//       <h1>Shopping Cart</h1>
      
//       <div className="cart-container">
//         {cart.map((item) => (
//           <div key={item.product.id} className="cart-item">
//             <img src={item.product.image} alt="images" className="card-media" />
//             <p>{item.product.name}</p>
//             <p>${item.product.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => incrementQuantity(item.product)}>+</button>
//             <button onClick={() => decrementQuantity(item.product)}>-</button>
//             <button onClick={() => removeFromCart(item.product)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <p>Total Amount: ${calculateTotal(cart)}</p>
//     </div>
//   );
// };

// const isNumerical = (value) => {
//   return !isNaN(parseFloat(value)) && isFinite(value);
// };

// const calculateTotal = (cart) => {
//   return cart
//     .filter((item) => isNumerical(item.quantity) && isNumerical(item.product.price))
//     .reduce((total, item) => total + item.product.price * parseInt(item.quantity), 0)

//     .toFixed(2);
// };


// export default ShoppingCart;

import React from 'react';

const ShoppingCart = ({
  cart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const recalculateTotal = () => {
    return calculateTotal(cart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.image} alt="images" className="card-media" />
            <p>{item.product.name}</p>
            <p>${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item.product)}>+</button>
            <button onClick={() => decrementQuantity(item.product)}>-</button>
            <button onClick={() => removeFromCart(item.product)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total Amount: ${recalculateTotal()}</p>
    </div>
  );
};

const isNumerical = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

const calculateTotal = (cart) => {
  return cart
    .filter((item) => isNumerical(item.quantity) && isNumerical(item.product.price))
    .reduce((total, item) => total + item.product.price * parseInt(item.quantity), 0)
    .toFixed(2);
};

export default ShoppingCart;
