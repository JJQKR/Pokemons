//app 안에는 page, route.ts 같은 애들이 존재한다
//라우팅에 영향을 받는 애들
//components랑 app을 따로 만든 이유
//근데 app 안에 들어가도 상관은 없..?

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { Pokemon } from "@/types";
import Link from "next/link";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("../api/pokemons");
        if (!response.ok) {
          throw new Error("데이터 fetch 실패.");
        }
        const data = await response.json();
        setPokemonList(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchPokemon();
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id} className="flex flex-row">
            <div>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={72}
                height={72}
              />
              <div>
                <div className="font-bold">
                  {pokemon.korean_name ? pokemon.korean_name : pokemon.name}
                </div>
                <div>도감 번호 : {pokemon.id}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
