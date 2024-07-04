import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Pokemons!",
  description: "by JJQKR",
  //metadata를 잘 쓰면 SEO에 유리하다!
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid justify-items-center mt-3">
          <header className="text-center pt-3 font-bold text-white w-full h-[50px] bg-[#bc11ff]">
            나의 포켓몬 도감
          </header>
        </div>
        {children}
        {/* body태그 밑에 children만 있었는데 nav를 만들어줌 */}
        {/* 위의 Home, About, Contact, Blog가 화면 맨 위에 렌더링 */}
      </body>
    </html>
  );
}
