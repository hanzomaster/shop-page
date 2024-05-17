import React from "react";
import { useEffect, useState } from 'react';
function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn btn-primary btn-sm rounded-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
        In mã QR
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" justify-center p-5 border-b border-solid border-blueGray-200 rounded-t items-center flex flex-row">
                  <h3 className="text-3xl font-semibold">
                    Quét để thanh toán
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 <img src="/QR.png"></img>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="btn btn-primary btn-sm rounded-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
export default Modal
