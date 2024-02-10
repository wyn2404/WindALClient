"use client";
import { motion } from "framer-motion";
import { variants } from "../page";

const WallPaperPage = () => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
        >
            <main className="mt-20 text-white">
                <span>Hello World from Wallpaper Page</span>
            </main>
        </motion.article>
    );
};
export default WallPaperPage;
