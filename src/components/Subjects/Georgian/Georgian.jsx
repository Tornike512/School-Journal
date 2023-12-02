import { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../../AppContext";
import "./georgian.scss";

export function Georgian() {
  const { subjects, setCurrentSubject } = useContext(AppContext);

  const firstSubject = subjects[0];

  const toggleGeo = useRef(null);

  useEffect(() => {
    toggleGeo.current.focus();
  }, []);

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
