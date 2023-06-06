import React from "react";
import BlogContent from "../data/BlogContent";
import "../css/blog.css";

export default function Blog() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center fw-bold mb-4">
          Photography Tips and Techniques
        </h1>
        <p className="text-center w-75 mx-auto fw-bold">
          I am sharing few ideas that i personally used to get few nice shots
          with my camera.No matter u have a Smartphone or a DSLR, if u know what
          you want to shoot then it will least bother you.
        </p>
        {BlogContent.map((val) => {
          return (
            <>
              <div
                className={`row content-row d-flex justify-content-between align-items-center p-2 my-3 ${
                  val.id % 2 === 0 ? " flex-row" : " flex-row-reverse"
                }`}
              >
                <div
                  className="col-md-5 pb-2 d-flex justify-content-center img-box"
                  key={val.id}
                >
                  <img
                    className="img-fluid mb-2 rounded imageBox"
                    src={val.imgsrc}
                    alt=""
                  />
                </div>
                <div className="col-md-7 text-center my-3">
                  <h2>{val.title}</h2>
                  <p className="fs-6 fw-bold">{val.content}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
