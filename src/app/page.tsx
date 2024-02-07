"use client";
import Ship from "@/components/Ship";
import ShipProvider from "@/context/ShipContext";

const Home = () => {
    return (
        <main className="mt-20">
            <ShipProvider>
                <Ship />
            </ShipProvider>
        </main>
    );
};

export default Home;
