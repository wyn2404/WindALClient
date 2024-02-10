"use client";
import { FetchShip } from "@/utils/FetchSkinGraphql";
import React, { createContext, useEffect, useState } from "react";

export const PageSearchContext = createContext({});



export default function PageSearchProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const FetchSkin = async () => {
        const IdShipRarity: number[] = [
            10517, 10517, 10517, 10517, 10517, 10517,
        ];
        const ArrayShipRarity: ArrayShipRarity[] = [];
        IdShipRarity.map(async (numbers: number) => {
            const Data = await FetchShip({
                idShip: numbers,
                query: `query Query($idShip: Int!) {
                Ship(IdShip: $idShip) {
                  Skins {
                    id
                    name
                    shipyard
                  }
                }
              }`,
            });
            ArrayShipRarity.push(Data.data.Ship.Skins[0]);
        });
        setIsRarity6(ArrayShipRarity);
    };
    useEffect(() => {
        FetchSkin();
    }, []);
    const [IsRarity6, setIsRarity6] = useState<any[]>([]);
    return (
        <PageSearchContext.Provider value={{IsRarity6}}>
            {children}
        </PageSearchContext.Provider>
    );
}
