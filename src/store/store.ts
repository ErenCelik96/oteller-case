import { Language, Currency } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { setCookie } from "nookies";
import { AppCurrency, AppLanguage, AppStorage } from "@/types/constant";

interface StoreState {
  language: Language;
  currency: Currency;
  setLanguage: (language: Language) => void;
  setCurrency: (currency: Currency) => void;
}

export const useAppStore = create<StoreState>()(
  persist(
    (set) => ({
      language: Language.TR,
      currency: Currency.TRY,
      setLanguage: (language) => {
        set({ language });
        setCookie(null, AppLanguage, language, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      },
      setCurrency: (currency) => {
        set({ currency });
        setCookie(null, AppCurrency, currency, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      },
    }),
    {
      name: AppStorage,
    }
  )
);
