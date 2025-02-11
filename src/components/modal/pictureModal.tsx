import React from 'react'
import { XCircle } from "@phosphor-icons/react";

interface PicModal {
handleClose: () => void;
  Content: React.ReactNode;
}

const PictureModal: React.FC <PicModal>=({handleClose, Content})=> {
  return (
    <div className="bg-black text-black fixed top-0 left-0 w-full h-full overflow-auto pt-[50px] z-40">
    <div className={`flex flex-col-reverse md:flex-row p-4 w-full justify-center mx-auto`}>
        <div>{Content}
        </div>
      <div>
        <button title="close" type="button" className="fill-white hover:fill-red-600" onClick={handleClose}>
          <XCircle size={40} color="" />
        </button>
      </div>
    </div>
  </div>
  )
}

export default PictureModal