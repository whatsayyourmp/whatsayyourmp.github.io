import { CountsForMPs } from "@/app/types/common";
import { transformDataForChartJSGraph } from "./logic";

test('transformDataForChartJSGraph transforms correctly for empty input', () => {
    const input: CountsForMPs = {}

    const expectedOutput = {}

    expect(transformDataForChartJSGraph(input)).toStrictEqual(expectedOutput);
});

test('transformDataForChartJSGraph transforms correctly for 1 MP with no counts', () => {
    const input = {
        'Tan Ah Gao': {}
    }

    const expectedOutput = {}

    expect(transformDataForChartJSGraph(input)).toStrictEqual(expectedOutput);
});

test('transformDataForChartJSGraph transforms correctly for 1 MP with 1 report type', () => {
    const oneMpAndOneReportType = {
        'Tan Ah Gao': {
            oral: 69,
        }
    }

    const oneMpAndOneReportTypeOutput = {
        oral: [
            {
                label: 'Tan Ah Gao',
                y: 69
            }
        ]
    }

    expect(transformDataForChartJSGraph(oneMpAndOneReportType)).toStrictEqual(oneMpAndOneReportTypeOutput);
});

test('transformDataForChartJSGraph transforms correctly for 1 MP with 2 report types', () => {
    const oneMpAndTwoReportTypes = {
        'Tan Ah Gao': {
            oral: 69,
            written: 420,
        }
    }

    const oneMpAndTwoReportTypesOutput = {
        oral: [
            {
                label: 'Tan Ah Gao',
                y: 69
            }
        ],
        written: [
            {
                label: 'Tan Ah Gao',
                y: 420
            }
        ]
    }

    expect(transformDataForChartJSGraph(oneMpAndTwoReportTypes)).toStrictEqual(oneMpAndTwoReportTypesOutput);
});

test('transformDataForChartJSGraph transforms correctly for 2 MPs, both with 1 same report type', () => {
    const twoMpsAndOneSharedReportType = {
        'Muthu': {
            oral: 200,
        },
        'Tan Ah Gao': {
            oral: 69,
        }
    }

    const twoMpsAndOneSharedReportTypeOutput = {
        oral: [
            {
                label: 'Muthu',
                y: 200
            },
            {
                label: 'Tan Ah Gao',
                y: 69
            },
        ],
    }

    expect(transformDataForChartJSGraph(twoMpsAndOneSharedReportType))
        .toStrictEqual(twoMpsAndOneSharedReportTypeOutput);
});

test('transformDataForChartJSGraph zero-pads the reportType an MP did not participate in,'
    + ' for 2 MPs both with 1 different report type. '
    + ' This is required to maintain array index of each MP across each array of counts per report type.', () => {
        const twoMpsAndOneDifferentReportType: CountsForMPs = {
            'Muthu': {
                written: 200,
            },
            'Tan Ah Gao': {
                oral: 69,
            }
        }

        const twoMpsAndOneSharedReportTypeOutput = {
            oral: [
                {
                    label: 'Muthu',
                    y: 0
                },
                {
                    label: 'Tan Ah Gao',
                    y: 69
                },
            ],
            written: [
                {
                    label: 'Muthu',
                    y: 200
                },
                {
                    label: 'Tan Ah Gao',
                    y: 0
                },
            ]
        }

        expect(transformDataForChartJSGraph(twoMpsAndOneDifferentReportType))
            .toStrictEqual(twoMpsAndOneSharedReportTypeOutput);
});

test('transformDataForChartJSGraph transforms correctly for 2 MPs with two shared report types', () => {
    const twoMpsAndTwoSharedReportTypes: CountsForMPs = {
        'Muthu': {
            written: 200,
            oral: 10,
        },
        'Tan Ah Gao': {
            oral: 69,
            written: 40,
        }
    }

    const twoMpsAndTwoSharedReportTypesOutput = {
        oral: [
            {
                label: 'Muthu',
                y: 10
            },
            {
                label: 'Tan Ah Gao',
                y: 69
            },
        ],
        written: [
            {
                label: 'Muthu',
                y: 200
            },
            {
                label: 'Tan Ah Gao',
                y: 40
            },
        ]
    }

    expect(transformDataForChartJSGraph(twoMpsAndTwoSharedReportTypes))
        .toStrictEqual(twoMpsAndTwoSharedReportTypesOutput);
});

test('transformDataForChartJSGraph transforms correctly for 2 MPs with  ' +
    'one shared report type and one distinct report type each', () => {
        const input: CountsForMPs = {
            'Muthu': {
                written: 200,
                budget: 10,
            },
            'Tan Ah Gao': {
                motion: 69,
                written: 40,   
            }
        }

        const expectedOutput = {
            motion: [
                {
                    label: 'Muthu',
                    y: 0
                },
                {
                    label: 'Tan Ah Gao',
                    y: 69
                },
            ],
            written: [
                {
                    label: 'Muthu',
                    y: 200
                },
                {
                    label: 'Tan Ah Gao',
                    y: 40
                },
            ],
            budget: [
                {
                    label: 'Muthu',
                    y: 10
                },
                {
                    label: 'Tan Ah Gao',
                    y: 0
                },
            ],
        }

        expect(transformDataForChartJSGraph(input))
            .toStrictEqual(expectedOutput);
    });