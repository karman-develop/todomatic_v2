export const Filter = ({ tab }) => {
  const handleClick = (text) => {
    tab(text);
  };

  return (
    <>
      <div>
        <div onClick={() => handleClick("All")}>All</div>
        <div onClick={() => handleClick("Active")}>Active</div>
        <div onClick={() => handleClick("Complete")}>Complete</div>
      </div>
    </>
  );
};
