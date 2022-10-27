import React from "react";
import ph from "../temp.svg";
import { Bike } from "../Models/Model";
interface Props {
  bike: Bike;
}

const SingleBikeCard = ({ bike }: Props) => {
  return (
    <div className="d-flex border mb-4 bg-light">
      <div className="w-25">
        <img src={bike.thumb ? bike.thumb : ph} className="w-100" />
      </div>
      <div className="w-25 p-3">
        <h6>{bike.title}</h6>
        <span>
          <b>Description : </b>
          {bike.description}
        </span>
      </div>
      <div className="p-3">
        <div>
          <b>Date of the theft : </b>
          {new Date(bike.date_stolen * 1000).toLocaleDateString()}
        </div>
        <div>
          <b>Location of the theft : </b>
          {bike.stolen_location}
        </div>
      </div>
    </div>
  );
};

export default SingleBikeCard;
