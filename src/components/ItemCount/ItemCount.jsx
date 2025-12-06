function ItemCount({ count, add, less }) {

  return (
    <div>
      <button className="btn btn-secondary m-1" onClick={less}>-</button>
      <span>{count}</span>
      <button className="btn btn-secondary m-1" onClick={add}>+</button>
    </div>
  );
}

export default ItemCount;
