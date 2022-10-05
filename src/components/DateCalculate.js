import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import updateAction from "../redux/updateActions";

function DateCalculate() {
  const { state } = useStateMachine(updateAction);
  const keys = Object.keys(state);
  const values = keys.map(function (key) {
    return state[key];
  });

  const data = values.join("");
  const datas = new Date(data);
  const datasYear = datas.getYear();
  const datasMonth = datas.getMonth();
  const datasDate = datas.getDate();

  const today = new Date().toLocaleDateString();
  const todays = new Date(today);
  const todaysYear = todays.getYear();
  const todaysMonth = todays.getMonth();
  const todaysDate = todays.getDate();

  let age = {};
  let yearAge = todaysYear - datasYear;
  let gift;

  if (todaysMonth >= datasMonth) var monthAge = todaysMonth - datasMonth;
  else {
    yearAge--;
    var monthAge = 12 + todaysMonth - datasMonth;
  }

  if (todaysDate >= datasDate) var dateAge = todaysDate - datasDate;
  else {
    monthAge--;
    var dateAge = 31 + todaysDate - datasDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 0 && age.months > 0 && age.days > 0) {
    gift = false;
  } else if (age.years == 0 && age.months == 0 && age.days > 0) {
    gift = false;
  } else if (age.years > 0 && age.months == 0 && age.days == 0) {
    gift = true;
  } else if (age.years > 0 && age.months > 0 && age.days == 0) {
    gift = false;
  } else if (age.years == 0 && age.months > 0 && age.days > 0) {
    gift = false;
  } else if (age.years > 0 && age.months == 0 && age.days > 0) {
    gift = false;
  } else if (age.years == 0 && age.months > 0 && age.days == 0) {
    gift = false;
  } else {
    gift = true;
  }

  const isDay = gift;
  if (isDay) {
    return <Birthday />;
  }
  return <NotBirthday />;
}

function Birthday() {
  const navigate = useNavigate();
  return (
    <div className=" mx-2 md:mx-auto bg-slate-50 w-auto h-90 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl break-inside relative overflow-hidden flex flex-col justify-between  space-y-2 text-sm  max-w-[23rem] p-4 text-teal-800">
      <p className="text-base text-center font-bold my-8">
        Selamat Ulang Tahun!
      </p>
      <img
        class="w-40 rounded-lg mx-auto mb-8"
        src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png"
        alt="image description"
      ></img>
      <div className="w-auto mx-auto">
        <button
          className=" animate-bounce mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
          onClick={() => navigate("/spinwheel")}
        >
          Ambil Hadiah
        </button>
      </div>
    </div>
  );
}

function NotBirthday() {
  const navigate = useNavigate();
  return (
    <div className=" mx-2 md:mx-auto bg-slate-50 w-auto h-90 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl break-inside relative overflow-hidden flex flex-col justify-between  space-y-2 text-sm  max-w-[23rem] p-4 text-teal-800">
      <p className="text-base text-center font-bold my-8">
        Oops! Hari ini kamu tidak Ulang Tahun!
      </p>
      <img
        class="w-40 rounded-lg mx-auto mb-8"
        src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
        alt="image description"
      ></img>
      <div className="w-auto mx-auto">
        <button
          className=" animate-bounce mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
          onClick={() => navigate("/")}
        >
          <p>Kembali</p>
        </button>
      </div>
    </div>
  );
}

export default DateCalculate;
