/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterPlot({ mds }) {

    const [data, setData] = useState(null)

    const options = {
        scales: {
            y: { beginAtZero: false }
        }
    };

    useEffect(() => {
        console.warn(data)
        if (mds) {
            setData(
                {
                    datasets: [
                        {
                            label: "File",
                            data: Array.from({ length: mds.x.length }, (_, i) => ({
                                x: mds.x[i],
                                y: mds.y[i],
                            })),
                            backgroundColor: 'rgba(25, 118, 210, 0.7)'
                        }
                    ]
                }

            )
        }
    }, [mds])

    return (
        <>
            {data && <Scatter options={options} data={data}></Scatter>}
        </>
    )
}