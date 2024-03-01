import MPMultiDropdown from '../MPMultiDropdown';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DateRangePicker from '../DateRangePicker';
import ReportTypeFilter from '../ReportTypeFilter';

import styles from './style.module.css';
import { Dayjs } from 'dayjs';
import { MP } from '@/app/types/common';

type SelectStatsFiltersProps = {
  authors: MP[],
  selectedMPsForCount: string[],
  selectMPsForCount: Function,
  startDateForCount: Dayjs,
  selectStartDateForCount: any,
  endDateForCount: Dayjs,
  selectEndDateForCount: any,
  possibleReportTypes: string[],
  selectedReportTypesForCount: string[],
  selectReportTypes: Function,
  isLoading: boolean
}

const SelectStatsFilters = ({
  authors,
  selectedMPsForCount,
  selectMPsForCount,
  startDateForCount,
  selectStartDateForCount,
  endDateForCount,
  selectEndDateForCount,
  possibleReportTypes,
  selectedReportTypesForCount,
  selectReportTypes,
  isLoading,
}: SelectStatsFiltersProps) => {
  return (
    <div id={styles['select-stats-filters']}>
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
      <ReportTypeFilter
        possibleReportTypes={possibleReportTypes}
        selectedReportTypesForCount={selectedReportTypesForCount}
        selectReportTypes={selectReportTypes}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SelectStatsFilters;
