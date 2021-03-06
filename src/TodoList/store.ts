import { Dispatch, SetStateAction, useCallback, useState, useLayoutEffect } from 'react';

const store: Record<string, Dispatch<SetStateAction<any>>[]> = {};

export const useTodoList = (namespace: string) => {
  const [state, setState] = useState<Record<string, any>[]>([{ key: '1', text: '1212121212' }]);
  useLayoutEffect(() => {
    store[namespace] = [...(store[namespace] || []), setState];
    return () => {
      store[namespace] = store[namespace].filter((callback) => callback !== setState);
    };
  }, [namespace]);

  const dispatchAll = useCallback(
    (newState: any) => {
      if (store?.[namespace]) {
        store[namespace].forEach((setStateItem: Dispatch<SetStateAction<any>>) =>
          setStateItem(newState)
        );
      }
    },
    [namespace]
  );
  return [state, dispatchAll] as [Record<string, any>[], Function];
};
