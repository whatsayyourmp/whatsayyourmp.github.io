import axios from 'axios';
import constants from '../constants';

const getCurrentMPs = () => {
  return axios.get(constants.GET_CURRENT_MPS);
};

const getCountsPerMPForDateRange = async (mpNames, startDate, endDate) => {
  return axios.get(constants.GET_COUNTS_PER_MP_FOR_DATE_RANGE, {
    params: {
      mpNames,
      startDate: startDate.$d,
      endDate: endDate.$d,
    },
  });
};

export { getCurrentMPs, getCountsPerMPForDateRange };
