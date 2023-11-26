import "./StudentsList.scss";

export function StudentsList() {
  return (
    <>
      <div className="week-info-spacing">
        <div className="info-spacing">
          <h1 className="first-name">სახელი</h1>
          <h1 className="last-name">გვარი</h1>
        </div>
        <div className="week-spacing">
          <h1 className="monday">ორშაბათი</h1>
          <h1 className="tuesday">სამშაბათი</h1>
          <h1 className="wednesday">ოთხშაბათი</h1>
          <h1 className="thursday">ხუთშაბათი</h1>
          <h1 className="friday">პარასკევი</h1>
        </div>
      </div>
      <div className="student-form-spacing">
        <div className="new-student">
          <h1>firstname</h1>
          <h1>lastname</h1>
        </div>
        <form className="form">
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
          <input placeholder="-" />
        </form>
      </div>
    </>
  );
}
