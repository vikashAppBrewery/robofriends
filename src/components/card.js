import React from "react";
import "./card.css";

const Card = ({ name, email, id, ip_address }) => {
  return (
    <div className="tc bg dib br3 pa3 ma2 grow bw2 shadow-3">
      <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
      <div>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>IP: {ip_address}</p>
      </div>
    </div>
  );
};

export default Card;
