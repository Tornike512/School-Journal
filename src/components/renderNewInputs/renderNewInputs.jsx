import "./RenderNewInputs.scss";

export function RenderNewInputs() {
  return (
    <div>
      {[0, 1, 2, 3, 4]
        .map((id) => (
          <div key={id}>
            {edit ? (
              <input
                value={inputValues[studentId * 5 + id]}
                onChange={(e) =>
                  studentPoint(studentId * 5 + id, e.target.value)
                }
                onBlur={buttonValue}
                type="text"
                placeholder="შემოიყვანეთ"
              />
            ) : (
              <button onClick={changeText}>
                {inputValues[studentId * 5 + id]}
              </button>
            )}
          </div>
        ))

        .flat()}
    </div>
  );
}
