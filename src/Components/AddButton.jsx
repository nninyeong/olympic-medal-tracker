function AddButton({ addButtonHandler }) {
  return (
    <button type="submit" onClick={addButtonHandler}>
      국가 추가
    </button>
  );
}

export default AddButton;
