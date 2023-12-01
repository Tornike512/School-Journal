import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const { subjects } = useContext(AppContext);

  const firstSubject = subjects[0];

  return (
    <>
      <button className="georgian" key={firstSubject.id}>
        {firstSubject.name}
      </button>
    </>
  );
}
