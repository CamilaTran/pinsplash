import type { Metadata } from "next";
import "../globals.css";
import Navigator from "@/features/shell/navigator";
import Footer from "@/features/shell/footer";
import { notoFont } from "./font";


export const metadata: Metadata = {
  title: "Pinspash",
  description: "project challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoFont.className} antialiased`}
      >
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
