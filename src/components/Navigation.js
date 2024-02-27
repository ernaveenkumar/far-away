import { useState } from 'react';
import { PacakaginglList } from '../pages/Home/components/PacakingList';

export const Navigation = ({ onAddItemToList, onDeleteItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      itemName,
      quantity,
      packedStatus: false,
    };
    onAddItemToList(item);
    setItemName('');
    setQuantity(1);
  }

  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }
  function handleOnchangeItemName(e) {
    setItemName(e.target.value);
  }

  return (
    <>
      <div className="gap-1 min-h-16 flex flex-row justify-center items-center  gap-x-4 font-sans bg-amber-600">
        <span>What do you need for your 😍 trip ?</span>
        <form
          className="flex flex-row gap-1"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <select
            id="howmany"
            name="item_types"
            className="px-4 py-1"
            onChange={(e) => handleQuantityChange(e)}
            value={quantity}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input
            type="text"
            name="item_name"
            className="px-4 py-1"
            value={itemName}
            onChange={(e) => handleOnchangeItemName(e)}
          />
          <button className="bg-blue-600 px-4 py-1 rounded-lg">Add</button>
        </form>
      </div>
    </>
  );
};
