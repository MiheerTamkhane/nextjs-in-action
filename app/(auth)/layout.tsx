// import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Navbar as NavbarComponent } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={inter.className}>
        <div className="border bg-slate-500 w-full p-4">
          This is the banner.
        </div>
        {children}
      </div>
    </div>
  );
}
