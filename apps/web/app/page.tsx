import { headers } from "next/headers";

import { getDictionary } from "./[lang]/dictionaries";
import { Home } from "./home";

export default async function InitPage() {
  const locale = headers().get("Accept-Language")?.includes("es") ? "es" : "en";

  const dict = await getDictionary(locale);
  return <Home dict={dict} lang={locale} />;
}
