"use client";

import { FetchIdShip } from "@/utils/FetchIdShip";
import { FetchShip } from "@/utils/FetchSkinGraphql";
import { useEffect, useState } from "react";

interface IdShip {
    data: {
        NameToId: [
            {
                gid: number;
                name: string;
            },
        ];
    };
}

const SearchShip = (Prop: any) => {
    const [IsSearch, setIsSearch] = useState<string>("");
    const [IsIdShip, setIsIdShip] = useState<IdShip>();

    const FetchDataShip = async ({ ArrayId }: { ArrayId: any }) => {
        const EmptyArray: any[] = [];
        ArrayId.map(async (item: { gid: number; name: string }) => {
            const Data = await FetchShip({
                idShip: item.gid,
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
            EmptyArray.push(Data.data.Ship.Skins[0])
        });
        Prop.setIsData(EmptyArray);
    };

    useEffect(() => {
        if (IsIdShip) {
            FetchDataShip({ ArrayId: IsIdShip.data.NameToId });
        }
    }, [IsIdShip]);

    useEffect(() => {
        const timeOutId = setTimeout(async () => {
            if (IsSearch === "") {
                return;
            } else {
                const DataShip = await FetchIdShip({ nameShip: IsSearch });
                setIsIdShip(DataShip);
            }
        }, 300);
        return () => clearTimeout(timeOutId);
    }, [IsSearch]);
    return (
        <main className="px-4 py-1 text-white">
            <div
                className="relative flex flex-col-reverse"
                data-te-input-wrapper-init=""
                id="basic"
            >
                <input
                    type="text"
                    className="outline-0 px-1 bg-transparent text-white border-b w-auto"
                    placeholder="Search Ship"
                    onChange={(e) => {
                        if (e.target.value.length >= 1) {
                            setIsSearch(e.target.value);
                        }
                    }}
                />
            </div>
        </main>
    );
};
export default SearchShip;
