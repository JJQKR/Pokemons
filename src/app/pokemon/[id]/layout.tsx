import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { fetchPokemonDetail } from "@/apis/fetchPokemonDetail";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const pokemonData = await fetchPokemonDetail(params.id);
  return {
    title: `${pokemonData.korean_name} - Pokemon Detail`,
    description: `Details of ${pokemonData.korean_name}`,
  };
}

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid justify-items-center mt-3">
          <header className="text-center pt-3 font-bold text-white w-full h-[50px] bg-[#bc11ff]">
            너로 정했다!
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
