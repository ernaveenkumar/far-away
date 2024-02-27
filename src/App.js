import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/Home/HomePage';
import { useState } from 'react';

function App() {
  const [itemList, setNewItemToItemList] = useState([]);
  const [sortBy, setSortBy] = useState('input');

  function handleAddItemToList(item) {
    setNewItemToItemList((itemList) => [...itemList, item]);
  }

  function handleOnDeleteItem(itemId) {
    setNewItemToItemList(itemList.filter((item) => item.id !== itemId));
  }

  function handleTaskCompleteStatus(id) {
    setNewItemToItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, packedStatus: !item.packedStatus } : item
      )
    );
  }

  function handleOnListClear() {
    setNewItemToItemList([]);
  }
  function handleOnSortItems(sort_value) {
    setSortBy(sort_value);
  }

  return (
    <div className="container lg mx-auto bg-slate-50 mt-1 ">
      <Header />
      <Navigation onAddItemToList={handleAddItemToList} />
      <div className="main">
        <HomePage
          items={itemList}
          onDeleteItem={handleOnDeleteItem}
          onTaskComplete={handleTaskCompleteStatus}
          onListClear={handleOnListClear}
          OnSortItems={handleOnSortItems}
          sortBy={sortBy}
        />
      </div>
      <Footer itemsList={itemList} />
    </div>
  );
}

export default App;
