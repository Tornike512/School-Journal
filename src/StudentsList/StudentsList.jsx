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
    </>
  );
}
