import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const SampleModal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charchode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!props.show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div class="modalTest" onClick={props.onClose}>
      <div
        class="w-3/4 max-w-lg bg-neutral p-5 rounded-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 class="text-2xl font-semibold pb-2">{props.title}</h2>

        <p class="text-sm" dangerouslySetInnerHTML={{ __html: props.text }} />
        <div class="flex justify-end">
          <button onClick={props.onClose} class="btn btn-info m-3 btn-xs">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SampleModal;
