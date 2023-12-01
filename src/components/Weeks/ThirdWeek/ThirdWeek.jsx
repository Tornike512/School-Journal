import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import "./ThirdWeek.scss";

export function ThirdWeek() {
  const { weeks } = useContext(AppContext);

  const thirdWeek = weeks[2];

  return (
    <>
      <button className="third-week" key={thirdWeek.id}>
        {thirdWeek.name}
      </button>
    </>
  );
}
