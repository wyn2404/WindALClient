"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

const Home = () => {
    return (
        <>
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: "easeInOut" }}
            >
                <main className="mt-28 flex justify-center flex-col items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-[2.6em]">
                            Wind Azur Lane.
                        </h1>
                        <span className="text-white text-[2em] font-family-caveat">
                            Find information about your ship.
                        </span>
                    </div>
                    <div className="text-white mt-5 flex gap-4">
                        <Link href={"/skin"}>
                            <button className="inline-flex items-center px-6 py-2 text-[1.2em] font-medium text-center rounded text-rose-100 bg-rose-500 hover:bg-rose-600 font-family-patrick">
                                Skin
                            </button>
                        </Link>
                        <Link href={"/wallpaper"}>
                            <button className="inline-flex items-center px-6 py-2 text-[1.2em] font-medium text-center rounded text-rose-100 bg-rose-500 hover:bg-rose-600 font-family-patrick">
                                Wallpaper
                            </button>
                        </Link>
                        <Link href={"/api"}>
                            <button className="inline-flex items-center px-6 py-2 text-[1.2em] font-medium text-center rounded text-rose-100 bg-rose-500 hover:bg-rose-600 font-family-patrick">
                                Api
                            </button>
                        </Link>
                    </div>
                </main>
            </motion.article>
        </>
    );
};

/**
 * <ShipProvider>
                <Ship />
            </ShipProvider>
 */
export default Home;
