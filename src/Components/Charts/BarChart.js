import {Bar} from "react-chartjs-2";
import React, {useEffect} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export default function BarChart(props){
    console.log(props.data)
    const [chartData, setChartData] = React.useState(0);
    const [chartLabel, setChartLabel] = React.useState(0);
    useEffect(()=> {
        setChartLabel(formatDateForLabels(props.data.map((item) => item.eventDate)))
        setChartData(props.data.map((item) => item.messageCount))
    },[props.data])
    function formatDateForLabels(dates) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Tarih formatlama fonksiyonu
        function formatDate(dateString) {
            const date = new Date(dateString);
            const dayOfWeek = daysOfWeek[date.getDay()];
            const dayOfMonth = date.getDate().toString().padStart(2, '0'); // 2 haneli formatta gün

            return `${dayOfMonth} ${dayOfWeek}`;
        }

        // Tarihleri formatla
        return dates.map(date => formatDate(date));
    }
    const data = {
        labels: chartLabel,
        datasets: [
            {
                label: 'Votes',
                data: chartData,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sample Bar Chart',
            },
        },
    };

    return <Bar data={data} options={options} />;
}