import React from "react";

// syles
import "./FaqPage.scss";

// redux
import { useSelector } from "react-redux";

export const FaqPage = () => {
  // redux || state || reducers
  const staticText = useSelector((state) => state.textSlice);

  return (
    <div className="faqPageContainer">
      <div className="faqContainer">
        <div>faqs</div>
        {staticText.faqs.map((el, i) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};
