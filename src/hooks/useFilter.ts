export const useFilter = <T>(
  filters: string[],
  items: T[],
  filterIndex: number,
  filterProp: keyof T
) => {
  if (!filterIndex) {
    return items;
  }

  const filter = filters[filterIndex].toLowerCase();
  const filteredItems = items.filter((item) => item[filterProp] === filter);

  return filteredItems;
};
