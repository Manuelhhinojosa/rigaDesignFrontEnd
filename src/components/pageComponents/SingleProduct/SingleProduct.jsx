import React from "react";
import { Link, useLocation } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleShowfirstImgSingleProd } from "../../../redux/slices/staticState/logicSlice";

// styles
import "./SingleProduct.scss";

export const SingleProduct = () => {
  // redux || state || reducers
  const dispatch = useDispatch();
  const productsArrs = useSelector((state) => state.productsStateSlice);
  const logic = useSelector((state) => state.logicSlice);
  const allProductsArr = productsArrs.jewelleryArr.concat(
    productsArrs.printsArr
  );

  // identifying ID of product
  let location = useLocation();
  const id = location.pathname.slice(6);

  // obtaining the product from the array of all products
  const product = allProductsArr.filter((p) => p.id == id);

  return (
    <div className="singleProductComponent">
      <div className="imgsContainer">
        <img
          className="images"
          src={product[0].img}
          alt="img"
          onClick={() => dispatch(toggleShowfirstImgSingleProd())}
        />
        <img
          className="images"
          src={product[0].img2}
          alt="img"
          onClick={() => dispatch(toggleShowfirstImgSingleProd())}
        />
      </div>
      <div className="singleImageContainer">
        {logic.showfirstImgSingleProd ? (
          <img src={product[0].img} alt="img" />
        ) : (
          <img src={product[0].img2} alt="img" />
        )}
      </div>
      <div className="shopTextContainer">
        <div>{product[0].title}</div>
        <div>{product[0].cost}</div>
        <div>{product[0].available ? "In stock" : "Made to order"}</div>
        <div>{product[0].longDesc}</div>
        <div className="button">Add to cart</div>
        <div className="button">
          <Link className="backLink" to="/shopmenu">
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};
