import { useStateMachine } from "little-state-machine";
import { useNavigate } from "react-router-dom";
import updateAction from "../redux/updateActions";

function DateCalculate() {
  const { state } = useStateMachine(updateAction);
  const keys = Object.keys(state);
  console.log(keys);
  const values = keys.map(function (key) {
    return state[key];
  });
  console.log(values);

  const data = values.join("");
  const datas = new Date(data);
  const datasYear = datas.getFullYear();
  const datasMonth = datas.getMonth();
  const datasDate = datas.getDate();

  const today = new Date().toLocaleDateString();
  const todays = new Date(today);
  const todaysYear = todays.getFullYear();
  const todaysMonth = todays.getMonth();
  const todaysDate = todays.getDate();

  let age = {};
  let ageString = "";
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
    ageString =
      "You're now " +
      age.years +
      " years " +
      age.months +
      " months " +
      age.days +
      " days";
    gift = false;
  } else if (age.years === 0 && age.months === 0 && age.days > 0) {
    ageString = "You're now " + age.days + " days old!";
    gift = false;
  } else if (age.years > 0 && age.months === 0 && age.days === 0) {
    ageString =
      "WE WISH YOU HAPPY BIRTHDAY ON " +
      datas.toISOString().replace(/T.*/, "").split("-").reverse().join("-");
    gift = true;
  } else if (age.years > 0 && age.months > 0 && age.days === 0) {
    ageString =
      "You're now " + age.years + " years and " + age.months + " months old.";
    gift = false;
  } else if (age.years === 0 && age.months > 0 && age.days > 0) {
    ageString =
      "You're now " + age.months + " months and " + age.days + " days old.";
    gift = false;
  } else if (age.years > 0 && age.months === 0 && age.days > 0) {
    ageString =
      "You're now " + age.years + " years, and" + age.days + " days old.";
    gift = false;
  } else if (age.years === 0 && age.months > 0 && age.days === 0) {
    ageString = "You're now " + age.months + " months old.";
    gift = false;
  } else if (age.years === 0 && age.months === 0 && age.days === 0) {
    ageString = "Welcome to the World!";
    gift = true;
  } else {
    ageString = "Are you sure?!";
    gift = false;
  }
  console.log(ageString);

  function Birthday() {
    const greet = ageString;
    const navigate = useNavigate();
    return (
      <div className=" mx-2 md:mx-auto bg-slate-50 w-auto h-90 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl break-inside relative overflow-hidden flex flex-col justify-between  space-y-2 text-sm  max-w-[23rem] p-4 text-pink-600">
        <p className="text-lg text-center font-bold my-8 md:text-xl">
          {greet}
        </p>
        <img
          class="w-40 rounded-lg mx-auto mb-8"
          src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png"
          alt="happy birthday!"
        ></img>
        <div className="w-auto mx-auto">
          <button
            className=" animate-bounce mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
            onClick={() => navigate("/spinwheel")}
          >
            Take the gift!
          </button>
        </div>
      </div>
    );
  }

  function NotBirthday() {
    const greet = ageString;
    const navigate = useNavigate();
    return (
      <div className=" mx-2 md:mx-auto bg-slate-50 w-auto h-90 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl break-inside relative overflow-hidden flex flex-col justify-between  space-y-2 text-sm  max-w-[23rem] p-4 text-teal-800">
        <p className="text-lg text-center font-bold my-8 md:text-xl">
          {greet}
        </p>
        <img
          class="w-40 rounded-lg mx-auto mb-8"
          src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
          alt="today isn't your birthday!"
        ></img>
        <div className="w-auto mx-auto">
          <button
            className=" animate-bounce mt-8 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
            onClick={() => navigate("/")}
          >
            <p>Back</p>
          </button>
        </div>
      </div>
    );
  }

  const isDay = gift;
  if (isDay) {
    return <Birthday />;
  }
  return <NotBirthday />;
}

export default DateCalculate;
