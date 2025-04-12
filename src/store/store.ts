import { Language, Currency, Theme } from "@/types/types";
import { create } from "zustand";

interface StoreState {
  language: Language;
  currency: Currency;
  theme: Theme;
  setLanguage: (language: Language) => void;
  setCurrency: (currency: Currency) => void;
  setTheme: (theme: Theme) => void;
}

export const appStore = create<StoreState>((set) => ({
  language: Language.TR,
  currency: Currency.TRY,
  theme: Theme.LIGHT,
  setLanguage: (language) => set({ language }),
  setCurrency: (currency) => set({ currency }),
  setTheme: (theme) => set({ theme }),
}));
