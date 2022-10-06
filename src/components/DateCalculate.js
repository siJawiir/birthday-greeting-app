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
      <div className="mx-2 md:mx-auto bg-slate-100 w-96 h-96 rounded-lg md:w-3/5 shadow-xl flex flex-col justify-center text-sm dark:bg-gray-800">
        <p className="text-lg text-center font-bold my-4 md:text-xl mx-1 text-teal-600 dark:text-pink-600">
          {greet}
        </p>
        <img
          class="w-40 rounded-lg mx-auto mb-8"
          src="https://cdn-icons-png.flaticon.com/512/1139/1139982.png"
          alt="happy birthday!"
        ></img>
        <div className="w-auto mx-auto">
          <button
            className="my-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white shadow-md"
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
      <div className="mx-2 md:mx-auto bg-slate-100 w-96 h-96 rounded-lg md:w-3/5 shadow-xl flex flex-col justify-center text-sm dark:bg-gray-800">
        <p className="text-lg text-center font-bold mb-4 md:text-xl  text-pink-600 dark:text-white">{greet}</p>
        <img
          class="w-40 rounded-lg mx-auto mb-8"
          src="https://cdn-icons-png.flaticon.com/512/7486/7486747.png"
          alt="Today isn't your birthday!"
        ></img>
        <div className="w-auto mx-auto">
          <button
            className="my-4 flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-teal-500 text-white"
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
