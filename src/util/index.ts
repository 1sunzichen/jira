import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const cleanObject = (object: any) => {
  const result = { ...object };
  //Object.assign({},object)
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: any) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: any, delay: any) => {
  const [debouncedValue, setDebou] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebou(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
