import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";

import {
  setShowAllProducts,
  setShowAddProduct,
  setShowViewOrders,
} from "../../../redux/slices/staticState/logicSlice.js";

// styles
import "./AdminComponent.scss";

export const AdminComponent = () => {
  // redux || state || reducers
  const dispatch = useDispatch();
  const productionState = useSelector((state) => state.productsStateSlice);
  const allProductsArr = productionState.jewelleryArr.concat(
    productionState.printsArr
  );
  const logic = useSelector((state) => state.logicSlice);

  return (
    <div className="adiminComponentConatainer">
      <div className="adminNavbarContainer">
        <div onClick={() => dispatch(setShowAllProducts())}>
          see all products
        </div>
        <div onClick={() => dispatch(setShowAddProduct())}>add a product</div>
        <div onClick={() => dispatch(setShowViewOrders())}>view orders</div>
      </div>

      <div className="mainAdminContainer">
        {logic.showAllProducts === true &&
        logic.showAddProduct === false &&
        logic.showViewOrders === false ? (
          <div className="allProductsContainer">
            <div className="allProductsTitleContainer">all products</div>
            {allProductsArr.map((prod) => (
              <div className="prodContainer">
                <div className="imgContainer">
                  <img src={prod.img} alt="" />
                </div>
                <div className="textProdContainer">
                  <div className="leftProdContainer">
                    <div>{prod.title}</div>
                    <div>{prod.shortDesc}</div>
                    <div>{prod.cost}</div>
                  </div>
                  <div className="rightProdContainer">
                    <div>{prod.available ? "In Stock" : "Made to order"}</div>
                    <div>edit</div>
                    <div>delete</div>
                    <div>stock: {prod.stock}</div>
                  </div>
                </div>
                <div className="longDescContainer">{prod.longDesc}</div>
                <br />
                **********
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {logic.showAllProducts === false &&
        logic.showAddProduct === true &&
        logic.showViewOrders === false ? (
          <div className="addProductContainer">
            <form>
              <input type="file" name="files" id="files" />
              <input
                type="text"
                placeholder="is it in stock or made to order?"
              />
              <input
                type="text"
                placeholder="what is the name of the product?"
              />
              <input
                type="text"
                placeholder="is it a print or a jewellery piece?"
              />
              <input type="text" placeholder="write a short description" />
              <textarea
                placeholder="write a long description"
                name="longtDesc"
                id="longDesc"
                cols="30"
                rows="10"
              ></textarea>
              <input type="text" placeholder="what is the final price?" />
              <button id="addProdId" onClick={(e) => e.preventDefault()}>
                add product
              </button>
            </form>
          </div>
        ) : (
          ""
        )}

        {logic.showAllProducts === false &&
        logic.showAddProduct === false &&
        logic.showViewOrders === true ? (
          <div className="ordersContainer">
            <div className="ordersTitle">orders</div>
            {productionState.ordersArr.map((order) => (
              <div className="orderContainer">
                <div>***</div>
                <div>{`date: ${order.date}`}</div>
                <div>{`order id: ${order.id}`}</div>
                <div>{`product id: ${order.productId}`}</div>
                <div>{`name of the product: ${order.productName}`}</div>
                <div>{`type: ${order.type}`}</div>
                <div>{`cost: ${order.cost}`}</div>
                <div>{`name of the client: ${order.nameOfClient}`}</div>
                <div>{`email: ${order.email}`}</div>
                <div>{`client's address: ${order.adress}`}</div>

                <div>***</div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
