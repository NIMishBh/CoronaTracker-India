import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarGraph(props) {
  const { data: mainData, name } = props;
  const barData = {
    labels: ['Active', 'Deaths'],
    datasets: [
      {
        label: 'Number Of Cases',
        data: [mainData?.active, mainData?.deaths],
        backgroundColor: ['#00cc00', '#ff0000'],
        borderWidth: 1,
      }
    ]
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    plugins: {
      tooltip: {
        mode: 'nearest',
        intersect: false
      }
    }
  };
  return (
    <Bar data={barData} options={options} />
  );
}

export default BarGraph;