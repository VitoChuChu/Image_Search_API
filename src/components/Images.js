import React from "react";

const Images = ({ data }) => {
  return (
    <div className="col card img-thumbnail m-3">
      <img
        src={data.src.large}
        alt="Img"
        className="card-img-top  grow"
        style={{ width: "20rem", height: "21rem" }}
      />
      <div className="card-body">
        <p>{data.photographer}</p>
        <a target="_blank" href={data.src.large}>
          Download Image
        </a>
      </div>
    </div>
  );
};

export default Images;
