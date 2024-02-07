import { ShipContext } from "@/context/ShipContext";
import Image from "next/image";
import { useContext } from "react";

interface Props {
    id: number;
    src: string;
    NameShip: string;
    star: number;
    Rarity: number;
}

const CardShip = (Prop: Props) => {
    const ArrayStar = [];
    for (let i = 0; i < Prop.star; i++) {
        ArrayStar.push(i + 1);
    }
    const { setIsIdShip } = useContext(ShipContext)
    return (
        <div className={`flex items-center flex-col bg-[#212121] w-[192px] rounded Rarity-${Prop.Rarity}`} onClick={() => {
            setIsIdShip(Prop.id);
        }}>
            <Image
                src={Prop.src}
                width={10000}
                height={10000}
                alt={`${Prop.id}`}
            />
            <span className="text-[#676767] font-bold py-2 hover:text-[#e27589]">
                {Prop.NameShip}
            </span>
            <span className="text-rose-500 flex pb-2">
                {ArrayStar.map((index) => (
                    <svg
                        key={index}
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
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                ))}
            </span>
        </div>
    );
};

export default CardShip;
