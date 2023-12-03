import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./SecondWeek.scss";

export function SecondWeek() {
  const { weeks, setCurrentWeek, setSelectedWeek, selectedWeek } =
    useContext(AppContext);

  const secondWeek = weeks[1];

  return (
    <>
      <button
        onClick={() => {
          setCurrentWeek(secondWeek.id);
          setSelectedWeek("secondWeek");
        }}
        className={
          selectedWeek === "secondWeek" ? "toggled-second-week" : "second-week"
        }
        key={secondWeek.id}
      >
        {secondWeek.name}
      </button>
    </>
  );
}
