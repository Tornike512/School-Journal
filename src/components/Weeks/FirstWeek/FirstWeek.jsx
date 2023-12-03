import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./FirstWeek.scss";

export function FirstWeek() {
  const { weeks, setCurrentWeek, selectedWeek, setSelectedWeek } =
    useContext(AppContext);

  const firstWeek = weeks[0];

  return (
    <>
      <button
        onClick={() => {
          setCurrentWeek(firstWeek.id);
          setSelectedWeek("firstWeek");
        }}
        className={
          selectedWeek === "firstWeek" ? "toggled-first-week" : "first-week"
        }
        key={firstWeek.id}
      >
        {firstWeek.name}
      </button>
    </>
  );
}
