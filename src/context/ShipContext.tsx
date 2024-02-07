"use client";
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
    IsIdShip: number;
    setIsIdShip: Dispatch<SetStateAction<number>>;
    IsIdSkin: number;
    setIsIdSkin: Dispatch<SetStateAction<number>>;
}

export const ShipContext = createContext<ShipContextType>({
    IsOpenModal: false,
    setIsOpenModal: () => true,
    IsIdShip: 0,
    setIsIdShip: () => 0,
    IsIdSkin: 0,
    setIsIdSkin: () => 0,
});

export default function ShipProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [IsOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [IsIdShip, setIsIdShip] = useState<number>(0);
    const [IsIdSkin, setIsIdSkin] = useState<number>(0);
    useEffect(() => {
        if (IsIdShip !== 0) {
            setIsOpenModal(true);
        }
    }, [IsIdShip]);
    useEffect(() => {
        
    }, [IsIdSkin])
    return (
        <ShipContext.Provider
            value={{ IsOpenModal, setIsOpenModal, IsIdShip, setIsIdShip, IsIdSkin, setIsIdSkin }}
        >
            {children}
        </ShipContext.Provider>
    );
}
