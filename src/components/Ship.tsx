"use client";
import FilterTypeShip from "./FilterTypeShip";
import ModalShip from "./ModalShip";
import CardShip from "./CardShip";

const Ship = () => {
    return (
        <>
            <FilterTypeShip />
            <main className="flex gap-4 p-2">
                <CardShip
                    id={50401}
                    src="https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/504010/shipyard.png"
                    NameShip="Huan Ch'ang"
                    star={6}
                    Rarity={5}
                />
                <ModalShip/>
                <CardShip
                    id={10517}
                    src="https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/105170/shipyard.png"
                    NameShip="New Jersey"
                    star={6}
                    Rarity={6}
                />
            </main>
        </>
    );
};

export default Ship;
