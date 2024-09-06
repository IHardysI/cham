import React from "react";
import coin from "../assets/coin1.png";
import '../styles/CardInfo.scss'

function CardInfo() {
 return (
  <>
    <div className="card-info card text-bg-dark mb-3 w-100 w-md-50">
      <div className="card-header">Your info</div>
      <div className="card-body">
        <h5 className="card-title">Total pointsters</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  </>
 )
}
export default CardInfo;
