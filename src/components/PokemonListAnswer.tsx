"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types";

const PokemonListAnswer: React.FC = () => {
  // await fetch("/api/pokemons");
  // route.ts(API)를 받아오는 코드로
  // 그냥 이렇게 써도 되는데
  //여기가 page니까
  //useEffect안에 넣어서 비동기 처리를 해줄 것이다
  //이게 무슨 소리지

  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  //아래 useEffect안에서 가져온 data를 useState로 상태관리하겠다
  React.useEffect(() => {
    //useEffect에 async를 주기 까다로우므로 아랫줄
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
      console.log(data);
    };

    fetchInitialData();
  }, []);

  return (
    <>
      {/* <p>
        첫 마운트 시 useEffect 무시하고 바로 렌더링하는 부분, 이 다음에
        useEffect 실행한다
      </p> */}

      <div className="container mx-auto">
        {pokemons.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-700 h-12 w-12 mb-4"></div>
            <p className="text-xl font-semibold">불러오는 중입니다...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className="pokemon p-4 border rounded-xl flex justify-center my-1"
              >
                <Link href={`/pokemon/${pokemon.id}`}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={96}
                    height={96}
                  />
                  <p className="text-center">{pokemon.korean_name}</p>
                  <p>도감 번호 : {pokemon.id}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonListAnswer;
