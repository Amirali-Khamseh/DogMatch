import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/componenets/Providers";
import Nav from "@/componenets/Navbar/Nav";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id || null;
  const profileComplete = session?.user.profileComplete as boolean;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers userId={userId} profileComplete={profileComplete}>
          <Nav />
          <div className="container mx-auto mt-[64px]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
