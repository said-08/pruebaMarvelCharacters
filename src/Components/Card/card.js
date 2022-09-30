import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";

const Card = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      {data
        ? data.map((i) => {
            return (
              <div className="card" key={i.id} onClick={()=>navigate(`/${i.id}`)}>
                <img
                  className="card-img"
                  src={`${i.thumbnail.path}.${i.thumbnail.extension}`}
                  alt=""
                />
                <div>
                  <h3 className="title">{i.name}</h3>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Card;
