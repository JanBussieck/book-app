import {useEffect} from 'react';
import {useLoadingState} from './useLoadingState';

export default () => {
  const [state, dispatch] = useLoadingState();

  const fetchData = () => {
    dispatch({type: 'started'});
    try {
      fetch('http://localhost:4730/books')
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'success',
            data
          });
        });
    } catch (error) {
      dispatch({type: 'error', error});
      console.log('error fetching survey data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {bookState: state};
};
