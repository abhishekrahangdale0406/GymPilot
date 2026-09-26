import type { Metadata } from "next";
import { Literata, Nunito_Sans } from "next/font/google";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Pilot",
  description: "Your own Gym Management portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${literata.variable} ${nunitoSans.variable}`}>
      <body>
        <h1>Gym Pilot</h1>
        {children}
      </body>
    </html>
  );
}