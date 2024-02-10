"use client";
import SearchShip from "./SearchShip";
import ModalShip from "./ModalShip";
import CardShip from "./CardShip";
import { useContext, useEffect, useState } from "react";
import { ShipContext } from "@/context/ShipContext";

import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

const Ship = () => {
    const { IsDataShip, IsDataSkin }: any = useContext(ShipContext);
    return (
        <>
            <SearchShip />
            <main className="flex gap-4 p-2">
                <motion.article
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5, type: "easeInOut" }}
                    className="flex gap-4 p-2"
                >
                    {IsDataShip && (
                        <div>
                            <CardShip
                                id={IsDataShip.gid}
                                src={IsDataSkin[0].shipyard}
                                NameShip={IsDataShip.name}
                                star={6}
                                Rarity={5}
                            />
                            <ModalShip
                                id={IsDataShip.gid}
                                name={IsDataShip.name}
                                skins={IsDataSkin}
                            />
                        </div>
                    )}
                </motion.article>
            </main>
        </>
    );
};

export default Ship;
