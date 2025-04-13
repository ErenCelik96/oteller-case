import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";
import { useAppStore } from "@/store/store";
import Link from "next/link";
import styles from "../../styles/Slug.module.css";
import { getBaseUrlAndUserPreferences } from "@/utils/api";
import { DetailCard } from "@/components/DetailCard";

interface HotelDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  stars: number;
  location: string;
  amenities: string[];
}

interface SlugPageProps {
  hotel: HotelDetail;
}

export default function SlugPage({ hotel }: SlugPageProps) {
  const { language } = useAppStore();
  const t = useTranslations("Common");

  if (!hotel) {
    return <div>{t("hotelNotFound")}</div>;
  }

  return (
    <div className={styles.container}>
      <Link href="/" locale={language}>
        <button className={styles.backButton}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t("backToList")}
        </button>
      </Link>
      <DetailCard hotel={hotel} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params || {};
  const { baseUrl, userCurrency, userLanguage } =
    getBaseUrlAndUserPreferences(context);

  try {
    const res = await fetch(
      `${baseUrl}/api/hotel/${slug}?locale=${userLanguage}&currency=${userCurrency}`
    );

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    const data = await res.json();

    return {
      props: {
        hotel: data.hotel,
      },
    };
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    return {
      notFound: true,
    };
  }
};
