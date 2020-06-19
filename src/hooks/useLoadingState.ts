import {useReducer} from 'react';

interface State<T> {
  status: 'error' | 'rejected' | 'resolved' | 'pending',
  data: T,
  error: {
    error: string
  }
};

interface Action<T> {
  type: 'error' | 'success' | 'started',
  data: T
};

interface Reducer<T> {
  (State<T>, Action<T>) => State<T>
};

const reducer: Reducer<T> = function (state: State<T>, Action<T>) {
  switch (action.type) {
    case 'error': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    }
    case 'success': {
      return {
        ...state,
        status: 'resolved',
        data: action.data,
      };
    }
    case 'started': {
      return {
        ...state,
        status: 'pending',
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const useLoadingState = (defaultData: T = null) => {
  return useReducer(reducer: Reducer<T>, {
    status: 'idle',
    data: defaultData,
    error: null,
  });
};
