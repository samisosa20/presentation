import type { Metadata } from "next";

import "./globals.css";
import { averia } from "../src/lib/fonts";
import { Container } from "@/components";
import { cn } from "@/src/lib/utils";

export const metadata: Metadata = {
  title: "Sammy Guttman",
  description: "Mi portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(averia.className, "mt-20")}>
        <Container size="lg">{children}</Container>
      </body>
    </html>
  );
}
