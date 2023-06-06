import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useContext, useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import ClusteringChart from '../ui/ClusteringChart';
import ClusteringValidation from '../ui/ClusteringValidations';
import AIContext from "../context/AI/IAContext";
import { Chip } from "primereact/chip";

export default function Clustering() {

    const [cluster, setCluster] = useState(null)
    const [size, setSize] = useState(0)
    const [status, setStatus] = useState(false)
    const [ai, setAi] = useState()

    const {model} = useContext(AIContext)

    const clusterAlgorithm = [
        { name: 'K-Means', code: 'kmeans' },
        { name: 'DHC', code: 'dhc' }
    ]

    const handleClick =  () =>{
        status == false ? setStatus(true) : setStatus(false)
    }

    useEffect(() => {
        model == 'chatgpt' ? setAi("GPT 3.5") : setAi("Bard")
      }, [model])

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full flex flex-col justify-around items-center space-y-5">
                    <div className="flex flex-row">
                        <h4 className="text-2xl font-bold dark:text-white text-sky-600 mr-5">
                            Clustering
                        </h4>
                        <Chip label={ai} />
                    </div>
                    <div className="w-full flex flex-auto flex-row space-x-4 items-center">
                        <div className='w-full flex flex-row space-x-5 items-center justify-center'>
                            <div className='flex flex-row space-x-5 items-center justify-center'>
                                <span className="flex-shrink text-2xl font-semibold text-sky-600">
                                    Alghoritm:
                                </span>
                                <Dropdown
                                    value={cluster}
                                    onChange={(e) => { setCluster(e.value) }}
                                    options={clusterAlgorithm}
                                    optionLabel='name'
                                    placeholder='Select a clustering'
                                    className='w-full md:w-14rem'
                                />
                            </div>
                            <div className='flex flex-row space-x-5 items-center justify-center'>
                                <span className="flex-shrink text-2xl font-semibold text-sky-600">
                                    Groups Sizes:
                                </span>
                                <InputNumber
                                    value={size}
                                    onChange={(e) => { setSize(e.value) }}
                                />
                            </div>
                            <div>
                                <Button rounded label="Enviar" size="small" onClick={handleClick}/>
                            </div>
                        </div>
                    </div>
                    <ClusteringChart ai={model} model={cluster} clusters={size} send={status} />
                    <ClusteringValidation ai={model} n={size} cluster={cluster} status={status}/>
                </div>
            </div>
        </>
    )
}