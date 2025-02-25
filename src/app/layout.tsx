// Aqui está setado algumas configurações para a landing pages,
//  como tipo de fonte e a rota para o layout principal renderizando a estrutura
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], 
weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "Landing",
  description: "The landing is a landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
