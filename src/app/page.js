import DataFields from "@/components/fields";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 static">
      <div className="w-100 h-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IA
          </span>
          Application
        </h1>
      </div>
      <div className="w-11/12 mx-10 relative flex py-5 items-center">
        <div className="flex-grow border-t border-white"></div>
        <span className="flex-shrink mx-4 text-gray-400">File</span>
        <div className="flex-grow border-t border-white"></div>
      </div>
      <form method="post">
        <div className="w-max relative">
          <div
            className="w-auto h-auto self-center
            before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
            after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
            before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"
          ></div>
          <DataFields></DataFields>
        </div>
        <div className="absolute bottom-10 right-10">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send File
          </button>
          <button
            type="reset"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete File
          </button>
        </div>
      </form>
      
    </main>
  );
}
