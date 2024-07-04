import PokemonListAnswer from "@/components/PokemonListAnswer";
import Image from "next/image";
import React from "react";

const MainPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PokemonListAnswer />
      </main>
    </>
  );
};

export default MainPage;
