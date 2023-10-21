import React, { useState, useEffect, useRef } from "react";
import "../../styles/styles.css";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";
import ProductInfo from './ProductInfo';
import ProductList from './ProductList';
import Category from '../../assets/images/products/productCategories.json';
import CopierInfo from '../../assets/images/products/copierInfo.json';

function ProductPage() {
  const [products, setProducts] = useState(CopierInfo);
  const [filteredProducts, setFilteredProducts] = useState(CopierInfo);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(Category); // You can define filter options here

  useEffect(() => {
    // Simulate fetching product data from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch(CopierInfo);
        console.log(response);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilterChange = (filterName, value) => {
    // Update filter values
    const updatedFilters = { ...filters, [filterName]: value };
    setFilters(updatedFilters);

    // Apply filters to products
    const filtered = products.filter((product) => {
      // Implement your filtering logic here based on filter values
      return (
        (!updatedFilters.category || product.category === updatedFilters.category) &&
        (!updatedFilters.price || product.price <= updatedFilters.price)
      );
    });

    setFilteredProducts(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = CopierInfo.filter((product) =>
      product.modelnum?.toLowerCase().includes(query?.toLowerCase())
    );
    console.log("cateogory"+Category);
    console.log("query"+query);
    console.log("filtered"+filtered.modelnum);
    console.log("setProducts"+setProducts(filtered));
    return setFilteredProducts(filtered);
  };




  const uppercaseFirst= (word) => {
    return word[0].toUpperCase() + word.slice(1);
  }


  const handleProductClick = (product) => {
    alert(product.target.value)
    setProducts(product.target);
  };

  return (
    <div className="content">
      <div className="product-container">
        <div className="left-container">
          <div className="productSearch">
            <input
              type="search"
              id="mySearch"
              name="q"
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value) }
            />
            {/* <button type="submit">Search</button> */}
          </div>

          {/* <div className="productFilter">
                {filters?.map((obj, index) => (
                  <ul className="filterSubheading">{uppercaseFirst(Object.keys(obj))}
                  {obj[Object.keys(obj)].map((item,i)=>(
                    <li key={i}>
                    <label>
                      <input type="checkbox" 
                        value={filteredProducts}
                      />
                        <span>{uppercaseFirst(item)}
                        </span>
                      </label>
                    </li>
                  ))}
                  </ul>
                )) }
            <button className="filterSearch"
              // filteredProducts={handleFilterChange()}
            >Search</button>
          </div> */}
        </div>

        <div className="right-container">

          {filteredProducts?.map((selectedProduct) => (
          <ul className="productListDetails"  key={selectedProduct.id} 
            onClick={handleProductClick}
          > 
            <li>{selectedProduct.image}</li>
            <li>{selectedProduct.brand} {selectedProduct.subCategory}</li>
            <li>{selectedProduct.modelnum}</li>
  
          </ul>
        ))}
          
          {/* <ProductList className="productList" 
            products={products} 
            /> */}

        </div>
      </div>
    </div>
  );
}
export default ProductPage;
