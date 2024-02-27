"use client";
import Link from "next/link";

import { Typography } from "..";
import { useLangStore } from "@/src/lib/utils";

export function Navbar() {
  const { lang } = useLangStore();

  return (
    <header className="pt-6 pb-10 flex justify-end">
      <Link href={lang === "en" ? "es" : "en"}>
        <Typography className="cursor-pointer hover:text-accent-200 w-max">
          Es/En
        </Typography>
      </Link>
    </header>
  );
}
