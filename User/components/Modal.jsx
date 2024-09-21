import React from "react";

const Modal = ({ modalText, handleOkay, invalidText }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-9/12 lg:w-3/6 bg-white flex items-center justify-center flex-col rounded-lg">
        <div className="w-full py-3 px-4 bg-purple-950 rounded-t-lg text-white text-xl font-semibold">
          <h1>Invalid {invalidText}</h1>
        </div>
        <div className="w-full py-2 px-4">
          <p className="mb-8 mt-2">{modalText}</p>
          <div className="flex justify-end">
            <button
              onClick={handleOkay}
              className="py-1.5 px-6 bg-purple-950 text-white rounded mb-2 ">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
