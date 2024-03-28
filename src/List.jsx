export const List = ({ item, index, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <>
      <li key={index}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleChange}
        />
        {item.title}
      </li>
    </>
  );
};
