"use client";
import { DataSkinType, ShipContext } from "@/context/ShipContext";
import Image from "next/image";
import { useContext } from "react";

interface Prop {
    id: number;
    name: string;
    skins: [
        {
            id: number;
            name: string;
            painting: string;
            icon: string;
        },
    ];
}

const ModalShip = (Prop: Prop) => {
    const { IsOpenModal, setIsOpenModal, IsDataSkin }: any = useContext(ShipContext);
    return (
        <>
            <div
                className={`flex flex-col items-center fixed z-50 w-full top-[20px] mt-1 ${IsOpenModal ? "" : `hidden`}`}
            >
                <header className="items-center flex justify-between p-2 rounded-t-md w-[400px] bg-[#212121] border-rose-500 border-b-2">
                    <h5 className="ml-auto mr-auto text-white font-semibold text-xl">
                        {Prop.name}
                    </h5>
                    <button
                        className="opacity-50 hover:opacity-100"
                        onClick={() => {
                            setIsOpenModal(false);
                            // setIsDataShip({
                            //     gid: 0,
                            //     name: "Helo world",
                            // });
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="white"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </header>
                <main className="w-[400px] bg-[#212121] h-[460px] scroll-smooth scrollbar-thumb-rose-500 overflow-y-auto">
                    <div className="flex p-2 gap-3">
                        {Prop.skins.map((item, index) => (
                            <button
                                onClick={() => {
                                    // setIsDataSkin(item);
                                }}
                                key={index}
                            >
                                {item.icon && (
                                    <Image
                                        className="w-20 Rarity-5 border-2 border-[#ee9]"
                                        src={item.icon}
                                        width={1000}
                                        height={1000}
                                        alt={`skin-${item.id}`}
                                        key={index}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                    {IsDataSkin[0] &&
                        IsDataSkin.map((item: DataSkinType, index: number) => (
                            <div
                                className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2a313b] p-2 border-b border-rose-500"
                                key={index}
                            >
                                <img
                                    className="w-full"
                                    src={item.painting}
                                    alt={item.name}
                                />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2 text-white"></div>
                                    <p className="text-white text-base">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        980 GEM
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        Limited
                                    </span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                        #Spring Festival
                                    </span>
                                </div>
                            </div>
                        ))}
                </main>
            </div>
        </>
    );
};

export default ModalShip;
