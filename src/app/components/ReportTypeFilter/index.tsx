import { MultiSelect } from 'react-multi-select-component';

import style from './style.module.css';
import React from 'react';


type ReportTypeFilterProps = {
    possibleReportTypes: string[]
    selectedReportTypesForCount: string[],
    selectReportTypes: Function,
    isLoading: boolean
}

const ReportTypeFilter = ({
    possibleReportTypes,
    selectedReportTypesForCount,
    selectReportTypes,
    isLoading,
}: ReportTypeFilterProps) => {
    const loadingMessage = 'Loading the report types possible...';
    const placeholderMessage = 'Please select the report types to filter on';
    const reportTypesFiltered = possibleReportTypes.length > 0;

    const options = possibleReportTypes.map((reportType) => {
        return { label: reportType, value: reportType };
    });

    const selectedReportTypesOptions = React.useMemo(
        () => selectedReportTypesForCount.map(reportType => {
            return { label: reportType, value: reportType };
        }),
        [selectedReportTypesForCount]
    );

    const selectValueRenderer = (selectedReportTypesForCount: string[], possibleReportTypes: string[]) => {
        if (selectedReportTypesForCount.length === 0 || selectedReportTypesForCount.length === possibleReportTypes.length) {
            // eslint-disable-next-line react/display-name
            return () => <span className="gray">Select Report Types To Filter</span>
        }
        return undefined
    }

    if (possibleReportTypes.length === 0) {
        return null
    }

    return (
        <MultiSelect
            className={style.multiSelect}
            options={options}
            hasSelectAll={false}
            value={selectedReportTypesOptions}
            onChange={(props: any) => selectReportTypes(props.map(({ label }: { label: any }) => label))}
            labelledBy={reportTypesFiltered ? placeholderMessage : loadingMessage}
            disabled={isLoading}
            valueRenderer={selectValueRenderer(selectedReportTypesForCount, possibleReportTypes)}
        />
    );
};

export default ReportTypeFilter;
