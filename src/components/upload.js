'use client'
import { Button } from '@mui/material';
import { useRef } from 'react';
import { parse } from 'csv-parse';

export default function UploadFile() {

    let file = null
    let csv = null

    const inputFile = useRef(null);
    const fileName = useRef(null)

    const readFile = () => {
        const reader = new FileReader()
        file = inputFile.current.files[0]

        reader.onload = () => {
            fileName.current.innerText = file.name
            csv = reader.result  
        }

        reader.readAsBinaryString(file)            
    }

    return (
        <div className='w-screen flex'>            
            <div className='w-screen mx-14 flex justify-center items-center'>
                <Button
                    type="button"
                    className="px-5 py-2.5 inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    variant='contained'
                    component="label"
                    >
                    Upload File
                    
                    <input
                        className='px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'
                        type="file"
                        ref={inputFile}
                        accept='.csv'
                        onChange={readFile}
                        style={{ display: 'none' }} />
                </Button>
                <span className='mx-4 w-64 max-w-lg text-l font-semibold leading-normal text-gray-900 dark:text-white'
                 ref={fileName}></span>
            </div>
        </div>
    )
}