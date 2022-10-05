import React from 'react'
import { useNavigate } from 'react-router-dom';

function SpinwheelPage() {
  const navigate = useNavigate();
  return (
    <div className=" mx-2 md:mx-auto bg-slate-50 w-auto h-90 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl break-inside relative overflow-hidden flex flex-col justify-between  space-y-2 text-sm  max-w-[23rem] p-4 text-teal-800">
        <p className="text-base text-center font-bold text-pink-500 pb-8">LUCKY WHEEL!</p>
        <img
          class="w-40 rounded-lg mx-auto mb-8"
          src="https://cdn-icons-png.flaticon.com/512/5727/5727378.png"
          alt="spin now!"
        ></img>
        <div className="w-auto mx-auto flex">
          <button
            className="mt-8 mr-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
            onClick={() => navigate("/")}
          >
            <p>Gift List</p>
          </button>
          <button
            className="mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-pink-500 text-white"
            onClick={() => navigate("/")}
          >
            <p>Spin Now!</p>
          </button>
        </div>
      </div>
    );
}

export default SpinwheelPage