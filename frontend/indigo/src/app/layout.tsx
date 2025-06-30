import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Indigo Mascotas",
  description: "Accesorios para mascotas con estilo en Barcelona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased text-black bg-white">
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
