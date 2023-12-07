import { useContext } from "react";
import { AppContext } from "../../AppContext";
import "./StudentsList.scss";

export function StudentsList() {
  const { students, currentWeek, currentSubject, weekDays } =
    useContext(AppContext);

  return (
    <>
      <div className="week-info-spacing">
        <div className="info-spacing">
          <h1 className="first-name">სახელი</h1>
          <h1 className="last-name">გვარი</h1>
        </div>
        <div className="week-spacing">
          {weekDays.map((weekDay) => {
            return (
              <h1 className="week-days" key={weekDay.id}>
                {weekDay.name}
              </h1>
            );
          })}
        </div>
      </div>
      {students?.map((student) => {
        return (
          <div className="new-student-spacing">
            <div key={student.id} className="student-spacing">
              <h1 className="new-student">{student.firstName}</h1>
              <h1 className="new-student">{student.lastName}</h1>
              <div className="point-spacing">
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-1" &&
                            currentSubject === "subject-id-1"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-2" &&
                            currentSubject === "subject-id-1"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-3" &&
                            currentSubject === "subject-id-1"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-1" &&
                            currentSubject === "subject-id-2"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-2" &&
                            currentSubject === "subject-id-2"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-3" &&
                            currentSubject === "subject-id-2"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-1" &&
                            currentSubject === "subject-id-3"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-2" &&
                            currentSubject === "subject-id-3"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {weekDays.map((weekDay) => {
                    return (
                      <div>
                        <input
                          className={
                            currentWeek === "week-id-3" &&
                            currentSubject === "subject-id-3"
                              ? "display-input1"
                              : "display-input"
                          }
                          key={weekDay.id}
                          type="text"
                          placeholder="-"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
