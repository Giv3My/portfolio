export const useSort = <T>(items: T[], sortProperty: keyof T, order: 'asc' | 'desc') => {
  const sortedItems = [...items].sort((a, b) => {
    if (a[sortProperty] === b[sortProperty]) {
      return 0;
    }

    if (order === 'desc') {
      return a[sortProperty] > b[sortProperty] ? -1 : 1;
    } else {
      return a[sortProperty] > b[sortProperty] ? 1 : -1;
    }
  });

  return sortedItems;
};
