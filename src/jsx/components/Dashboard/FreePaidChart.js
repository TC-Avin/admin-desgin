import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';

const FreePaidChart = () => {
  const [data, setData] = useState({
    labels: ['Free', 'Paid'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(71, 225, 167, 0.5)',
        pointHoverBorderColor: 'rgb(71, 225, 167)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [81, 19],
      },
    ],
  });

  useEffect(() => {
    setInterval(function() {
      var oldDataSet = data.datasets[0];
      var newData = [81,19];

    //   for (var x = 0; x < data.labels.length; x++) {
    //     newData.push(Math.floor(Math.random() * 100));
    //   }

      var newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      var newState = {
        ...data,
        datasets: [newDataSet],
      };

      setData(newState);
    }, 5000);
  }, []);

  return (
    <CDBContainer>
      <h3 className="mt-5">Free/Paid Members</h3>
      <Doughnut data={data} options={{ responsive: true }} />
    </CDBContainer>
  );
};

export default FreePaidChart;