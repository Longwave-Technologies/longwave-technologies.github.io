import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";
import ProductList from "./ProductList";
import CopierInfo from "../../assets/images/products/copierInfo.json";

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(CopierInfo);
  const [superParentUpdatePopup, setSuperParentUpdatePopup] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = CopierInfo.filter(
      (product) =>
        product.parts?.toLowerCase().includes(query?.toLowerCase()) ||
        product.modelnum?.toLowerCase().includes(query?.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query?.toLowerCase()) ||
        product.subCategory?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="content">
      <Helmet>
        <title>Copiers & Printers for Sale | Longwave Technologies</title>
        <meta name="description" content="Browse our catalog of new and refurbished copiers and printers from Canon, Kyocera, Sharp, Toshiba, and more. Sales, leasing, and service on Long Island." />
        <meta property="og:title" content="Copiers & Printers for Sale | Longwave Technologies" />
        <meta property="og:description" content="Browse our catalog of new and refurbished copiers and printers from Canon, Kyocera, Sharp, Toshiba, and more. Sales, leasing, and service on Long Island." />
        <link rel="canonical" href="https://longwave-technologies.github.io/products" />
      </Helmet>
      <Fade>
        <div className="product-container-parent">
          {!superParentUpdatePopup && (
            <div className="left-container-parent">
              <div className="productSearch-parent">
                <input
                  type="search"
                  id="mySearch"
                  name="q"
                  placeholder="Search for products"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>
          )}
          <ProductList
            products={filteredProducts}
            updatePopup={setSuperParentUpdatePopup}
          />
        </div>
      </Fade>
    </div>
  );
}
export default ProductPage;
