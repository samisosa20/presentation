import { getDictionary } from "./[lang]/dictionaries";
import { Home } from "./home";

export default async function InitPage() {
  const dict = await getDictionary("es")
  return <Home dict={dict} />;
}
