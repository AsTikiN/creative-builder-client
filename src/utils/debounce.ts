export const debounce = (cb: (...args: any[]) => void, timer: number = 300) => {
  let timerId: NodeJS.Timeout | number;

  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => cb(...args), timer);
  };
};
