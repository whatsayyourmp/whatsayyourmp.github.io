import { CountsForMPs } from '@/app/types/common';
import { ChartJSGraphData } from './types';

export function transformDataForChartJSGraph(countsForMPs: CountsForMPs): ChartJSGraphData {
    const output = {} as ChartJSGraphData;

    Object.entries(countsForMPs).forEach(([mpName, countsPerType]) => {
        Object.keys(countsPerType).forEach((reportType) => {
            if (!output[reportType]) {
                output[reportType] = [{ label: mpName, y: countsPerType[reportType] }];
            } else {
                output[reportType].push({ label: mpName, y: countsPerType[reportType] });
            }
        });
    });

    // this is required to avoid having duplicate y-axis labels - 
    //  must zero-pad count for each report type if MPs did not participate in them
    const allUniqueMPsProvided = getUniqueMPs(countsForMPs);
    Object.values(output).forEach((countsPerMp) => {
        const uniqueMpsForReportType = countsPerMp.map(countPerMP => countPerMP.label);
        allUniqueMPsProvided.forEach(uniqueMp => {
            if (uniqueMpsForReportType.includes(uniqueMp)) {
                return;
            }
            countsPerMp.push({ label: uniqueMp, y: 0 });
        });
    });

    // also need to make sure to sort the countsPerMP in each reportType by the mpName.
    // For some reason, the graph is put on the bar chart by its index, not the label
    Object.entries(output).forEach(([reportType, countsPerMP]) => {
        countsPerMP.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });
        output[reportType] = countsPerMP;
    });

    return output;
}

export function getUniqueMPs(input: CountsForMPs): string[] {
    const mps: string[] = [];

    Object.keys(input).forEach((name) => {
        if (mps.includes(name)) {
            return;
        }

        mps.push(name);
    });

    return mps;
}

export function countNumberOfUniqueMPs(input: CountsForMPs) {
    const mps = getUniqueMPs(input);

    return mps.length;
}

export function calculateHeight(dataLength: number) {
    if (dataLength <= 3) {
        return 300;
    }
    return 300 + Math.log2(dataLength) * 100;
}

