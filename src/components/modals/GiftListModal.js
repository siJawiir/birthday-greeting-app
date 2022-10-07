import React from "react";

function GiftListModal({ setModalOn }) {
  const handleCancelClick = () => {
    setModalOn(false);
  };
  
  return (
    <div className="bg-gray-200 opacity-90 fixed inset-0 z-50 dark:bg-gray-800">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white dark:bg-gray-900 py-12 px-24 shadow border-2 border-teal-600 rounded-xl">
          <div className="flex text-base mb-8 justify-center font-bold text-gray-900 dark:text-white">
            WHAT DO YOU WANT?
          </div>
          <form>
            <div className="flex text-base mb-8 justify-center font-bold text-gray-900 dark:text-white">
              <input
                type="text"
                className={
                  "md:w-80 md:h-10 md:text-lg h-8 w-60 text-md rounded-lg shadow-md text-center border dark:bg-gray-700 dark:border-gray-900 dark:text-white"
                }
                required
              ></input>
            </div>
            <div className="flex justify-center items-center">
              <button className="rounded-full px-4 py-2 text-white bg-teal-600">
                Send
              </button>
              <button
                className="rounded-full px-4 py-2 ml-2 text-white bg-red-600"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GiftListModal;
