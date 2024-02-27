import { getDictionary } from './dictionaries'

import { Home } from "../home";

interface LangProps {
    params: {
        lang?: 'es' | 'en';
      }
}
 
export default async function PageLang({ params: { lang } }: LangProps) {
  const dict = await getDictionary(lang ?? 'en')
  return <Home dict={dict} lang={lang ?? 'en'} />
}