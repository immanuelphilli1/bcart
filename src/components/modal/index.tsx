import { XCircle } from "@phosphor-icons/react";
import React from "react";

interface ModalProps {
  handleClose: () => void;
  Content: React.ReactNode;
  bigModal?: boolean;
  back?: string
}

const Modal: React.FC<ModalProps> = ({
  handleClose,
  Content,
  bigModal,
  back = "bg-white"
}) => (
  <div className="bg-black bg-opacity-50 text-black fixed top-0 left-0 w-full h-full overflow-auto pt-[50px] z-40">
    <div className={`flex flex-col-reverse md:flex-row ${bigModal ? "max-w-5xl" : "max-w-xl"} mx-auto`}>
      <div className={`flex-grow ${back} md:w-1/2 border border-light_grey p-10 rounded-2xl mx-4`}>
        <div>{Content}
        </div>
      </div>
      <div>
        <button className="fill-white hover:fill-red-600" onClick={handleClose}>
          <XCircle size={40} color="" />
        </button>
      </div>
    </div>
  </div>
);

export default Modal;