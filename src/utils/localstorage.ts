export const getItem = <T>(key: string) => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
};

export const setItem = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const hasItem = (key: string) => {
  return getItem(key) !== null;
};
