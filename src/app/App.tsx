'use client';

import { SetStateAction, useEffect, useState } from 'react';
import NoSSR from '@mpth/react-no-ssr';
import dynamic from 'next/dynamic'
import { Dayjs } from 'dayjs';

import styles from "./app.module.css";
import constants from "./constants";
import { CountsForMPs, MP } from './types/common';
import SelectStatsFilters from './components/SelectStatsFilters';

const CountsChart = dynamic(() => import('./components/CountsChart'), { ssr: false })
import MPLoadFailSnackbar from './components/MPLoadFailSnackbar';
import LoadFailSnackbar from './components/LoadFailSnackbar';

import { getCountsPerMPForDateRange, getCurrentMPs } from './services';

export default function App() {
  const [authors, setAuthors] = useState([] as MP[]);
  const [selectedMPsForCount, setSelectedMPsForCount] = useState([] as string[]);
  const [debatesCount, setDebatesCount] = useState({} as CountsForMPs);
  const [isCountLoading, setIsCountLoading] = useState(false);
  const [startDateForCount, setStartDateForCount] = useState(
    constants.DEFAULT_COUNT_RANGE_START_DATE,
  );
  const [endDateForCount, setEndDateForCount] = useState(
    constants.DEFAULT_COUNT_RANGE_END_DATE,
  );
  const [didCountLoadFail, setDidCountLoadFail] = useState(false);
  const [didMPsLoadFail, setDidMPsLoadFail] = useState(false);

  useEffect(() => {
    getCurrentMPs(localStorage.getItem('DEVELOPER_API_KEY') ?? undefined,)
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
      localStorage.getItem('DEVELOPER_API_KEY') ?? undefined,
    )
      .then((response) => {
        setDebatesCount(response.data);
      })
      .catch((error) => {
        // TODO: catch such errors at Sentry
        console.error('See error when fetching count:', error);
        setDidCountLoadFail(true);
      })
      .finally(() => setIsCountLoading(false));
  }, [isCountLoading, selectedMPsForCount, startDateForCount, endDateForCount]);

  const selectMPsForCount = (justSelectedMPsForCount: SetStateAction<string[]>) => {
    setSelectedMPsForCount(justSelectedMPsForCount);
  };

  const selectStartDateForCount = (justSelectedStartDate: SetStateAction<Dayjs>) => {
    setStartDateForCount(justSelectedStartDate);
  };

  const selectEndDateForCount = (justSelectedEndDate: SetStateAction<Dayjs>) => {
    setEndDateForCount(justSelectedEndDate);
  };

  const isAtLeastOneMPSelected = selectedMPsForCount.length > 0;

  return (
    <NoSSR>
      <div className={styles.App}>
        <header>
          <h1>
            What Say Your MP
          </h1>
        </header>
        <div>
          <p style={{ padding: 10, paddingLeft: 15, paddingRight: 15 }}>
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
          {
            isCountLoading ? (
              <p>Loading...</p>
            ) : isAtLeastOneMPSelected && <CountsChart debatesCount={debatesCount} />
          }
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
        <footer>
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
    </NoSSR>
  );
}
