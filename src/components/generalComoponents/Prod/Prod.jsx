import React from "react";

// react router v6
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

//styles
import "./Prod.scss";

export const Prod = () => {
  // redux || state || reducers
  const logic = useSelector((state) => state.logicSlice);
  const productsArrs = useSelector((state) => state.productsStateSlice);

  return (
    <>
      {logic.showJewellery
        ? productsArrs.jewelleryArr.map((j) => (
            <div className="Container">
              <div className="imgContainer">
                <Link to={`/shop/${j.id}`}>
                  <img src={j.img} alt="" />
                </Link>
              </div>
              <div className="textContainer">
                <div className="left">
                  <div>{j.title}</div>
                  <div>{j.shortDesc}</div>
                  <div>{j.cost}</div>
                </div>
                <div className="right">
                  <div>{j.available ? "In Stock" : "Made to order"}</div>
                  <div className="addButton">Add to cart</div>
                </div>
              </div>
            </div>
          ))
        : productsArrs.printsArr.map((p) => (
            <div className="Container">
              <div className="imgContainer">
                <Link to={`/shop/${p.id}`}>
                  <img src={p.img} alt="" />
                </Link>
              </div>
              <div className="textContainer">
                <div className="left">
                  <div>{p.title}</div>
                  <div>{p.shortDesc}</div>
                  <div>{p.cost}</div>
                </div>
                <div className="right">
                  <div>{p.available ? "In stock" : "Made to order"}</div>
                  <div>Add to cart</div>
                </div>
              </div>
            </div>
          ))}
    </>
  );
};
