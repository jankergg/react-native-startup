import {PixelRatio, Dimensions} from 'react-native';
import {useEffect, useRef} from 'react';

export function usePadding(num: number, pad: number = 2): string {
  return ('0' + num).slice(-pad);
}

export function useInterval(callback: Function, delay: number) {
  let initRef: Function = () => {};
  const savedCallback = useRef(initRef);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  post(url: RequestInfo, data: any, callback: (arg0: any) => void) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(url, fetchOptions)
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        callback(responseData);
      });
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};

export default Util;
