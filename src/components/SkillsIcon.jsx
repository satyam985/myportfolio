import React, { useState } from "react";
import Modal from "./Modal";
import Skills from "../data/Skills";

const SkillsIcon = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeSkill, setActiveSkill] = useState("");

  return (
    <>
      <div className="container py-1">
        <div className="row">
          {Skills.map((val, index) => {
            return (
              <div className="col" key={index}>
                <button
                  className="btn btn-outline-light rounded-circle"
                  onClick={() => {
                    setOpenModal(true);
                    setActiveSkill(val);
                  }}
                >
                  <img
                    className="img-fluid"
                    src={val.imgsrc}
                    alt="react icon"
                    key={index}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {openModal ? (
        <Modal closeModal={setOpenModal} activeSkill={activeSkill} />
      ) : null}
    </>
  );
};
export default SkillsIcon;
