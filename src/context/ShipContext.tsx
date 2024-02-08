"use client";
import { FetchShip } from "@/utils/FetchSkinGraphql";
import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";

interface ShipContextType {
    IsOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    IsDataShip: {};
    setIsDataShip: Dispatch<SetStateAction<DataShipType>>;
    IsDataSkin: {};
    setIsDataSkin: Dispatch<SetStateAction<DataSkinType[]>>;
}

export interface DataSkinType {
    id: number;
    name: string;
    painting: string;
    icon: string;
    desc: string;
}
interface DataShipType {
    gid: number,
    name: string
}


export const ShipContext = createContext<ShipContextType>({
    IsOpenModal: false,
    setIsOpenModal: () => true,
    IsDataShip: {},
    setIsDataShip: () => {},
    IsDataSkin: {},
    setIsDataSkin: () => [],
});

export default function ShipProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const DataSkin = async () => {
            const data: any = await FetchShip();
            setIsDataSkin(data.data.Ship.Skins);
            setIsDataShip(data.data.Ship.AboutShip);
        };
        DataSkin();
    }, []);
    const [IsOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [IsDataShip, setIsDataShip] = useState<DataShipType>({
        gid: 0,
        name: ""
    });
    const [IsDataSkin, setIsDataSkin] = useState<DataSkinType[]>([
        {
            id: 0,
            name: "",
            painting: "",
            icon: "",
            desc: "",
        },
    ]);
    useEffect(() => {
        if (IsDataShip.gid !== 0 && IsOpenModal === true) {
            setIsOpenModal(true);
        }
    }, [IsDataShip, IsOpenModal]);
    return (
        <ShipContext.Provider
            value={{
                IsOpenModal,
                setIsOpenModal,
                IsDataShip,
                setIsDataShip,
                IsDataSkin,
                setIsDataSkin,
            }}
        >
            {children}
        </ShipContext.Provider>
    );
}
