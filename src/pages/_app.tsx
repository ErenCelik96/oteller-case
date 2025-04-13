import { useEffect, useState } from "react";
import { NextIntlProvider } from "next-intl";
import { AppProps } from "next/app";
import { useAppStore } from "../store/store";
import { useRouter } from "next/router";
import { Language, Currency } from "@/types/types";
import { parseCookies } from "nookies";
import { AppCurrency, AppLanguage } from "@/types/constant";
import { Layout } from "@/components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { language, setLanguage, currency, setCurrency } = useAppStore();
  const [messages, setMessages] = useState<Record<string, any>>({});
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const cookieLanguage = cookies[AppLanguage] as Language;
    if (cookieLanguage && cookieLanguage !== language) {
      setLanguage(cookieLanguage);
    }

    const cookieCurrency = cookies[AppCurrency] as Currency;
    if (cookieCurrency && cookieCurrency !== currency) {
      setCurrency(cookieCurrency);
    }
  }, []);

  useEffect(() => {
    if (router.locale !== language) {
      router.push(router.pathname, router.asPath, { locale: language });
    }
  }, [language, router]);

  useEffect(() => {
    import(`../../locales/${router.locale}.json`)
      .then((messages) => {
        setMessages(messages.default as Record<string, any>);
      })
      .catch((error) => {
        console.error("Failed to load translations:", error);
        import(`../../locales/en.json`).then((messages) => {
          setMessages(messages.default);
        });
      });
  }, [router.locale]);

  return (
    <NextIntlProvider messages={messages} locale={router.locale || Language.TR}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  );
}
