import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./FirstWeek.scss";

export function FirstWeek() {
  const { weeks, setCurrentWeek } = useContext(AppContext);

  const firstWeek = weeks[0];

  return (
    <>
      <button
        className="first-week"
        key={firstWeek.id}
        onClick={() => setCurrentWeek(firstWeek.id)}
      >
        {firstWeek.name}
      </button>
      {/* {weeks.map((week) => {
        return <button className="first-week">{firstWeek.name}</button>;
      })} */}
    </>
  );
}
