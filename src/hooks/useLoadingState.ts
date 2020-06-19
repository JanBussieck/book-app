import {useReducer} from 'react';

interface State<T> {
  status: 'error' | 'rejected' | 'resolved' | 'pending';
  data: T;
  error: {
    error: string;
  };
};

interface Action<T> {
  type: 'error' | 'success' | 'started';
  data: T;
  error: {
    error: string;
  }
};

const createReducer = <T>() => (state: State<T>, action: Action<T>): State<T> => {
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

function useLoadingState<T>(defaultData: T) {
  const reducer = createReducer<T>();
  return useReducer(reducer, {
    status: 'idle',
    data: defaultData,
    error: null,
  });
};

export default useLoadingState;
