import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/componenets/Providers";
import Nav from "@/componenets/Navbar/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          <div className="container mx-auto p-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
