import useCount from "../hooks/useCount";

function ItemCount() {
  const { count, add, less } = useCount(0);

  return (
    <div>
      <button className="btn btn-secondary m-1" onClick={less}>-</button>
      <span>{count}</span>
      <button className="btn btn-secondary m-1" onClick={add}>+</button>
    </div>
  );
}

export default ItemCount;
