import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './index.css';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const COLORS = {
    BLUE: '#3498db',
    GREEN: '#2ecc71',
    RED: '#e74c3c',
    ORANGE: '#f39c12',
    PURPLE: '#9b59b6',
    TURQUOISE: '#1abc9c',
    PUMPKIN: '#e67e22',
    MIDNIGHT_BLUE: '#34495e',
    CONCRETE: '#95a5a6',
    CHARCOAL: '#2c3e50',
    WISTERIA: '#8e44ad',
    SUNFLOWER: '#f1c40f',
    NEPHRITIS: '#27ae60',
};

const COLOR_LOOKUP_TABLE = {
    'Written Answers to Questions for Oral Answer Not Answered by End of Question Time':
        COLORS.BLUE,
    'Written Answers to Questions': COLORS.GREEN,
    'Oral Answers to Questions': COLORS.RED,
    "President's Address": COLORS.ORANGE,
    Budget: COLORS.PURPLE,
    'Ministerial Statement': COLORS.TURQUOISE,
    Clarification: COLORS.PUMPKIN,
    Bills: COLORS.MIDNIGHT_BLUE,
    'Bills Introduced': COLORS.CONCRETE,
    'Matter Raised On Adjournment Motion': COLORS.CHARCOAL,
    Motion: COLORS.PUMPKIN,
    'Corrections by Written Statements': COLORS.NEPHRITIS,
    Tributes: COLORS.WISTERIA,
    'Point Of Order': COLORS.SUNFLOWER,
    Petitions: COLORS.BLUE,
    'Permission to Members to be Absent': COLORS.GREEN,
    'Speaker / Announcement by Speaker': COLORS.RED,
    'Administration Of Oaths': COLORS.ORANGE,
    Attendance: COLORS.PURPLE,
    'Personal Explanation': COLORS.TURQUOISE,
};

const ONE_MP_SELECTED = 1;
const NO_TICKS = 0;
const ONE_TICK_PER_MP = 1;

function transformDataForChartJSGraph(debatesCount) {
    const output = {};

    debatesCount.forEach((countPerMP) => {
        const { name: mpName, ...countsPerType } = countPerMP;
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
    const allUniqueMPsProvided = getUniqueMPs(debatesCount)
    Object.values(output).forEach((countsPerMp) => {
        const uniqueMpsForReportType = countsPerMp.map(countPerMP => countPerMP.label)
        allUniqueMPsProvided.forEach(uniqueMp => {
            if (uniqueMpsForReportType.includes(uniqueMp)) {
                return
            }
            countsPerMp.push({ label: uniqueMp, y: 0 })
        })
    })

    // also need to make sure to sort the countsPerMP in each reportType by the mpName.
    // For some reason, the graph is put on the bar chart by its index, not the label
    Object.entries(output).forEach(([reportType, countsPerMP]) => {
        countsPerMP.sort((a, b) => {
            return a.label.localeCompare(b.label);
        })
        output[reportType] = countsPerMP
    })

    return output;
}


function getUniqueMPs(input) {
    const mps = [];

    input.forEach((inputDatum) => {
        const { name } = inputDatum;

        if (mps.includes(name)) {
            return;
        }

        mps.push(name);
    });

    return mps;
}

function countNumberOfUniqueMPs(input) {
    const mps = getUniqueMPs(input)

    return mps.length;
}

function calculateHeight(dataLength) {
    if (dataLength <= 3) {
        return 300
    }
    return 300 + Math.log2(dataLength) * 100
}

const GenericChart = ({ debatesCount }) => {
    const dataForChartJSGraph = transformDataForChartJSGraph(debatesCount)

    const numberOfUniqueMPsSelected = countNumberOfUniqueMPs(debatesCount)
    const height = calculateHeight(numberOfUniqueMPsSelected)
    const containerProps = {
        height: height
    }

    const barChartData = Object.keys(dataForChartJSGraph)
        .map(countType => {
            return {
                type: "stackedBar",
                color: COLOR_LOOKUP_TABLE[countType],
                name: countType,
                showInLegend: true,
                indexLabelFontColor: "white",
                dataPoints: dataForChartJSGraph[countType]
            }
        })

    const options = {
        height,
        toolTip: {
            shared: true,
        },
        legend: {
            verticalAlign: "top"
        },
        axisX: {
            // required to ensure that '-1', and '1' ticks do not show up on the axis
            // when only one MP is selected
            interval: numberOfUniqueMPsSelected === ONE_MP_SELECTED ? NO_TICKS : ONE_TICK_PER_MP,
        },
        axisY: {
            gridThickness: 0,
            tickLength: 5,
        },
        data: barChartData,
    }
    return (
        <CanvasJSChart
            containerProps={containerProps}
            options={options}
        />
    );
}

export default GenericChart;