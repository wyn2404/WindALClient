import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex justify-between backdrop-blur-lg fixed left-0 w-full z-50 top-0 p-1 border-[#e27589] border-b-2">
            <div className="flex">
                <Image
                    width={54}
                    height={48}
                    src="/yae-miko2.png"
                    alt="logo-keqing"
                    className="rounded"
                />
                <span className="font-family-patrick text-[#e27589] text-[25px] py-2">
                    WindAL
                </span>
            </div>
            <div className="flex items-center text-[#e27589] font-normal text-lg gap-6 Mobile">
                <Link href={"/wallpaper"} className="hover:text-[#d16276]">
                    Wallpaper
                </Link>
                <Link href={"/skin"} className="hover:text-[#d16276]">
                    Skin
                </Link>
                <Link href={"/event"} className="hover:text-[#d16276]">
                    Event
                </Link>
                <Link href={"/credit"} className="hover:text-[#d16276]">
                    Credit
                </Link>
            </div>
            <div className="flex items-center text-white font-normal text-lg gap-4">
                <Link href={"/login"}>
                    <button className="p-2 text-rose-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-4xl"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
