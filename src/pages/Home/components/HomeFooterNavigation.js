import { useState } from 'react';

export const HomeFooterNavigation = ({ onListClear, OnSortItems, sortBy }) => {
  function handleClear() {
    const confirmDelete = window.confirm(
      'Are you sure to delete all the task.?'
    );
    if (confirmDelete) onListClear();
  }

  function handleOnChange_sortItem(value) {
    OnSortItems(value);
  }
  return (
    <div className="gap-1 min-h-16 flex flex-row justify-center items-center  gap-x-4 font-sans bg-amber-900 text-amber-400">
      <form className="flex flex-row gap-1 align-center">
        <select
          value={sortBy}
          id="sort"
          name="item_sortby"
          className="px-4 py-1"
          onChange={(e) => handleOnChange_sortItem(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packedStatus">Sort by Packed Status</option>
        </select>
      </form>
      <button
        className="bg-blue-600 px-4 py-1 rounded-lg"
        onClick={() => handleClear()}
      >
        Clear List
      </button>
    </div>
  );
};
