export interface MP {
  name: string;
}

export interface ReportPerMP {
  reportIDs: string[];
}

export interface Report {
  reportID: string;
  reportType: string;
  sittingDate: string;
  title: string;
  parlNo: string;
  sessionNo: string;
  sittingNo: string;
  volumeNo: string;
  content: string;
  mpNames: string;
}

export interface CountsPerMP {
  [reportType: string]: number;
}

export interface CountsForMPs {
  [mpName: string]: CountsPerMP;
}

export interface ReportCountsForDays {
  [sittingDate: string]: CountsForMPs;
}

export type CountsForMP = {
  name: string;
  counts: CountsPerMP;
};