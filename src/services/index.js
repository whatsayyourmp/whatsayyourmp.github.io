import axios from 'axios';
import constants from '../constants';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    ...{
      'Content-Type': 'application/json'
    }, ...(constants.STAGE !== 'production') ? {
      'Authorization': localStorage.getItem('DEVELOPER_API_KEY'),
    } : {}
  }
});

const getCurrentMPs = () => {
  return api.get(constants.GET_CURRENT_MPS);
};

const getCountsPerMPForDateRange = async (mpNames, startDate, endDate) => {
  return api.get(constants.GET_COUNTS_PER_MP_FOR_DATE_RANGE, {
    params: {
      mpNames,
      startDate: startDate.$d,
      endDate: endDate.$d,
    },
  });
};

export { getCurrentMPs, getCountsPerMPForDateRange };
