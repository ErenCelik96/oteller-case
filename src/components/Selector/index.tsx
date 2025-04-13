import React, { useMemo } from "react";
import { useAppStore } from "@/store/store";
import { Currency, Language, Symbols } from "@/types/types";
import { useRouter } from "next/router";
import styles from "./Selector.module.css";

type Props = {
  type: "lang" | "currency";
};

export const Selector = (props: Props) => {
  const { type } = props;
  const router = useRouter();
  const { language, setLanguage, currency, setCurrency } = useAppStore();

  const currentValue = type === "lang" ? language : currency;

  const options = useMemo(() => {
    if (type === "lang") {
      return [
        { value: Language.EN, symbol: "English" },
        { value: Language.TR, symbol: "Türkçe" },
      ];
    } else {
      return [
        { value: Currency.USD, symbol: Symbols.USD },
        { value: Currency.EUR, symbol: Symbols.EUR },
        { value: Currency.TRY, symbol: Symbols.TRY },
      ];
    }
  }, [type]);

  const handleChange = (value: string) => {
    if (type === "lang") {
      setLanguage(value as Language);
    } else {
      setCurrency(value as Currency);
      router.replace(router.asPath);
    }
  };

  return (
    <select
      value={currentValue}
      onChange={(e) => handleChange(e.target.value)}
      className={styles["selectbox"]}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.symbol} {type === "currency" && option.value}
        </option>
      ))}
    </select>
  );
};
