import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Logo from "./../../public/logo aura.svg";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AURA",
  description: "ODONTOLOGIA E SAÚDE INTEGRADA",
  icons: {
    icon: "https://res.cloudinary.com/dtnww1ler/image/upload/v1717450248/cl%C3%ADnica%20aura/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
