import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  PieChart,
  Pie,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    total: 1400,
    paid: 600,
    free: 800,
  },
  {
    name: 'Fab',
    total: 1500,
    paid: 800,
    free: 700,
  },
  {
    name: 'Mar',
    total: 900,
    paid: 300,
    free: 600,
  },
  {
    name: 'May',
    total: 2600,
    paid: 1480,
    free: 1200,
  },
  {
    name: 'Jun',
    total: 1100,
    paid: 500,
    free: 600,
  },
  {
    name: 'jul',
    total: 1700,
    paid: 900,
    free: 800,
  },
];

export default class MainChart extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={700}
            height={600}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="paid" stroke="red" />
            <Line type="monotone" dataKey="free"  stroke="#8884d8" />
            <Bar dataKey="total" barSize={20} fill="#413ea0" >
              <LabelList dataKey="total" position="top" />
            </Bar>
          </ComposedChart>
          {/* <PieChart 
            width={730} 
            height={250}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <Pie data={data} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
            <Pie data={data} dataKey="paid" nameKey="name" cx="50%" cy="50%" innerRadius={85} outerRadius={110} fill="#82ca9d" label />
          </PieChart> */}
        </ResponsiveContainer>
      </div>
    );
  }
}
