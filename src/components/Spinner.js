import React from "react";
import { useNavigate } from "react-router-dom";

function Spinner() {
  const navigate = useNavigate();
  return (
    <div className="mx-2 md:mx-auto bg-slate-100 w-96 h-96 rounded-lg md:w-86 shadow-xl flex flex-col justify-center text-sm dark:bg-gray-800">
      <p className="text-base text-center font-bold text-pink-500 dark:text-white pb-8">
        LUCKY WHEEL
      </p>
      <img
        class="w-40 rounded-lg mx-auto mb-8"
        src="https://cdn-icons-png.flaticon.com/512/5727/5727378.png"
        alt="spin now!"
      ></img>
      <div className="w-auto mx-auto flex">
        <button
          className="mt-8 mr-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-600 text-white"
          onClick={() => navigate("/")}
        >
          <p>Gift List</p>
        </button>
        <button
          className="mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-pink-600 text-white"
          onClick={() => navigate("/")}
        >
          <p>Spin Now!</p>
        </button>
      </div>
    </div>
  );
}

export default Spinner;
