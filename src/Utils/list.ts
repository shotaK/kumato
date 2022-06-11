import isEmpty from "lodash.isempty";

export const moveElement = (
  arr: any[] = [],
  fromIndex: number,
  toIndex: number
) => {
  if (isEmpty(arr)) {
    return [];
  }
  const updatedArr = [...arr];
  const element = updatedArr[fromIndex];
  updatedArr.splice(fromIndex, 1);
  updatedArr.splice(toIndex, 0, element);

  return updatedArr;
};

export const sortAlphaNum = (a = "", b = "") => {
  if (b === "") {
    return -1;
  }
  if (a === "") {
    return 1;
  }
  return a.localeCompare(b, "en", { numeric: true });
};
