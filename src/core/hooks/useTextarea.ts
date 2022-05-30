import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

const useTextarea = <T>(
  initValue: T
): [
  T,
  (e: ChangeEvent<HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
] => {
  const [value, setValue] = useState<T>(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useTextarea;
