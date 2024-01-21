import SelectSearch, { fuzzySearch } from 'react-select-search';
import './style.css';

const MPMultiDropdown = ({ allMPs, selectedMPs, selectMPs, isLoading }) => {
  const options = allMPs.map((author) => {
    const mpName = author.name;
    return { name: mpName, value: mpName };
  });
  const loadingMessage = 'Loading the list of Members of Parliament...';
  const placeholderMessage =
    'Please select Members of Parliament to get counts for';
  const authorsLoaded = allMPs.length > 0;
  return (
    <SelectSearch
      options={options}
      multiple={true}
      search={true}
      closeOnSelect={true}
      filterOptions={fuzzySearch}
      placeholder={authorsLoaded ? placeholderMessage : loadingMessage}
      onChange={selectMPs}
      value={selectedMPs}
      printOptions={'on-focus'}
      disabled={isLoading}
    ></SelectSearch>
  );
};

export default MPMultiDropdown;
