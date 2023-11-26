import "./AddStudentModal.scss";

export function AddStudentModal({ visible = false }) {
  return (
    <div className="modal-background">
      <div className="modal">
        <button className="x-button">X</button>
        <h1>ახალი მოსწავლის დამატება</h1>
        <form className="modal__input">
          <input placeholder="მოსწავლის სახელი" />
          <input placeholder="მოსწავლის გვარი" />
        </form>
        <button className="add-button">დამატება</button>
      </div>
    </div>
  );
}
