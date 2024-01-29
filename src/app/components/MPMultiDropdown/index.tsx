import style from './style.module.css';
import { MP } from '@/app/types/common';
import React from 'react';
import { MultiSelect } from "react-multi-select-component";

type MPMultiDropdownProps = {
  allMPs: MP[],
  selectedMPs: string[],
  selectMPs: any,
  isLoading: boolean,
}

const MPMultiDropdown = ({
  allMPs,
  selectedMPs,
  selectMPs,
  isLoading,
}: MPMultiDropdownProps) => {
  const options = allMPs.map((author) => {
    const mpName = author.name;
    return { label: mpName, value: mpName };
  });
  const loadingMessage = 'Loading the list of Members of Parliament...';
  const placeholderMessage =
    'Please select Members of Parliament to get counts for';
  const authorsLoaded = allMPs.length > 0;

  const selectedMPOptions = React.useMemo(
    () => selectedMPs.map(mpName => {
      return { label: mpName, value: mpName };
    }),
    [selectedMPs]
  );

  return (
    <MultiSelect
      className={style.multiSelect}
      options={options}
      hasSelectAll={false}
      value={selectedMPOptions}
      onChange={(props: any) => selectMPs(props.map(({ label }: { label: any }) => label))}
      labelledBy={authorsLoaded ? placeholderMessage : loadingMessage}
      disabled={isLoading}
    />
  );
};

export default MPMultiDropdown;
