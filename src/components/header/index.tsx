import React from "react";
import Link from "../link";

import Navbar from "./Navbar";
import CartButton from "./cart-button";
import getTrans from "@/lib/translation";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import LanguageSwitcher from "./language-switcher";

async function Header() {
  const locale = await getCurrentLocale();
  const { logo, navbar } = await getTrans(locale);

  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}`}
          className="text-primary font-semibold text-2xl"
        >
          🍕 {logo}
        </Link>
        <Navbar translations={navbar} />
        <LanguageSwitcher />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
