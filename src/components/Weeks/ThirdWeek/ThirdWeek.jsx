import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./ThirdWeek.scss";

export function ThirdWeek() {
  const { weeks, setCurrentWeek, setSelectedWeek, selectedWeek } =
    useContext(AppContext);

  const thirdWeek = weeks[2];

  return (
    <>
      <button
        onClick={() => {
          setCurrentWeek(thirdWeek.id);
          setSelectedWeek("thirdWeek");
        }}
        className={
          selectedWeek === "thirdWeek" ? "toggled-third-week" : "third-week"
        }
        key={thirdWeek.id}
      >
        {thirdWeek.name}
      </button>
    </>
  );
}
