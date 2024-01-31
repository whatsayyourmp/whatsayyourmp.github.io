import React from 'react';
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
import style from './style.module.css';
import { CountsForMP } from '@/app/types/common';
import {
    transformDataForChartJSGraph,
    countNumberOfUniqueMPs,
    calculateHeight,
} from './logic';

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

type GenericChartProps = {
    debatesCount: CountsForMP[]
}

const GenericChart = ({ debatesCount }: GenericChartProps) => {
    const dataForChartJSGraph = transformDataForChartJSGraph(debatesCount)

    const numberOfUniqueMPsSelected = countNumberOfUniqueMPs(debatesCount)
    const height = calculateHeight(numberOfUniqueMPsSelected)
    const containerProps = {
        height: height
    }

    const barChartData = Object.keys(dataForChartJSGraph)
        .map(countType => {
            if (!(countType in COLOR_LOOKUP_TABLE)) {
                return
            }
            return {
                type: "stackedBar",
                color: (COLOR_LOOKUP_TABLE as any)[countType],
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
        <div className={style['hide-link']}>
            <CanvasJSChart
                containerProps={containerProps}
                options={options}
            />
        </div>
    );
}

export default GenericChart;