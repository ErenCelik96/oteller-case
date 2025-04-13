import { Currency, Language } from "@/types/types";
import { parseCookies } from "nookies";

export const getBaseUrlAndUserPreferences = (context: any) => {
  const { req } = context;
  const cookies = parseCookies(context);

  const userCurrency = cookies["app-currency"] || Currency.TRY;
  const userLanguage = cookies["app-language"] || context.locale || Language.TR;

  const protocol = req.headers["x-forwarded-proto"] || "http";
  const baseUrl = `${protocol}://${req.headers.host}`;

  return { baseUrl, userCurrency, userLanguage };
};
