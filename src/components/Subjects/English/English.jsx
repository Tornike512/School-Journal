import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./English.scss";

export function English() {
  const { subjects } = useContext(AppContext);

  const thirdSubject = subjects[2];

  return (
    <>
      <button className="english" key={thirdSubject.id}>
        {thirdSubject.name}
      </button>
    </>
  );
}
