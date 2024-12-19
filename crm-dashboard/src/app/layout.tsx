import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/navigation/left-nav";
// sidebar imports
import { SidebarProvider } from '@/components/ui/sidebar'
import TopNav from "@/components/navigation/top-nav";
import RightNav from "@/components/navigation/right-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        <SidebarProvider defaultOpen={false} className="bg-slate-100">
          <Sidenav />
          <div className="pl-2 pr-12 pb-0 pt-16 flex justify-between  w-full bg-slate-100">
            {children}
            <RightNav />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
