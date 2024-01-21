import MPMultiDropdown from '../MPMultiDropdown';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateRangePicker from '../DateRangePicker';

import './style.css';

const SelectStatsFilters = ({
  authors,
  selectedMPsForCount,
  selectMPsForCount,
  startDateForCount,
  selectStartDateForCount,
  endDateForCount,
  selectEndDateForCount,
  isLoading,
}) => {
  return (
    <div id="select-stats-filters">
      <MPMultiDropdown
        allMPs={authors}
        selectedMPs={selectedMPsForCount}
        selectMPs={selectMPsForCount}
        isLoading={isLoading}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          startDateForCount={startDateForCount}
          selectStartDateForCount={selectStartDateForCount}
          endDateForCount={endDateForCount}
          selectEndDateForCount={selectEndDateForCount}
          isLoading={isLoading}
        />
      </LocalizationProvider>
    </div>
  );
};

export default SelectStatsFilters;
