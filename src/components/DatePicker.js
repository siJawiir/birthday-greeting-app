import { useStateMachine } from "little-state-machine";
import React from "react";
import { useForm } from "react-hook-form";
import updateAction from "../redux/updateActions";
import { useNavigate } from "react-router-dom";

function DatePicker(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
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
          <div className="mx-2 md:mx-auto bg-slate-50 w-auto h-80 mt-20 mb-auto rounded-lg md:w-3/5 shadow-xl">
            <div className="flex items-center justify-center h-24 mx-4">
              <p className="text-lg font-bold text-teal-800 md:text-3xl ">
                Masukkan Tanggal Lahir Kamu
              </p>
            </div>
            <div className="grid justify-center mt-4">
              <div>
                <input
                  type="date"
                  className={`md:w-96 md:h-10 md:text-lg w-52 text-md rounded-lg shadow-md text-center border ${
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
                className="md:w-1/3 md:h-10 text-md md:text-lg w-1/3 h-8  bg-teal-500 text-white rounded-lg"
              ></input>
            </div>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
}

export default DatePicker;
