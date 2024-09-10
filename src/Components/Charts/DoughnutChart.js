import React, {useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart(props) {
    const [doughnutData, setDoughnutData] = React.useState([]);
    const [labels, setLabels] = React.useState([]);
    useEffect(() => {
        if (props.data.length > 0) {
            const top10Data = props.data.slice(0, 10);
            const otherData = props.data.slice(10);
            const otherCount = otherData.reduce((sum, item) => sum + parseInt(item.messageCount), 0);

            const top10Labels = top10Data.map(item => item.username || item.channelName);
            const top10Values = top10Data.map(item => parseInt(item.messageCount));

            setLabels([...top10Labels, 'Others']);
            setDoughnutData([...top10Values, otherCount]);
        }
    }, [props.data]);
    console.log(labels,doughnutData)
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Message',
                data: doughnutData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return <Doughnut data={data}/>;
}
