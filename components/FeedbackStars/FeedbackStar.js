import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const FeedbackStar = ({ color, size }) => {
  return <FontAwesomeIcon color={color} size={size} icon={faStar} />;
};

export default FeedbackStar;
