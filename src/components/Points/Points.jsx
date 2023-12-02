import { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import "./Points.scss";

export function Points() {
  const { inputValue, secondInputValue, inputId, students } =
    useContext(AppContext);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("-");
  const [inputValues, setInputValues] = useState({});

  function changeText() {
    setEdit(!edit);
  }

  function buttonValue() {
    setEdit(false);
  }

  return (
    <>
      {students.map((student) => (
        <div className="new-student-spacing" key={student.id}>
          <div className="student-spacing">
            <h1 className="new-student">{student.firstName}</h1>
            <h1 className="new-student">{student.lastName}</h1>
            <div className="point-spacing">
              {inputValue?.map((value) => {
                return (
                  <div className="student-form-spacing">
                    <div className="new-student">
                      <h1 key={inputId}>{value}</h1>
                      <h1 key={inputId}>{secondInputValue} </h1>
                    </div>
                    <div>
                      {edit ? (
                        <input
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onBlur={buttonValue}
                          type="text"
                          placeholder="-"
                        />
                      ) : (
                        <button onClick={changeText}>{value}</button>
                      )}
                    </div>
                    <div>
                      {edit ? (
                        <input
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onBlur={buttonValue}
                          type="text"
                          placeholder="-"
                        />
                      ) : (
                        <button onClick={changeText}>{value}</button>
                      )}
                    </div>
                    <div>
                      {edit ? (
                        <input
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onBlur={buttonValue}
                          type="text"
                          placeholder="-"
                        />
                      ) : (
                        <button onClick={changeText}>{value}</button>
                      )}
                    </div>
                    <div>
                      {edit ? (
                        <input
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onBlur={buttonValue}
                          type="text"
                          placeholder="-"
                        />
                      ) : (
                        <button onClick={changeText}>{value}</button>
                      )}
                    </div>
                    <div>
                      {edit ? (
                        <input
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          onBlur={buttonValue}
                          type="text"
                          placeholder="-"
                        />
                      ) : (
                        <button onClick={changeText}>{value}</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
