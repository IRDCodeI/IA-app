/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState, useRef } from "react"
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Loader from "../components/Loader";
import { Scatter } from 'react-chartjs-2';
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import ClusteringLabels from "./ClusteringLabels";
import { Toast } from 'primereact/toast';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: false,
    },
    x: {
      beginAtZero: false
    }
  },
};

export default function ClusteringChart({ ai, model, clusters, send }) {
  const [dataO, setDataO] = useState(null)
  const [dataG, setDataG] = useState(null)
  const [visible, setVisible] = useState(false);
  const [abstract, setAbstract] = useState("")
  const [loader, setLoader] = useState(false)

  const toast = useRef(null);

  const getClustering = () => {

    setLoader(true)

    axios.get("http://localhost:8000/clustering", {
      params: {
        ai,
        clusters,
        model: model.code
      }
    }).then(res => {
      setLoader(false)
      setDataO({ datasets: res.data.datasets_aO })
      setDataG({ datasets: res.data.datasets_aG })
      showSuccess()
    }).catch(err => {
      console.warn(err)
      setLoader(false)
      showError()
    })
  }

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Clustering complete', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Error on clutering process', life: 3000});
  }

  useEffect(() => {
    if (model) {
      getClustering()
    }
  }, [send])

  return (
    <>
      <Loader state={loader}/>
      <Toast ref={toast} />
      <div className="w-full h-full grid grid-cols-2 gap-4">
        <div className="flex grow flex-col items-center space-y-6">
          <div className="w-full flex flex-row justify-between">
            <span className="text-xl font-bold dark:text-white text-sky-600">
              Original Abstracts
            </span>
            <Button icon="pi pi-eye" rounded text raised severity="success" aria-label="Search"
              onClick={() => {
                setVisible(true)
                setAbstract("original")
              }} />
          </div>
          {dataO && <Scatter options={options} data={dataO} />}
        </div>
        <div className="flex grow flex-col items-center space-y-6">
          <div className="w-full flex flex-row justify-between">
            <span className="text-xl font-bold dark:text-white text-sky-600">
              Generate Abstracts
            </span>
            <Button icon="pi pi-eye" rounded text raised severity="success" aria-label="Search"
              onClick={
                () => {
                  setVisible(true)
                  setAbstract("generate")
                }
              } />
          </div>
          {dataG && <Scatter options={options} data={dataG} />}
        </div>
        <Dialog header="Cluster Labels" visible={visible} style={{ width: '60vw' }} onHide={() => setVisible(false)}>
          <ClusteringLabels abstract={abstract} ai={ai} model={model} clusters={clusters} />
        </Dialog>
      </div>
    </>
  )
}