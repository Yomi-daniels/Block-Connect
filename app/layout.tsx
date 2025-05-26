import type { Metadata } from "next";
import "./globals.css";
import ContextProvider from "@/context";
import { config } from "@/config";

export const metadata: Metadata = {
  title: "Block Connect",
  description: "Connect Wallet to your app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono&family=Geist+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "Studio Pro, sans-serif" }}
        className="antialiased"
      >
        <ContextProvider cookies={typeof document !== "undefined" ? document.cookie : null}>
          
          <main>{children}</main>
        
        </ContextProvider>
      </body>
    </html>
  );
}
