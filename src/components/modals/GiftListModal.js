import React from "react";
import { useState } from "react";

function GiftListModal({ setModalOn, addGift }) {
  const [gift, setGift] = useState("");
  const handleCancelClick = () => {
    setModalOn(false);
  };
  const handleGiftSubmit = (e) => {
    e.preventDefault();
    addGift({
      option: gift,
    });
    setGift("");
  };

  return (
    <div className="bg-gray-200 opacity-90 fixed inset-0 z-50 dark:bg-gray-800">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white dark:bg-gray-900 shadow border-2 border-teal-600 rounded-xl">
          <div className="flex justify-end items-end pr-1 pt-1">
            <button
              className="px-2 py-2 ml-2 text-red-600 dark:text-red-500"
              onClick={handleCancelClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-7 h-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex text-base mb-8 justify-center font-bold text-gray-900 dark:text-white my-8 mx-20">
            WHAT DO YOU WANT?
          </div>
          <div className="pb-10">
            <form onSubmit={handleGiftSubmit}>
              <div className="flex text-base mb-8 justify-center font-bold text-gray-900 dark:text-white">
                <input
                  type="text"
                  id="gift"
                  value={gift}
                  onInput={(e) => setGift(e.target.value)}
                  className={
                    "md:w-80 md:h-10 md:text-lg h-8 w-60 text-md rounded-lg shadow-md text-center border dark:bg-gray-700 dark:border-gray-900 dark:text-white"
                  }
                  required
                  autoFocus
                  placeholder="Input here... "
                  maxLength={20}
                ></input>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="rounded-full px-4 py-2 text-white bg-teal-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftListModal;
