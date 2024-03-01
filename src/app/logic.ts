import { CountsForMPs, CountsPerMP } from "./types/common";

export function getUniqueReportTypes(countsForMPs: CountsForMPs): string[] {
    const uniqueReportTypes: Set<string> = new Set();
    for (const mpName in countsForMPs) {
      const countsPerMP = countsForMPs[mpName];
      for (const reportType in countsPerMP) {
        uniqueReportTypes.add(reportType);
      }
    }
    return Array.from(uniqueReportTypes);
  }

export function filterCountsForMPsByReportTypes(countsForMPs: CountsForMPs, reportTypes: string[]): CountsForMPs {
  const filteredCountsForMPs: CountsForMPs = {};

  for (const mpName in countsForMPs) {
    const countsPerMP = countsForMPs[mpName];
    const filteredCountsPerMP: CountsPerMP = {};

    for (const reportType of reportTypes) {
      if (countsPerMP.hasOwnProperty(reportType)) {
        filteredCountsPerMP[reportType] = countsPerMP[reportType];
      }
    }

    if (Object.keys(filteredCountsPerMP).length > 0) {
      filteredCountsForMPs[mpName] = filteredCountsPerMP;
    }
  }

  return filteredCountsForMPs;
} 