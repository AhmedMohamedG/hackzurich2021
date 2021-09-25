import React from 'react';
import { Line } from 'react-chartjs-2';
import * as plotting_data from './data/plotting_data.json'

const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    pink: 'rgb(222, 111, 155)'
};

const data = {
    labels: plotting_data.survey_dates,
    datasets: [
        {
            label: 'Energy',
            data: plotting_data.energy.mean,
            fill: false,
            backgroundColor: CHART_COLORS.red,
            borderColor: CHART_COLORS.red,
        },
        {
            label: 'Chest',
            data: plotting_data.chest.mean,
            fill: false,
            backgroundColor: CHART_COLORS.orange,
            borderColor: CHART_COLORS.orange,
        },
        {
            label: 'General',
            data: plotting_data.general.mean,
            fill: false,
            backgroundColor: CHART_COLORS.yellow,
            borderColor: CHART_COLORS.yellow,
        },
        {
            label: 'Food',
            data: plotting_data.food.mean,
            fill: false,
            backgroundColor: CHART_COLORS.green,
            borderColor: CHART_COLORS.green,
        },
        {
            label: 'Mental Health',
            data: plotting_data["mental health"].mean,
            fill: false,
            backgroundColor: CHART_COLORS.blue,
            borderColor: CHART_COLORS.blue,
        },
        {
            label: 'Social Life',
            data: plotting_data["social life"].mean,
            fill: false,
            backgroundColor: CHART_COLORS.purple,
            borderColor: CHART_COLORS.purple,
        },
        {
            label: 'Eating',
            data: plotting_data.eating.mean,
            fill: false,
            backgroundColor: CHART_COLORS.grey,
            borderColor: CHART_COLORS.grey,
        },
        {
            label: 'Head',
            data: plotting_data.head.mean,
            fill: false,
            backgroundColor: CHART_COLORS.pink,
            borderColor: CHART_COLORS.pink,
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
            <h1>Health history</h1>
        </div>
        <div style={{ width: '50%', margin: 'auto' }}>
            <Line data={data} options={options} />
        </div>
    </>
);

export default Dashboard;