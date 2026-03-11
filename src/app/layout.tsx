import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Favlogix Assessment",
  description: "Frontend assessment built with Next.js",
};











const sfCompact = localFont({
  src: [
    {
      path: "../fonts/sf-compact-display-thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/sf-compact-display-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sf",
  display: "swap",
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sfCompact.variable}>
      <body className="bg-gray-100 font-sans">

        {/* Global Header */}
        <Header />

        {/* Page Content */}
        
          {children}
      

      </body>
    </html>
  );
}