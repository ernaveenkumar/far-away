export const Footer = ({ itemsList }) => {
  const totalItems = itemsList.length;
  const showHide = totalItems > 0 ? true : false;
  const items_packed = showHide
    ? itemsList.filter((item) => item.packedStatus).length
    : 0;
  const items_packedPercent = showHide
    ? Math.round((items_packed / totalItems) * 100)
    : 0;

  return showHide ? (
    <footer className="min-h-16 flex flex-row justify-center items-center  gap-x-4 font-sans bg-amber-300 text-lg font-mono font-semibold">
      {items_packedPercent === 100
        ? 'You got everything! Ready to go ✈️'
        : `🧳 You have ${totalItems} items in you list, and you already packed ${items_packed} (${items_packedPercent})%`}
    </footer>
  ) : (
    <footer className="min-h-16 flex flex-row justify-center items-center  gap-x-4 font-sans bg-amber-300 text-lg font-mono font-semibold">
      Start adding some items to your packing list 🚀
    </footer>
  );
};
