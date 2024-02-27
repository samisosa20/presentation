import { create } from "zustand";

interface StatsState {
    lang?: string;
    setLang: (_lang: string) => void;
  }

export const useLangStore = create<StatsState>((set) => ({
    lang: undefined,
    setLang: (lang) => set(() => ({ lang })),
}));
