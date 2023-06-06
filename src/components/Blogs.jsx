import React from "react";
import "../css/blogs.css";
import BlogData from "../data/BlogData";
import Carousel from "react-elastic-carousel";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <>
      <div className="container-fluid carousel-container">
        <div className="row pt-4 shadow py-3 mb-5 bg-light rounded">
          <Carousel>
            {BlogData.map((val) => {
              return (
                <>
                  <div className="carousel" key={val.id}>
                    <img
                      className="img-fluid carousel-img"
                      src={val.imgsrc}
                      alt="img"
                    />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Blog />
    </>
  );
};

export default Blogs;
