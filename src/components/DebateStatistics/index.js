import { memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import './style.css';

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

const DebateStatistics = ({ transformedDebatesCount, uniqueReportTypes }) => {
  return (
    <div id="debate-statistics-section">
      <h3>Debates Participated Per Selected MP</h3>
      <ResponsiveContainer width="100%" minHeight="50vh">
        <BarChart
          width={500}
          height={300}
          data={transformedDebatesCount}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {uniqueReportTypes.map((reportType, index) => (
            <Bar
              key={index}
              dataKey={reportType}
              stackId="a"
              fill={COLOR_LOOKUP_TABLE[reportType]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(DebateStatistics);
