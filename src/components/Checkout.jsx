import { useState } from "react";

import { useLocation } from "react-router-dom";

export const Checkout = () => {
  const [total, setTotal] = useState(0);

  const location = useLocation();

  const products = location.state;

  console.log("location", location);

  console.log("location product", products);

  const totalPrice = products
    .reduce((acc, item, index) => {
      return acc + item.count * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="checkout">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <th className="checkoutItems">S.No</th>

          <th className="checkoutItems">Title</th>

          <th className="checkoutItems">Count</th>

          <th className="checkoutItems">Price ($)</th>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td className="checkoutItems">{index + 1}</td>

                <td className="checkoutItems">{product.title}</td>

                <td className="checkoutItems">{product.count}</td>

                <td className="checkoutItems">
                  ${(product.price * product.count).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>${totalPrice}</h3>
    </div>
  );
};
