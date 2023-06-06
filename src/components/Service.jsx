import React from "react";
import Card from "./Card";
import Sdata from "../data/Sdata";

const Service = () => {
  return (
    <>
      <h1 className="text-center py-3">My Services</h1>
      <div className="container">
        <div className="row gy-4">
          {Sdata.map((val, index) => {
            return <Card key={index} imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
