// SearchBar.jsx
export const SearchBar = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full sm:w-2/3 lg:w-5/12 px-2 my-4">
                <div className="flex items-center border border-gray-300 rounded-full shadow-sm overflow-hidden bg-white">
                    <input
                        id="default-search"
                        className="flex-grow py-2 px-4 text-gray-700 bg-white border-none outline-none placeholder-gray-500"
                        placeholder="Search"
                        required
                    />
                    <button className="bg-blue-500 text-white hover:bg-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center">
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m1.5-6.65a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
