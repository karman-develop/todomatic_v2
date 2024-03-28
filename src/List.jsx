export const List = ({ item, index, onCheck, onDel }) => {
  const handleChange = () => {
    onCheck(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onDel(item);
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
        <form onSubmit={handleSubmit}>
          <button>削除</button>
        </form>
      </li>
    </>
  );
};
