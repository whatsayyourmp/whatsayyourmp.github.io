import dayjs from 'dayjs';

const PARLIAMENT_START_DATE = '2020-08-24';

const STAGE = process.env.NODE_ENV;

const localHostName = process.env.HOST ?? 'localhost'

const GET_COUNTS_PER_MP_FOR_DATE_RANGE_URL_PER_STAGE = {
  local: `http://${localHostName}:6969/counts-per-mp`,
  default: 'https://hidden-pad-313204.as.r.appspot.com/counts-per-mp',
  production: 'https://hidden-pad-313204.as.r.appspot.com/counts-per-mp',
};

const GET_CURRENT_MPS_URL_PER_STAGE = {
  local: `http://${localHostName}:6969/current-mps`,
  default: 'https://hidden-pad-313204.as.r.appspot.com/current-mps',
  production: 'https://hidden-pad-313204.as.r.appspot.com/current-mps',
};

const Constants = {
  DEFAULT_COUNT_RANGE_END_DATE: dayjs(Date.now()),
  DEFAULT_COUNT_RANGE_START_DATE: dayjs(new Date(PARLIAMENT_START_DATE)),

  GET_COUNTS_PER_MP_FOR_DATE_RANGE:
    GET_COUNTS_PER_MP_FOR_DATE_RANGE_URL_PER_STAGE[STAGE] ??
    GET_COUNTS_PER_MP_FOR_DATE_RANGE_URL_PER_STAGE.default,
  GET_CURRENT_MPS:
    GET_CURRENT_MPS_URL_PER_STAGE[STAGE] ??
    GET_CURRENT_MPS_URL_PER_STAGE.default,

  STAGE
};

export default Constants;
