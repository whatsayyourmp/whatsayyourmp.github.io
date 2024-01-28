import { useEffect, useState } from 'react';
import { getCurrentMPs, getCountsPerMPForDateRange } from './services/index';
import './App.css';
// import DebateStatistics from './components/DebateStatistics';
import SelectStatsFilters from './components/SelectStatsFilters';
import LoadFailSnackbar from './components/LoadFailSnackbar';
import Constants from './constants';
import MPLoadFailSnackbar from './components/MPLoadFailSnackbar';
import GenericChart from './components/GenericChart';

const transformDebatesCountV2 = (countPerReportTypePerMp) => {
  const uniqueReportTypes = [];

  for (const mpName in countPerReportTypePerMp) {
    const countsPerMP = countPerReportTypePerMp[mpName];
    if (!countPerReportTypePerMp[mpName]) {
      countPerReportTypePerMp[mpName] = {};
    }

    for (const reportType in countsPerMP) {
      if (!uniqueReportTypes.includes(reportType)) {
        uniqueReportTypes.push(reportType);
      }
    }
  }

  const transformedDebatesCount = [];
  const keys = Object.keys(countPerReportTypePerMp);
  const values = Object.values(countPerReportTypePerMp);
  for (let i = 0; i < Object.entries(countPerReportTypePerMp).length; i++) {
    transformedDebatesCount.push({ name: keys[i], ...values[i] });
  }
  return [transformedDebatesCount, uniqueReportTypes];
};

function App() {
  const [authors, setAuthors] = useState([]);
  const [selectedMPsForCount, setSelectedMPsForCount] = useState([]);
  const [debatesCount, setDebatesCount] = useState([]);
  const [uniqueSittingDates, setUniqueReportTypes] = useState([]);
  const [isCountLoading, setIsCountLoading] = useState(false);
  const [startDateForCount, setStartDateForCount] = useState(
    Constants.DEFAULT_COUNT_RANGE_START_DATE,
  );
  const [endDateForCount, setEndDateForCount] = useState(
    Constants.DEFAULT_COUNT_RANGE_END_DATE,
  );
  const [didCountLoadFail, setDidCountLoadFail] = useState(false);
  const [didMPsLoadFail, setDidMPsLoadFail] = useState(false);

  useEffect(() => {
    getCurrentMPs()
      .then((response) => {
        if (response.data) {
          setAuthors(response.data);
        }
      })
      .catch((e) => {
        setDidMPsLoadFail(true);
      });
  }, []);

  useEffect(() => {
    if (endDateForCount < startDateForCount) {
      // console.error('TODO: Show error for startDate greater than endDate')
      return;
    }
    if (selectedMPsForCount.length === 0) {
      return;
    }
    setIsCountLoading(true);
  }, [selectedMPsForCount, startDateForCount, endDateForCount]);

  useEffect(() => {
    if (!isCountLoading) {
      return;
    }
    getCountsPerMPForDateRange(
      selectedMPsForCount,
      startDateForCount,
      endDateForCount,
    )
      .then((response) => {
        const [transformedDebatesCount, uniqueReportTypes] =
          transformDebatesCountV2(response.data);
        setDebatesCount(transformedDebatesCount);
        setUniqueReportTypes(uniqueReportTypes);
      })
      .catch((error) => {
        // TODO: catch such errors at Sentry
        console.error('See error when fetching count:', error);
        setDidCountLoadFail(true);
      })
      .finally(() => setIsCountLoading(false));
  }, [isCountLoading, selectedMPsForCount, startDateForCount, endDateForCount]);

  const selectMPsForCount = (justSelectedMPsForCount) => {
    setSelectedMPsForCount(justSelectedMPsForCount);
  };

  const selectStartDateForCount = (justSelectedStartDate) => {
    setStartDateForCount(justSelectedStartDate);
  };

  const selectEndDateForCount = (justSelectedEndDate) => {
    setEndDateForCount(justSelectedEndDate);
  };

  const isAtLeastOneMPSelected = selectedMPsForCount.length > 0;
  const isAnyCountLoaded = uniqueSittingDates.length > 0;

  return (
    <div className="App">
      <header>
        <h1>What Say Your MP</h1>
      </header>
      <div>
        <p>
          This project uses the{' '}
          <a href="https://www.parliament.gov.sg/parliamentary-business/official-reports-(parl-debates)">
            official reports
          </a>{' '}
          of each parliamentary session to collect debate records, a.k.a.
          Hansards. These debates are then analyzed to investigate the
          involvement of each MP in debates.
        </p>
      </div>
      <div>
        <h2>Overall Statistics</h2>
        {!isAtLeastOneMPSelected && !isCountLoading && (
          <div>
            <p>Please Select Some MPs</p>
          </div>
        )}
        {isAtLeastOneMPSelected && !isCountLoading && !isAnyCountLoaded && (
          <div>
            <p>No results from the selection filter</p>
          </div>
        )}
        {/* Doing some very unscientific AB testing on the two types of charts */}
        {
          isCountLoading ? (
            <p>Loading...</p>
          ) : isAnyCountLoaded && <GenericChart debatesCount={debatesCount} />
        }
        {/* {isCountLoading ? (
          <p>Loading...</p>
        ) : (
          isAnyCountLoaded && (
            <DebateStatistics
              transformedDebatesCount={debatesCount}
              uniqueReportTypes={uniqueSittingDates}
            />
          )
        )} */}
      </div>
      <SelectStatsFilters
        authors={authors}
        selectedMPsForCount={selectedMPsForCount}
        selectMPsForCount={selectMPsForCount}
        startDateForCount={startDateForCount}
        selectStartDateForCount={selectStartDateForCount}
        endDateForCount={endDateForCount}
        selectEndDateForCount={selectEndDateForCount}
        isLoading={isCountLoading}
      />
      <footer className="note">
        <p>
          Made for the collective knowledge of Singaporeans and the betterment
          of Singaporean Democracy 🇸🇬
        </p>
        <p>
          Please submit bugs, feature requests, and general feedback{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.gle/seEDmBqZrQrqXeja8"
          >
            here
          </a>
        </p>
        <br></br>
      </footer>
      <LoadFailSnackbar
        didCountLoadFail={didCountLoadFail}
        setDidCountLoadFail={setDidCountLoadFail}
      />
      <MPLoadFailSnackbar
        didMPsLoadFail={didMPsLoadFail}
        setDidMPsLoadFail={setDidMPsLoadFail}
      />
    </div>
  );
}

export default App;
