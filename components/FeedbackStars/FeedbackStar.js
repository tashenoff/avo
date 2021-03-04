import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



import React from 'react'

const FeedbackStar = ({color, title, size}) => {
    
    return (
        <FontAwesomeIcon title={title} color={color} size={size} icon={faStar}/>
    )
}

export default FeedbackStar
