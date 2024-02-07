"use client";
const FilterTypeShip = () => {
    return (
        <main className="px-4 py-1">
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Ship Type
            </h3>
            <ul className="items-center w-full text-sm font-medium border  rounded-lg sm:flex bg-[#20242c] border-[#333a41] text-white" onChange={(e) => {
                console.log('hello world', e)
            }}>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="all-ship"
                            defaultValue="allship-on"
                            defaultChecked={true}
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            All Ship
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="bc-ship"
                            defaultValue="bcship-on"
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label
                            htmlFor="vue-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            BB/BC/BBV/BM
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="cv-ship"
                            defaultValue="cvship-on"
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label
                            htmlFor="react-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            CV/CVL
                        </label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="ca-ship"
                            defaultValue="caship-on"
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label
                            htmlFor="angular-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            CA/CB
                        </label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="dd-ship"
                            defaultValue="ddship-on"
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label
                            htmlFor="laravel-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            DD/DDG
                        </label>
                    </div>
                </li>
                <li className="w-full dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input
                            type="checkbox"
                            id="ss-ship"
                            defaultValue="ssship-on"
                            className="w-5 h-5 text-rose-500 bg-gray-100 border-gray-300 rounded-lg focus:ring-transparent focus:ring-2"
                        />
                        <label
                            htmlFor="laravel-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            SS/SSV
                        </label>
                    </div>
                </li>
            </ul>
        </main>
    );
};
export default FilterTypeShip;
