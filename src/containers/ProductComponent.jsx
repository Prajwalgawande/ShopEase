import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const searchInput = useSelector((state) => state.addSearch.searchInput);
  const filteredProducts = searchInput
    ? products.filter((product) => {
        const { title, category } = product;
        const searchTerm = searchInput.toLowerCase(); // Convert search input to lowercase for case-insensitive search
        return title.toLowerCase().includes(searchTerm) || category.toLowerCase().includes(searchTerm);
      })
    : products;
  const renderList = filteredProducts.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="sixteen wide mobile eight wide tablet four wide computer column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
