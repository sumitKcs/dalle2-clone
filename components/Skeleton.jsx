function Skeleton() {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card bg-gray-300 animate-pulse">
    <div className="w-[400px] h-[400px]"></div>
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gray-300 m-2 p-4 rounded-md">
      <div className="text-white text-md overflow-y-auto prompt">
        <div className="w-full h-5 bg-gray-300"></div>
      </div>
      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
            <div className="rounded-full w-10 h-10 bg-gray-300"/>
          </div>
          <div className="text-white text-sm truncate">
            <div className="w-full h-5 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skeleton