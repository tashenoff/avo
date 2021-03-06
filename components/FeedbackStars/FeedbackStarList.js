import React from "react";
import FeedbackStar from "./FeedbackStar";


const FeedbackStarList = ({ rating }) => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((item) => {
        if (item + 1 <= rating) {
          return <FeedbackStar color={"#000"} />;
        }
        return <FeedbackStar color={"#e3e3e3"} />;
      })}
    </>
  );
};

export default FeedbackStarList;
