import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Clustering() {

    const [cluster, setCluster] = useState(null)
    const [size, setSize] = useState(0)
    const [visible, setVisible] = useState(false);

    const clusterAlgorithm = [
        {name: 'K-Means', code: 'KM'},
        {name: 'DHC', code: 'DHC'}
    ]

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full flex flex-col justify-around items-center space-y-5">
                    <div className="flex flex-row">
                        <h4 className="text-2xl font-bold dark:text-white text-sky-600 mr-5">
                            Clustering
                        </h4>
                    </div>
                    <div className="w-full flex flex-auto flex-row space-x-4 items-center">
                        <div className='w-full flex flex-row space-x-5 items-center justify-center'>
                            <div className='flex flex-row space-x-5 items-center justify-center'>
                                <span className="flex-shrink text-2xl font-semibold text-sky-600">
                                    Alghoritm:
                                </span>
                                <Dropdown 
                                    value={cluster}
                                    onChange={(e) => {setCluster(e.value)}}
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
                                    onChange={(e) => {setSize(e.value)}}
                                />
                            </div>
                            <div>
                                <Button rounded label="Submit" />
                            </div>
                        </div>                        
                    </div>
                    <div className="w-full h-full flex flex-col">
                            <div className="card flex justify-content-center">
                            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} appendTo={document.body}>
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Dialog>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}