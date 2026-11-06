import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chow Ying Tong — Portfolio",
  description: "Computer Science student and software engineer based in Malaysia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
