import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Categories() {
    return (
        <div className="bg-[#1b1b1b] p-2 py-[16px]">
            <div>
                <h2 className="text-white uppercase text-xl font-bold text-center">Categories</h2>
            </div>
            <div className="flex text-white sm:space-x-8 gap-x-3 justify-center mt-4">
                <div className="bg-red-500 p-2 px-3 sm:px-20 sm:py-3 flex flex-col items-center space-y-2 rounded">
                    <i className="fas fa-newspaper text-sm sm:text-xl"></i>
                    <p className="text-xs text-gray-200 text-center">News</p>
                </div>
                <div className="bg-red-500 p-2 px-3 sm:px-20 sm:py-3 flex flex-col items-center space-y-2 rounded">
                    <i className="fas fa-heartbeat text-sm sm:text-xl"></i>
                    <p className="text-xs text-gray-200 text-center">Health</p>
                </div>
                <div className="bg-red-500 p-2 px-3 sm:px-20 sm:py-3 flex flex-col items-center space-y-2 rounded">
                    <i className="fas fa-dumbbell text-sm sm:text-xl"></i>
                    <p className="text-xs text-gray-200 text-center">Fitness</p>
                </div>
                <div className="bg-red-500 p-2 px-3 sm:px-20 sm:py-3 flex flex-col items-center space-y-2 rounded">
                    <i className="fas fa-spa text-sm sm:text-xl"></i>
                    <p className="text-xs text-gray-200 text-center">Beauty</p>
                </div>
                <div className="bg-red-500 p-2 px-3 sm:px-20 sm:py-3 flex flex-col items-center space-y-2 rounded">
                    <i className="fas fa-bullhorn text-sm sm:text-xl"></i>
                    <p className="text-xs text-gray-200 text-center">Motivation</p>
                </div>
            </div>
        </div>
    )
}