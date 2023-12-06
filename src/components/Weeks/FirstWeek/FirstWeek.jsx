import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../../AppContext";
import "./FirstWeek.scss";

export function FirstWeek() {
  const { weeks, setCurrentWeek, selectedWeek, setSelectedWeek, addedGrades } =
    useContext(AppContext);

  const firstWeek = weeks[0];
  const weekButtonClicked = useRef();

  useEffect(() => {
    weekButtonClicked.current.click();
  }, []);

  return (
    <button
      ref={weekButtonClicked}
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
  );
}
