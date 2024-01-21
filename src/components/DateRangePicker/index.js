import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import constants from '../../constants';
import './style.css';

const DateRangePicker = ({
  startDateForCount,
  selectStartDateForCount,
  endDateForCount,
  selectEndDateForCount,
  isLoading,
}) => {
  return (
    <div id="date-range-picker">
      <DateTimePicker
        label="Start Year & Month"
        views={['year', 'month']}
        minDate={constants.DEFAULT_COUNT_RANGE_START_DATE}
        maxDate={constants.DEFAULT_COUNT_RANGE_END_DATE}
        value={startDateForCount}
        onChange={selectStartDateForCount}
        renderInput={(params) => <TextField {...params} helperText={null} />}
        disabled={isLoading}
      />
      <DateTimePicker
        label="End Year & Month"
        views={['year', 'month']}
        minDate={startDateForCount}
        maxDate={constants.DEFAULT_COUNT_RANGE_END_DATE}
        value={endDateForCount}
        onChange={selectEndDateForCount}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              error={true}
              helperText="End date cannot be earlier than start."
            />
          );
        }}
        disabled={isLoading}
      />
    </div>
  );
};

export default DateRangePicker;
