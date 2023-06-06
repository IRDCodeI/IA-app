/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";

export default function ClusteringLabels({ abstract, ai, model, clusters }) {
  const [labels, setLabels] = useState([])

  const columns = [
    { field: "title", header: 'Title' },
    { field: "label", header: 'Label' }
  ]

  const getClusterLabels = () => {
    axios.get("http://localhost:8000/clustering/labels/", {
      params: {
        abstract,
        ai,
        model: model.code,
        clusters
      }
    }).then(
      res => {
        setLabels(res.data)
      }
    ).catch(
      err => console.warn(err)
    )
  }

  useEffect(() => {
    if (ai && model && clusters) {
      getClusterLabels()
    }
  }, [])

  return (
    <>
      <div className="w-full m-5">
        {
          labels &&
          <DataTable value={labels} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50 rem' }}>
            {
              columns.map((col) => (
                <Column key={col.field} field={col.field} header={col.header} />
              ))
            }
          </DataTable>
        }
      </div>
    </>
  )
}