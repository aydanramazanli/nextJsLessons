import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import MyProfile from './components/MyProfile';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "NextJs Blog app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`dark:bg-slate-800 ${inter.className}`}>
        <Navbar/>
        <MyProfile/>
        {children}</body>
    </html>
  );
}
