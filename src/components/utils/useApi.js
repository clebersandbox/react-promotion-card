import { useState } from 'react';
import axios from 'axios';

const initicalRequestInfo = {
  error: null,
  data: null,
  loading: false
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initicalRequestInfo);

  function call() {
    setRequestInfo({
      ...initicalRequestInfo,
      loading: true
    });
    axios(config);
  }

  return [call, requestInfo];
}
