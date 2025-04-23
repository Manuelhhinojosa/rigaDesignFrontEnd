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
      <div className="test">
        {staticText.homeTitle}
        <span>{staticText.homeText}</span>
      </div>
      <div>
        <div>
          <img src={staticImages.homeImageUrl} alt="Home-Image" />
        </div>
        <div>{staticText.homeText}</div>
      </div>
    </div>
  );
};
