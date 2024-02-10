"use client";
import { motion } from "framer-motion";

import { variants } from "../page";
import SearchShip from "@/components/SearchShip";
import { useEffect, useState } from "react";
import { FetchShip } from "@/utils/FetchSkinGraphql";
import Image from "next/image";

interface RandomShipType {
    gid: number;
    name: string;
    shipyard: string;
}

const PageSkin = () => {
    const [IsDataRandom, setIsDataRandom] = useState<RandomShipType>();
    const FetchShipRandom = async () => {
        const Data: any = await FetchShip({
            query: `query RandomShip {
            RandomShip {
              gid
              name
              shipyard
            }
          }`,
        });
        if (Data.data) {
            setIsDataRandom(Data.data.RandomShip);
        } else {
            console.error("Error.", Data);
        }
    };

    useEffect(() => {
        FetchShipRandom();
    }, []);
    return (
        <>
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: "easeInOut" }}
            >
                <SearchShip />
                <div className="flex items-center justify-center text-white mt-2  flex-col">
                    <h1 className="font-family-patrick text-[2.25em]">
                        Random Ship
                    </h1>
                    {IsDataRandom && (
                        <div className="text-white bg-[#212121] text-center flex flex-col">
                            <Image
                                src={IsDataRandom.shipyard}
                                width={213}
                                height={434}
                                alt={IsDataRandom.name}
                                className="Rarity-6 w-auto h-auto"
                                priority={true}
                            />
                            <span className="text-white font-family-patrick  text-opacity-50 hover:text-opacity-100 text-[1.5em]">
                                {IsDataRandom.name}
                            </span>
                            <span className="text-white font-family-patrick text-opacity-50 hover:text-opacity-100 text-[1.5em]">
                                Id Ship: {IsDataRandom.gid}
                            </span>
                        </div>
                    )}
                </div>
                <div className="absolute bottom-0 flex justify-center text-white w-full gap-4 p-2">
                    <button className="btn gap-2">
                        Refresh
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                    </button>
                    <button className="btn gap-2">
                        Favourite
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        </svg>
                    </button>
                </div>
            </motion.article>
        </>
    );
};

export default PageSkin;
