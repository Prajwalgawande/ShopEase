import React, { useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import SearchBar from './SearchBar'
import FetchAllProduct from "../helpers/FetchAllProduct";
const ProductPage = () => {
  
  FetchAllProduct();

  return (
    <>
      <SearchBar />
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductPage;
