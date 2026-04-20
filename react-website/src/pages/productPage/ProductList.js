import { useState } from "react";
import "./ProductList.css";

const images = require.context("../../assets/images/products", true);

const ProductList = ({ products, updatePopup }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    updatePopup(true);
    setSelectedProduct(product);
  };

  const handleExit = () => {
    updatePopup(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products;

  return (
    <div className="productListContainer">
      {selectedProduct ? (
        <div className="product-container-child">
          <div className="left-container-child">
            <img
              src={images(
                selectedProduct[Object.keys(selectedProduct)].image_path
              )}
              alt="pic"
              loading="lazy"
            />
          </div>
          <div className="right-container-child">
            <h1 className="specs">
              {selectedProduct[Object.keys(selectedProduct)].brand}{" "}
              {selectedProduct[Object.keys(selectedProduct)].subCategory}{" "}
              {selectedProduct[Object.keys(selectedProduct)].modelnum}
            </h1>
            <ul className="specs">
              <li>
                Page per minute:&nbsp;
                {selectedProduct[Object.keys(selectedProduct)].ppm}
              </li>
              <li>
                {" "}
                {Object.entries(
                  selectedProduct[Object.keys(selectedProduct)].function
                ).map(([key, value]) => (
                  <li key={key.id}>
                    {" "}
                    {value[0].toUpperCase() + value.slice(1)}{" "}
                  </li>
                ))}
              </li>
              <li>
                {" "}
                {Object.entries(
                  selectedProduct[Object.keys(selectedProduct)].toners
                ).map(([key, value]) => (
                  <li key={key.id}>
                    {" "}
                    {key[0].toUpperCase() + key.slice(1)}: {value.toUpperCase()}{" "}
                  </li>
                ))}
              </li>
            </ul>
            <p className="specs">
              {selectedProduct[Object.keys(selectedProduct)].description}
            </p>
            <div className="buttonDiv">
              <button onClick={handleExit}>Return to List</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="productList">
          {filteredProducts?.map((product) => (
            <div className="productListDetailsdiv">
              <ul
                className="productListDetails"
                key={product.id}
                onClick={() => handleSelectProduct({ product })}
                style={{ cursor: "pointer" }}
              >
                <li>
                  <img src={images(product.image_path)} alt={`${product.brand} ${product.modelnum}`} loading="lazy" />
                </li>
                <li>
                  {product.brand} {product.subCategory}
                </li>
                <li className="prod_modelnum">{product.modelnum}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductList;
