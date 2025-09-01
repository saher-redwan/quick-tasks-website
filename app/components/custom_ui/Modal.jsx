"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  children,
  open,
  toggleModal,
  loading = false,
}) {
  const modalElement = useRef();

  const [uID, setUID] = useState();

  function generateUID() {
    return Math.random().toString(18) + "000" + Math.random().toString(18);
  }

  useEffect(() => {
    // this for match client and server values (UID)
    setUID(generateUID);
  }, []);

  useEffect(() => {
    if (document.querySelectorAll(".custom-modal.open").length >= 1) {
      document.body.style.overflow = "hidden";
    } else {
      // One element Modal case
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
    // }, [toggleModal]);
  }, [open]);

  function toggleModalDiv(e) {
    if (
      e.target.classList.contains("custom-modal") &&
      e.target.classList.contains(uID)
    ) {
      !loading && toggleModal();
    }
  }

  return createPortal((
    <div
      ref={modalElement}
      className={`custom-modal ${uID} ${open && "open"}`}
      onClick={toggleModalDiv}
    >
      <div className={`content-modal ${open && "open"}`}>
        {children}
        {/* close div */}
        <div
          className="absolute top-3.5 right-5 cursor-pointer w-[18px] h-[18px]"
          onClick={() => !loading && toggleModal()}
        >
          <button className="close-modal w-full h-full" type="button">
            <span></span>
          </button>
        </div>
      </div>
    </div>
  ), document.getElementById("hidden-items---")
  );
}
