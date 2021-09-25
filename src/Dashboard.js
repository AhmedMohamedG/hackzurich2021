import React from 'react';
import { Line } from 'react-chartjs-2';

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

const data = {
    labels: ['month 1', 'month 2', 'month 3', 'month 4', 'month 5', 'month 6', 'month 7', 'month 8', 'month 9', 'month 10'],
    datasets: [
        {
            label: 'Head',
            data: [1, 1, 2, 2, 3, 2, 2, 3, 4, 3, 3, 4, 4],
            fill: false,
            backgroundColor: CHART_COLORS.red,
            borderColor: CHART_COLORS.red,
        },
        {
            label: 'Food',
            data: [1, 1, 1, 2, 2, 3, 2, 3, 3, 3, 3, 4, 4],
            fill: false,
            backgroundColor: CHART_COLORS.blue,
            borderColor: CHART_COLORS.blue,
        },
        {
            label: 'Activity',
            data: [2, 2, 3, 2, 1, 3, 3, 3, 3, 3],
            fill: false,
            backgroundColor: CHART_COLORS.green,
            borderColor: CHART_COLORS.green,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Dashboard = () => (
    <>
        <div className='header'>
            <h1>Monthly health breakdown</h1>
        </div>
        <div style={{ width: '50%', margin: 'auto' }}>
            <Line data={data} options={options} />
        </div>
    </>
);

export default Dashboard;