/* eslint-disable react/prop-types */
import axios from "axios";
import { Chip } from "primereact/chip";
import { useEffect, useState } from "react";

export default function ClusteringValidation({ai, n, cluster, status}) {

  const [validations, setValidations] = useState({ars: 0.0, sls: 0.0})

  const getValidation = () => {
    axios.get("http://localhost:8000/clustering/validation/", {
      params:{
        ai,
        n,
        cluster: cluster.code
      }
    }).then(
      res => {
        setValidations(res.data)
      }
    ).catch(
      err => {
        console.warn(err)
      }
    )
  }
  useEffect(() => {
      if(cluster){
        getValidation()
      }
  }, [status])

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">        
        <div className="w-1/2 grid grid-cols-2 gap-5">
          <div className="flex flex-row space-x-5 items-center justify-center">
            <span className="text-xl font-bold dark:text-white text-sky-600">
              Grouping without abstrac:
            </span>
            <Chip label={validations.ars} />
          </div>
          <div className="flex flex-row space-x-5 items-center justify-center">
            <span className="text-xl font-bold dark:text-white text-sky-600">
              Grouping with abstrac:
            </span>
            <Chip label={validations.sls} />
          </div>
        </div>
      </div>
    </>
  )
}