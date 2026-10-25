import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import seo from "../../routes/seo.json";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";
import ProductList from "./ProductList";
import CopierInfo from "../../assets/images/products/copierInfo.json";

const meta = seo.pages["/products"];
const canonical = seo.siteUrl + "/products";

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
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
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
