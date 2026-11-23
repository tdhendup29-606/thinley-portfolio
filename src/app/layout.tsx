
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinley Dhendup | Developer Portfolio",
  description:
    "The personal portfolio of Thinley Dhendup, showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
