import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You for submitting your resonse.
      Ur Fullname is ${data.fullname}, Contact no. is ${data.phone} & Email Id is ${data.email}`
    );
  };
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex align-items-center justify-content">
          <div className="col-md-6 img-box">
            <img
              className="img-fluid"
              src="https://ik.imagekit.io/satyamimages/tr:w-500/contactUs_qswt8Bjwy.jpg?updatedAt=1631163907811"
              alt="contactUs"
            />
          </div>
          <div className="col-md-6 mx-auto message-box">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  onClick={formSubmit}
                  className="btn btn-primary border-2 rounded-pill pt-2"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
