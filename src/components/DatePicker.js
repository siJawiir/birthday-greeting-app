import { useStateMachine } from "little-state-machine";
import React from "react";
import { useForm } from "react-hook-form";
import updateAction from "../redux/updateActions";
import { useNavigate } from "react-router-dom";

function DatePicker() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/birthday");
  };
  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-2 md:mx-auto bg-slate-100 w-96 h-96 rounded-lg md:w-3/5 shadow-xl flex flex-col justify-center text-sm text-pink-600 dark:bg-gray-800 dark:text-white">
            <p className="text-xl text-center font-bold text-pink-500 dark:text-white pb-8">
              BIRTHDAY CHECKER
            </p>
            <div className="grid justify-center mt-4">
              <div>
                <input
                  type="date"
                  className={`md:w-96 md:h-10 md:text-lg w-52 text-md rounded-lg shadow-md text-center border dark:bg-gray-700 dark:border-gray-900 dark:text-white ${
                    errors.date &&
                    "focus:border-red-600 focus:ring-red-600 border-red-600"
                  }`}
                  {...register("date", {
                    required: "Masukkan tanggal lahir kamu!",
                    valueAsDate: true,
                  })}
                  defaultValue={state.date}
                  required
                ></input>
              </div>
              <div className="mt-2 text-center">
                {errors.date && (
                  <span className=" text-red-600 text-sm">
                    Masukkan tanggal lahir kamu!
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <input
                type="submit"
                value="Submit"
                className="md:w-1/3 md:h-10 text-md md:text-lg w-1/3 h-8  bg-teal-600 text-white rounded-lg shadow-md dark:bg-teal-700"
              ></input>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default DatePicker;
