import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const { subjects, setCurrentSubject, activeSubjectsPage } =
    useContext(AppContext);

  const firstSubject = subjects[0];

  const toggleGeo = useRef(null);

  useEffect(() => {
    toggleGeo.current.focus();
  }, []);

  function geoClick() {
    const newGeoClick = {
      id: activeSubjectsPage.id,
      number: activeSubjectsPage.number,
    };
  }

  return (
    <>
      <button
        onClick={() => setCurrentSubject(firstSubject.id)}
        className="georgian"
        key={firstSubject.id}
        ref={toggleGeo}
      >
        {firstSubject.name}
      </button>
    </>
  );
}
