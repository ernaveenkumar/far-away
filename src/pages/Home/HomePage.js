import { HomeFooterNavigation } from './components/HomeFooterNavigation';
import { PacakaginglList } from './components/PacakingList';

export const HomePage = ({
  items,
  onDeleteItem,
  onTaskComplete,
  onListClear,
  OnSortItems,
  sortBy,
}) => {
  return (
    <>
      <PacakaginglList
        items={items}
        onDeleteItem={onDeleteItem}
        onTaskComplete={onTaskComplete}
        sortBy={sortBy}
      />
      <HomeFooterNavigation
        onListClear={onListClear}
        OnSortItems={OnSortItems}
        sortBy={sortBy}
      />
    </>
  );
};
