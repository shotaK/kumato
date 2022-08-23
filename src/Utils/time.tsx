export const getNowTime = () => {
  const currentDatetime = new Date();

  return `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`;
};
