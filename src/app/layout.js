import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./Providers";
import Header from "@/app/components/Header";
import Search from "./components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Tmdb",
  description: "Api Movie Tmdb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <Header/>
            <Search/>
            {children}  
        </Providers>
      </body>
    </html>
  );
}
