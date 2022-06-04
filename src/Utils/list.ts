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
