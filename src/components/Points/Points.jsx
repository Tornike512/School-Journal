import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Points.scss";

export function Points() {
  const { inputValue, secondInputValue, inputId } = useContext(AppContext);

  return (
    <>
      {inputValue?.map((value) => {
        return (
          <div className="student-form-spacing">
            <div className="new-student">
              <h1 key={inputId}>{value}</h1>
              <h1 key={inputId}>{secondInputValue} </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
