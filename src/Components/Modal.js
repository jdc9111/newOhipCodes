import React from "react";

const Modal = (props) => {
  return (
    <div id={props.id} class="modal">
      <div class="modal-box">
        <h2 class="text-xl text-semibold pb-2">{props.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.text }} />
        <div class="modal-action">
          <a href="#first" class="btn">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
