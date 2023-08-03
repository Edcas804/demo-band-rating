import {useEffect, useContext} from "react";
import Chart from 'chart.js/auto';
import {SocketContext} from "../context/SocketContext.jsx";

const data = {
    labels: ['red', 'green'],
    datasets: [{
        label: '# of votes',
        data: [65, 59],
        borderWidth: 1
    }]

};
const BandChart = () => {
    const {socket} = useContext(SocketContext);
    useEffect(() => {
        socket.on('current-bands', (data) => {
            newChart(data)
        })
    }, [socket])
    const newChart = (data = []) => {
        let myChart
        let ctx = document.querySelector('#myChart');
        if (myChart) {
            myChart.destroy()
        }
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(band => band.name),
                datasets: [{
                    label: '# of votes',
                    data: data.map(band => band.votes),
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
            }
        });
    }
    return (
        <div>
            <canvas id="myChart"></canvas>
        </div>
    )
}
export default BandChart