import {useEffect, useState, useContext} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale, ArcElement, PointElement, LineElement, Filler,
} from 'chart.js';
import {Radar, Bar, PolarArea, Bubble} from 'react-chartjs-2';
import {SocketContext} from "../context/SocketContext.jsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    ArcElement
);
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Rating of bands',
        },
    }
}

const BandChart = () => {
    const {socket} = useContext(SocketContext);
    const [bands, setBands] = useState([]);
    useEffect(() => {
        socket.on('current-bands', (data) => {
            setBands(data);
        })
    }, [])

    const data = {
        labels: bands.map(band => band.name),
        datasets: [
            {
                label: 'Votes',
                data: bands.map(band => band.votes),
                borderColor: 'rgb(0,127,109)',
                backgroundColor: 'rgba(37,183,129,0.26)',
            }
        ],
    };
    return (
        <>
            <Bar options={options} data={data}/>
            {
                /*
                <PolarArea options={options} data={data}/>
                <Radar data={data}/>
                 */
            }
        </>

    )
}
export default BandChart