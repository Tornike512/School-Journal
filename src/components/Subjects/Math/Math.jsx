import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./Math.scss";

export function Math() {
  const { subjects } = useContext(AppContext);

  const secondSubject = subjects[1];

  return (
    <>
      <button className="math" {...secondSubject.id}>
        {secondSubject.name}
      </button>
    </>
  );
}
