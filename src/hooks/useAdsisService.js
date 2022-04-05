import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useAdsisService = ({ selector, fetchService, fetchParams }) => {
  const dispatch = useDispatch();
  const serviceCallback = useCallback(() => dispatch(fetchService(fetchParams)), [dispatch, fetchService, fetchParams]);

  const data = useSelector(selector);

  useEffect(() => {
    serviceCallback();
  }, []);

  return data;
};

export default useAdsisService;
