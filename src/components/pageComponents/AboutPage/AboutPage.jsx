import React from "react";

// redux
import { useSelector } from "react-redux";

// styles
import "./AboutPage.scss";

export const AboutPage = () => {
  // redux || state || reducers
  const staticImages = useSelector((state) => state.imagesSlice);
  const staticText = useSelector((state) => state.textSlice);

  return (
    <div className="aboutPageContainer">
      <div>
        <img src={staticImages.aboutImageUrl} alt="aboutImage" />
      </div>
      <div className="aboutTextContainer">
        <p>
          <span>{staticText.aboutText.slice(0, 6)}</span>
          <br />
          {staticText.aboutText.slice(7, 409)}
          <br />
          <br />
          <br />
          <span>{staticText.aboutText.slice(410, 421)}</span>
          <br />
          {staticText.aboutText.slice(422, 1013)}
          <br />
          <br />
          <a href="https://mariselafierro.netlify.app/">
            Visit creator's site & blog
          </a>
        </p>
      </div>
    </div>
  );
};
