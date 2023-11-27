import { useContext } from "react";
import { AppContext, AppProvider } from "../AppContext";
import "./Points.scss";

export function Points() {
  const { inputValue } = useContext(AppContext);

  return (
    <>
      <div className="student-form-spacing">
        <div className="new-student">
          <h1>
            {inputValue?.map((value) => {
              return { value };
            })}
          </h1>
          <h1></h1>
        </div>
        <form className="form">
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
        </form>
      </div>
    </>
  );
}
