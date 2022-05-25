import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',

    monthly: 4000,
    annual: 5000,
    netamt: 9000,
  },
  {
    name: 'Fab',

    monthly: 3000,
    annual: 3000,
    netamt: 6000,
  },
  {
    name: 'Mar',

    monthly: 2000,
    annual: 3000,
    netamt: 5000,
  },
  {
    name: 'Apr',

    monthly: 1200,
    annual: 4000,
    netamt: 5200,
  },
  {
    name: 'May',

    monthly: 1890,
    annual: 4800,
    netamt: 2181,
  },
  {
    name: 'Jun',

    monthly: 1200,
    annual: 3800,
    netamt: 7000,
  },
  {
    name: 'Jul',

    monthly: 3490,
    annual: 4300,
    netamt: 2100,
  },
];

export default class SubscriptionChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="annual" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="monthly" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
