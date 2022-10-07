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
          <div className="flex flex-col mx-2 md:mx-auto bg-slate-100 w-96 h-96 rounded-lg md:w-96 shadow-xl text-sm text-gray-600 dark:bg-gray-800 dark:text-white">
            <div className=" bg-gray-200 dark:bg-teal-600 rounded-t shadow">
              <p className="text-xl md:text-2xl text-center flex justify-center py-6 font-bold text-teal-600 dark:text-white pb-8">
                BIRTHDAY CHECKER
              </p>
            </div>
            <div className="grid justify-center my-auto">
              <div>
                <input
                  type="date"
                  className={`md:w-80 md:h-10 md:text-lg h-8 w-60 text-md rounded-lg shadow-md text-center border dark:bg-gray-700 dark:border-gray-900 dark:text-white ${
                    errors.date &&
                    "focus:border-red-600 focus:ring-red-600 border-red-600"
                  }`}
                  {...register("date", {
                    valueAsDate: true,
                  })}
                  defaultValue={state.date}
                  required
                ></input>
              </div>
              <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="Submit"
                className="md:w-1/3 md:h-10 text-md md:text-lg w-1/3 h-8  bg-teal-600 text-white rounded-lg shadow-md dark:bg-teal-700"
              ></input>
            </div>
            </div>
            
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default DatePicker;
