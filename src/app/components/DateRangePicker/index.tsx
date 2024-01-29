import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import constants from '../../constants';
import style from './style.module.css';
import { Dayjs } from 'dayjs';

type DateRangePickerProps = {
  startDateForCount: Dayjs,
  selectStartDateForCount: any,
  endDateForCount: Dayjs,
  selectEndDateForCount: any,
  isLoading: boolean
}

const DateRangePicker = ({
  startDateForCount,
  selectStartDateForCount,
  endDateForCount,
  selectEndDateForCount,
  isLoading,
}: DateRangePickerProps): any => {
  return (
    <div id={style["date-range-picker"]}>
      <DateTimePicker
        label="Start Year & Month"
        views={['year', 'month']}
        minDate={constants.DEFAULT_COUNT_RANGE_START_DATE}
        maxDate={constants.DEFAULT_COUNT_RANGE_END_DATE}
        value={startDateForCount}
        onChange={selectStartDateForCount}
        // renderInput={(params: any) => <TextField {...params} helperText={null} />}
        disabled={isLoading}

      />
      <DateTimePicker
        label="End Year & Month"
        views={['year', 'month']}
        minDate={startDateForCount}
        maxDate={constants.DEFAULT_COUNT_RANGE_END_DATE}
        value={endDateForCount}
        onChange={selectEndDateForCount}
        // renderInput={(params: any) =>
        //   <TextField
        //     {...params}
        //     error={true}
        //     helperText="End date cannot be earlier than start."
        //   />
        // }
        disabled={isLoading}
      />
    </div>
  );
};

export default DateRangePicker;
