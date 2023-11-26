import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Points.scss";

export function Points() {
  const { input, setInput } = useContext(AppContext);
  const { secondInput, setSecondInput } = useContext(AppContext);

  return (
    <>
      <div className="student-form-spacing">
        <div className="new-student">
          <h1>{input}</h1>
          <h1>{secondInput}</h1>
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
