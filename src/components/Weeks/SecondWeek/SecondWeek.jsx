import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./SecondWeek.scss";

export function SecondWeek() {
  const { weeks } = useContext(AppContext);

  const secondWeek = weeks[1];

  return (
    <>
      <button className="second-week" key={secondWeek.id}>
        {secondWeek.name}
      </button>
    </>
  );
}
