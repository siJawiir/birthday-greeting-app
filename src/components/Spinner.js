import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom/dist";
import GiftListModal from "./modals/GiftListModal";

function Spinner() {
  const data = [{}];
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  const clicked = () => {
    setModalOn(true);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="mx-2 md:mx-auto bg-slate-100 rounded-lg shadow-xl flex flex-col justify-center text-sm dark:bg-gray-800">
      {modalOn && <GiftListModal setModalOn={setModalOn} />}
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["rgb(13 148 136)"]}
        textColors={["#fff"]}
        outerBorderColor={["rgb(31 41 55"]}
        outerBorderWidth={5}
        innerBorderColor={["rgb(31 41 55"]}
        innerBorderWidth={10}
        radiusLineColor={["rgb(31 41 55)"]}
        radiusLineWidth={5}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <div className="w-auto mx-auto flex py-4">
        <button
          className="mt-8 mr-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-600 text-white"
          onClick={clicked}
        >
          <p>Add Gift</p>
        </button>
        <button
          className="mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-pink-600 text-white"
          onClick={handleSpinClick}
        >
          <p>Spin Now!</p>
        </button>
        <button
          className="mt-8 ml-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-600 text-white"
          onClick={() => navigate("/")}
        >
          <p>Back</p>
        </button>
      </div>
    </div>
  );
}

export default Spinner;
