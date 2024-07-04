import React from "react";
import { fetchPokemonDetail } from "@/apis/fetchPokemonDetail";
import Image from "next/image";
import { Pokemon } from "@/types";
import Link from "next/link";

//id를 page에서 받아오기
const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemonData: Pokemon = await fetchPokemonDetail(params.id);
  console.log(pokemonData);
  return (
    <>
      <div className="flex justify-center my-2">
        <Image
          className=""
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
          width={88}
          height={88}
        />
      </div>
      <div className="text-center my-2 gap-1">
        <h3 className="font-bold mb-2">이름: {pokemonData.korean_name}</h3>
        <div className="flex flex-col justify-between">
          <div>키: {(pokemonData.height * 0.1).toFixed(1)}m</div>
          <div>무게: {(pokemonData.weight * 0.1).toFixed(1)}kg</div>
        </div>
        <div>
          타입 :{" "}
          {pokemonData.types.map((type) => (
            <div className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              {type.type.korean_name}
            </div>
          ))}
        </div>{" "}
        <div>
          특성:{" "}
          {pokemonData.abilities.map((ability) => (
            <div className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
              {ability.ability.korean_name}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-2 felx gap-1">
        <div className="mb-1">기술: </div>
        <div className="flex flex-wrap gap-2 items-center text-center justify-center">
          {pokemonData.moves.map((move) => move.move.korean_name).join(" ")}
        </div>
      </div>
      <div className="text-center mt-4">
        <Link href="/" className="bg-[#978297] text-white px-4 py-2 rounded">
          뒤로 가기
        </Link>
      </div>
    </>
  );
};

export default PokemonDetailPage;
