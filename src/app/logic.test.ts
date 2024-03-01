import { filterCountsForMPsByReportTypes, getUniqueReportTypes } from "./logic";
import { CountsForMPs } from "./types/common";

test('filterCountsForMPsByReportTypes should return counts for specified report types only', () => {
    const countsForMPs: CountsForMPs = {
        MP1: { report1: 10, report2: 5, report3: 8 },
        MP2: { report1: 15, report2: 3 },
        MP3: { report2: 7, report3: 12 }
    };
    const filteredCountsForMPs = filterCountsForMPsByReportTypes(countsForMPs, ['report1', 'report3']);
    expect(filteredCountsForMPs).toEqual({
        MP1: { report1: 10, report3: 8 },
        MP2: { report1: 15 },
        MP3: { report3: 12 }
    });
});

test('filterCountsForMPsByReportTypes should return empty counts for MPs with no specified report types', () => {
    const countsForMPs: CountsForMPs = {
        MP1: { report1: 10, report2: 5, report3: 8 },
        MP2: { report1: 15, report2: 3 },
        MP3: { report2: 7, report3: 12 }
    };
    const filteredCountsForMPs = filterCountsForMPsByReportTypes(countsForMPs, ['report4']);
    expect(filteredCountsForMPs).toEqual({});
});

test('filterCountsForMPsByReportTypes should handle empty input countsForMPs', () => {
    const filteredCountsForMPs = filterCountsForMPsByReportTypes({}, ['report1', 'report2']);
    expect(filteredCountsForMPs).toEqual({});
});

test('filterCountsForMPsByReportTypes should handle empty input reportTypes', () => {
    const countsForMPs: CountsForMPs = {
        MP1: { report1: 10, report2: 5, report3: 8 },
        MP2: { report1: 15, report2: 3 },
        MP3: { report2: 7, report3: 12 }
    };
    const filteredCountsForMPs = filterCountsForMPsByReportTypes(countsForMPs, []);
    expect(filteredCountsForMPs).toEqual({});
});

test('filterCountsForMPsByReportTypes should handle countsForMPs with empty countsPerMP', () => {
    const emptyCountsForMPs: CountsForMPs = {
        MP1: {},
        MP2: {},
        MP3: {}
    };
    const filteredCountsForMPs = filterCountsForMPsByReportTypes(emptyCountsForMPs, ['report1', 'report2']);
    expect(filteredCountsForMPs).toEqual({});
});

test('getUniqueReportTypes should return unique report types', () => {
    const countsForMPs: CountsForMPs = {
        MP1: { report1: 10, report2: 5, report3: 8 },
        MP2: { report1: 15, report2: 3 },
        MP3: { report2: 7, report3: 12 }
    };
    const uniqueReportTypes = getUniqueReportTypes(countsForMPs);
    expect(uniqueReportTypes).toEqual(['report1', 'report2', 'report3']);
});

test('getUniqueReportTypes should handle empty input countsForMPs', () => {
    const uniqueReportTypes = getUniqueReportTypes({});
    expect(uniqueReportTypes).toEqual([]);
});

test('getUniqueReportTypes should handle countsForMPs with empty countsPerMP', () => {
    const emptyCountsForMPs: CountsForMPs = {
        MP1: {},
        MP2: {},
        MP3: {}
    };
    const uniqueReportTypes = getUniqueReportTypes(emptyCountsForMPs);
    expect(uniqueReportTypes).toEqual([]);
});

test('getUniqueReportTypes should handle countsForMPs with duplicated report types', () => {
    const countsForMPs: CountsForMPs = {
        MP1: { report1: 10, report2: 5, report3: 8 },
        MP2: { report1: 15, report2: 3 },
        MP3: { report2: 7, report3: 12 },
        MP4: { report1: 5, report3: 15 }
    };
    const uniqueReportTypes = getUniqueReportTypes(countsForMPs);
    expect(uniqueReportTypes).toEqual(['report1', 'report2', 'report3']);
});