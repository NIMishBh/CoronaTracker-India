import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarGraph(props) {
  const { data, name } = props;
  return (
    <ResponsiveContainer width={'100%'} height={name.height}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5
        }}
      >
        <XAxis dataKey={name.xAxis} />
        <YAxis  type="number"/>
        <Tooltip />
        <Legend />
        <Bar dataKey={name.barDataName} fill={name.color} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarGraph;