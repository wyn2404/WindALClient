"use client";
import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";

interface WallpaperType {
    IsWallpaper: WallpaperStateType[];
    setIsWallpaper: Dispatch<SetStateAction<WallpaperStateType[]>>;
}
interface WallpaperStateType {
    id: number;
    tags: string;
    author: string;
    source?: string;
    file_url: string;
    preview_url: string;
    sample_url: string;
    width: number;
    height: number;
}

export const WallpaperContext = createContext<WallpaperType>({
    IsWallpaper: [],
    setIsWallpaper: () => [],
});

export default function WallpaperProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [IsWallpaper, setIsWallpaper] = useState<WallpaperStateType[]>([]);
    const FetchImage = async () => {
        await fetch("https://yande.re/post.json?tags=rating:safe")
            .then((res) => res.json())
            .then((data: WallpaperStateType[]) => {
                setIsWallpaper(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    useEffect(() => {
        FetchImage();
    }, []);
    return (
        <WallpaperContext.Provider value={{ IsWallpaper, setIsWallpaper }}>
            {children}
        </WallpaperContext.Provider>
    );
}
