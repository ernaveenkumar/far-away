import { useState } from 'react';

export const PacakaginglList = ({
  items,
  onDeleteItem,
  onTaskComplete,
  sortBy,
}) => {
  let sortedItems = [];
  if (sortBy === 'input') {
    sortedItems = [...items];
  } else if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  } else if (sortBy === 'packedStatus') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packedStatus) - Number(a.packedStatus));
  }

  function handleDelete(itemId) {
    onDeleteItem(itemId);
  }
  function handleCheckStatus(itemId) {
    onTaskComplete(itemId);
  }

  return (
    <>
      <div className="min-h-96 pl-9 bg-amber-900 text-amber-400">
        <span className="pt-3.5 inline-block">Item to take with you.</span>
        <ul className="list-none flex flex-row gap-4 flex-wrap pl-4">
          {sortedItems.map((item) => (
            <li className="text-lg" key={`${item.id}${item.description}`}>
              <input
                type="checkbox"
                id={item.id}
                name={`${item.id}${item.itemName}`}
                value={item.packedStatus}
                className="w-5 h-5 px-28 py-28"
                onChange={() => handleCheckStatus(item.id)}
              />
              <label htmlFor={`${item.id}${item.itemName}`}>
                <span className={item.packedStatus ? 'line-through' : ''}>
                  &nbsp;{` ${item.quantity}  ${item.itemName}`}
                </span>
              </label>
              <button onClick={() => handleDelete(item.id)}>
                &nbsp; &#10060;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
