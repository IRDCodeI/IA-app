/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Loader from "../components/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Similarity',
    },
  },
};

export default function SimilarityChart({ title, model }) {
  const [doc, setDoc] = useState("");
  const [chartOne, setChartOne] = useState(null)
  const [chartTwo, setChartTwo] = useState(null)
  const [loader, setLoader] = useState(false);

  const getSimilarityDocs = () => {
    setLoader(true);
    axios.post("http://localhost:8000/similarity",{
      doc: {
        title: doc,
        model: model
      }
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {   
      setLoader(false);   
      setChartOne({
        labels: [doc],
        datasets: [
          {
            label: 'Jacard',
            data: [res.data.jacard],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Coseno',
            data: [res.data.cosine],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
      setChartTwo({
        labels: ['Global'],
        datasets: [
          {
            label: 'Jacard',
            data: [res.data.mean_jacard],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Coseno',
            data: [res.data.cosine_mean],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    })
    .catch((err) => {        
      console.warn(err);
    });
  }

  
  useEffect(() => {
    if (title) {
      setDoc(title.name);      
    }
  }, [title]);

  useEffect(() =>{
    if(doc){
      getSimilarityDocs()
    }
  }, [doc])

  return (
    <>
      <Loader state={loader} />
      <div className="w-full flex flex-row justify-around items-center">
        <div className="w-full h-full flex flex-col space-y-8">
          <h4 className="text-2xl mt-5 font-bold dark:text-white text-sky-600 mr-5 self-center">
            Similarity
          </h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-6 items-center">
              <p className="text-xl font-bold dark:text-white text-sky-600">
                Document:{" "}
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {doc}
                </span>
              </p>
              {chartOne && <Bar options={options} data={chartOne} />}
            </div>
            <div className="flex flex-col space-y-6 items-center">
              <span className="text-xl font-bold dark:text-white text-sky-600">
                Global
              </span>
              {chartTwo && <Bar options={options} data={chartTwo} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
