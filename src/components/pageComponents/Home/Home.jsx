import React from "react";

// redux
import { useSelector } from "react-redux";

// syles
import "./Home.scss";

export const Home = () => {
  // redux || state || reducers
  const staticImages = useSelector((state) => state.imagesSlice);
  const staticText = useSelector((state) => state.textSlice);

  return (
    <div className="homePageContainer">
      <div className="textMedium">
        {staticText.homeTitle}
        <span>
          {staticText.homeText.slice(0, 310)}
          <br /> <br />
          {staticText.homeText.slice(310, 630)}
          <br /> <br />
          {staticText.homeText.slice(630)}
        </span>
      </div>
      <div>
        <div>
          <img src={staticImages.homeImageUrl} alt="Home-Image" />
        </div>
        <div>
          {staticText.homeText.slice(0, 310)}
          <br /> <br />
          {staticText.homeText.slice(310, 630)}
          <br /> <br />
          {staticText.homeText.slice(630)}
        </div>
      </div>
    </div>
  );
};
