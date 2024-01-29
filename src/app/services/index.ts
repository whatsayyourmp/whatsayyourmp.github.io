import axios, { AxiosResponse } from 'axios';
import constants from '../constants';
import { Dayjs } from 'dayjs';
import { CountsForMPs, MP } from '../types/common';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // headers: {
  //   ...{
  //     'Content-Type': 'application/json'
  //   }, ...(constants.STAGE !== 'production' && typeof window !== undefined) ? {
  //     'Authorization': window.localStorage.getItem('DEVELOPER_API_KEY'),
  //   } : {}
  // }
});

const getCurrentMPs = (developerApiKey?: string): Promise<AxiosResponse<MP[], any>> => {
  return api.get(
    constants.GET_CURRENT_MPS,
    developerApiKey ?
      {
        headers: {
          Authorization: developerApiKey
        }
      }
      :
      {}
  );
};

const getCountsPerMPForDateRange = async (
  mpNames: string[],
  startDate: Dayjs,
  endDate: Dayjs,
  developerApiKey?: string
): Promise<AxiosResponse<CountsForMPs, any>> => {
  return api.get(constants.GET_COUNTS_PER_MP_FOR_DATE_RANGE, {
    ...{
      params: {
        mpNames,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
      },
    }, ...developerApiKey && {
      headers: {
        Authorization: developerApiKey
      }
    }
  });
};

export { getCurrentMPs, getCountsPerMPForDateRange };
