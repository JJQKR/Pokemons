import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { Pokemon } from "@/types";

const PokemonDetail = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [pokemonDetail, setPokemonDetail] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch("/api/[id]");
        if (!response.ok) {
          throw new Error("디테일 fetch 실패.");
        }
        const data = await response.json();
        setPokemonDetail(data);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchDetail();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Badge Fashion
          </span>
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Products
          </span>
        </div>
      </div> */}
      <div>아이디{params.id}</div>
    </>
  );
};

export default PokemonDetail;
