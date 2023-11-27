import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Points.scss";

export function Points() {
  const { inputValue, secondInputValue } = useContext(AppContext);
  const uniqueId = uuidv4();

  return (
    <>
      {inputValue?.map((value, value1) => {
        return (
          <div className="student-form-spacing">
            <div className="new-student">
              <h1 key={uniqueId}>{value}</h1>
              <h1 key={uniqueId}>{secondInputValue} </h1>
            </div>
            <form className="form">
              <input placeholder="-" />
              <input placeholder="-" />
              <input placeholder="-" />
              <input placeholder="-" />
              <input placeholder="-" />
            </form>
          </div>
        );
      })}
    </>
  );
}
