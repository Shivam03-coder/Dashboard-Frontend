const usePagination = (currentPage, itemsPerpage, data) => {
  const startIndex = (currentPage - 1) * itemsPerpage;
  const endIndex = startIndex + itemsPerpage;
  return data?.slice(startIndex, endIndex);
};

export default usePagination;
