import React from "react";
import "./FriendCard.css";

const FriendCard = props =>{
  console.log(props.key);
  return (
  <div onClick={function(){props.userClick(props.id)}} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);
};

export default FriendCard;
