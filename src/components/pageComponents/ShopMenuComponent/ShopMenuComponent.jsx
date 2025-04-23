import React from "react";

// React Router
import { Link } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setShowJewelleryToTrue,
  setShowJewelleryTofalse,
} from "../../../redux/slices/staticState/logicSlice";

// styles
import "./ShopMenuComponent.scss";

export const ShopMenuComponent = () => {
  // redux || state || reducers
  const dispatch = useDispatch();
  const staticImages = useSelector((state) => state.imagesSlice);

  return (
    <div className="shopMenuLinkBigScreen">
      <div>
        <Link
          to="/shopproducts"
          onClick={() => dispatch(setShowJewelleryTofalse())}
          className="shopMenuLinkBigScreenLink"
        >
          prints
        </Link>

        <Link
          to="/shopproducts"
          onClick={() => dispatch(setShowJewelleryToTrue())}
          className="shopMenuLinkBigScreenLink"
        >
          jewellery
        </Link>
      </div>

      <div>
        <Link
          className="shopMenuLink"
          to="/shopproducts"
          onClick={() => dispatch(setShowJewelleryTofalse())}
        >
          <img src={staticImages.mainShopMenuImageImageUrl} alt="linkImaage" />
        </Link>
      </div>
      <div>
        <Link
          className="shopMenuLink"
          to="/shopproducts"
          onClick={() => dispatch(setShowJewelleryToTrue())}
        >
          <img src={staticImages.mainShopMenuImageImageUrl2} alt="linkImaage" />
        </Link>
      </div>
    </div>
  );
};
