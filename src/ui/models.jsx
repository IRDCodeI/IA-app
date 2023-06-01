/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export default function ModelsIA({ modelIA }) {

    const [model, setModel] = useState("Bard")

    useEffect(() => {
        setModel(modelIA)
    }, [modelIA])

    return (
        <>
            <div className="w-full h-auto px-10">
                <div className="mb-4">
                <h4 className="text-2xl font-bold dark:text-white text-sky-600">
                    Model
                    <span className="text-xl font-bold dark:text-white text-gray-800 ml-3 bg-sky-300 px-4 py-1 border-solid rounded-2xl text-center align-middle">
                        Bard
                    </span>
                </h4>
                </div>
                <div className="px-28">
                <div className="w-full h-full grid grid-cols-8 gap-4 mx-10">
                    <div className="col-span-2 flex flex-col items-center">
                    <span className="text-xl font-bold dark:text-white text-sky-600">
                        Documents
                    </span>
                    </div>
                    <div className="col-span-4 flex flex-col items-start mx-10">
                        <span className="text-xl font-semibold dark:text-white text-sky-600">Title:</span>
                        <span className="text-xl font-semibold dark:text-white text-sky-600">Original</span>
                        <span className="text-xl font-semibold dark:text-white text-sky-600">Generate</span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}