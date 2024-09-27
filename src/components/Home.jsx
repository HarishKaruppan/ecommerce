import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export const Home = () => {
  const [productsList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(true);
  const getProductList = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())

      .then((json) => {
        let updatedJson = json.map((val) => {
          return { ...val, count: 0 };
        });

        setProductList(updatedJson);
        setFilteredProducts(updatedJson);
        setLoading(false);
      })
      .catch(() => {
        console.log("Error while fetching");

        setLoading(false);
      });
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleAddToCart = (eachProduct) => {
    setCartCount(cartCount + 1); // Increment cart count when item is added

    setCart((prev) => {
      const existing = prev.find((item) => item.id === eachProduct.id);

      if (existing) {
        return prev.map((item) =>
          item.id === eachProduct.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { ...eachProduct, count: 1 }];
      }
    });
  };

  console.log("cart", cart);

  console.log("productsList", productsList);
  const handleChange = (e) => {
    setSearchTerm(e.target.value); // Update the search term
    const filtered = productsList.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="home">
      <header className="header">
        <h1>Product Store</h1>
        <input
          type="text"
          name="search"
          id=""
          value={searchTerm} // Controlled input
          onChange={handleChange}
          placeholder="Search products..."
        />
        <div className="rightitems">
          <div className="cart-icon">
            <Link to={"/checkout"} state={cart}>
              🛒
            </Link>

            {cartCount > 0 && <span className="notification">{cartCount}</span>}
          </div>

          <div className="logout">
            <Link to={"/logout"}>Logout</Link>
          </div>
        </div>
      </header>

      <div className="view-toggle">
        <button
          onClick={() => setIsGridView(true)}
          className={isGridView ? "active" : ""}
        >
          Grid
        </button>
        {/* Grid icon */}
        <button
          onClick={() => setIsGridView(false)}
          className={!isGridView ? "active" : ""}
        >
          List
        </button>{" "}
        {/* List icon */}
      </div>

      {loading ? (
        <div className="loader">
          <p>Loading products...</p>
        </div>
      ) : (
        <div
          className={`card-container ${isGridView ? "grid-view" : "list-view"}`}
        >
          {filteredProducts.map((product, index) => {
            return (
              <Card
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
