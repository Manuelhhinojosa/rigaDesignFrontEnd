import React from "react";

//styles
import "./ReviewsPage.scss";

// ract icons
import { FaStar } from "react-icons/fa";

// redux
import { useSelector } from "react-redux";

export const ReviewsPage = () => {
  // redux || state || reducers
  const staticText = useSelector((state) => state.textSlice);

  return (
    <div className="reviewsPageContainer">
      <div className="reviewsContainer">
        <div>reviews</div>
        {staticText.reviews.map((el, i) => (
          <div key={i}>
            "{el.review}"<br /> <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <br />
            <img src={el.img} alt="reviewImg" />
            <img src={el.img2} alt="revireImg2" />
            <br />
            <span>By {el.author}.</span>
          </div>
        ))}
      </div>
    </div>
  );
};
