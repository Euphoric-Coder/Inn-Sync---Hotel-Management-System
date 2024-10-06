import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto, Poppins, Raleway, Libre_Franklin, Inter, Source_Sans_3, Playfair_Display, Rubik, Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ['italic', 'normal'],
  variable: "--font-poppins"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Inn Sync - Your Go-To Hotel Booking App",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <main className="font-normal">
          <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
