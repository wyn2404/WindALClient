"use client";
import FilterTypeShip from "./FilterTypeShip";
import ModalShip from "./ModalShip";
import CardShip from "./CardShip";
import { useContext, useEffect, useState } from "react";
import { ShipContext } from "@/context/ShipContext";

const Ship = () => {
    const { IsDataShip, IsDataSkin }: any = useContext(ShipContext);
    return (
        <>
            <FilterTypeShip />
            <main className="flex gap-4 p-2">
                {IsDataShip && (
                    <div>
                        <CardShip
                            id={IsDataShip.gid}
                            src={IsDataSkin[0].shipyard}
                            NameShip={IsDataShip.name}
                            star={6}
                            Rarity={5}
                        />
                        <ModalShip id={IsDataShip.gid} name={IsDataShip.name} skins={IsDataSkin} />
                    </div>
                )}
            </main>
        </>
    );
};

export default Ship;
