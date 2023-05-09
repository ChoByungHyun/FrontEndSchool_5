import React, { useState } from "react";
import "./Modal.css";
import Homepage from "./Homepage";
const Modal = ({ modalClose, children }) => {
  return (
    <div className="modal-backdrop">
      <article className="modal">
        {children}
        {/* <h2>홈페이지에 오신 것을 환영합니다!</h2>
        <p>좋은 하루 되세요!!</p> */}
        <button onClick={modalClose}>닫기</button>
      </article>
    </div>
  );
};

export default Modal;
