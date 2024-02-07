"use client";
import { ShipContext } from "@/context/ShipContext";
import Image from "next/image";
import { useContext } from "react";

interface Prop {
    OpenModal: boolean;
    IdShip: number;
}

const ModalShip = () => {
    const { IsOpenModal, IsIdShip, setIsOpenModal, setIsIdShip, IsIdSkin, setIsIdSkin } = useContext(ShipContext);
    return (
        <>
            <div
                className={`flex flex-col items-center fixed z-50 w-full top-[20px] mt-1 ${IsOpenModal ? "" : `hidden`}`}
            >
                <header className="items-center flex justify-between p-2 rounded-t-md w-[400px] bg-[#212121] border-rose-500 border-b-2">
                    <h5 className="ml-auto mr-auto text-white font-semibold text-xl">
                        {IsIdShip}
                    </h5>
                    <button
                        className="opacity-50 hover:opacity-100"
                        onClick={() => {
                            setIsOpenModal(false);
                            setIsIdShip(0);
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
                        <button onClick={() => {
                            setIsIdSkin(504010);
                        }}>
                            <Image
                                className="w-20 Rarity-5 border-2 border-[#ee9]"
                                src={
                                    "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/504010/icon.png"
                                }
                                width={1000}
                                height={1000}
                                alt="skin-504010"
                            />
                        </button>
                        <button onClick={() => {
                            setIsIdSkin(504011)
                        }}>
                            <Image
                                className="w-20 Rarity-5 border-2 border-[#ee9]"
                                src={
                                    "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/504011/icon.png"
                                }
                                width={1000}
                                height={1000}
                                alt="skin-504011"
                            />
                        </button>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#2a313b] p-2">
                        <img
                            className="w-full"
                            src="https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/504011/painting.png"
                            alt="Mountain"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-white">
                                {IsIdSkin}
                            </div>
                            <p className="text-white text-base">
                                Happy New Year, Commander. Hmm? I look a bit
                                different from usual? Why of course, it's
                                because it was chosen to suit your tastes by
                                none other than Chi An. Even this mask is brand
                                new. I look \"like a fairy from the sacred
                                mountains,\" you say? I wonder... who taught you
                                to say something like that?
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
                </main>
            </div>
        </>
    );
};

export default ModalShip;
