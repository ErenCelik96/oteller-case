import { Currency, Hotel, Symbols } from "@/types/types";
import Link from "next/link";
import styles from "./Card.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  hotel: Hotel;
  language: string;
};

export const Card = (props: Props) => {
  const { hotel, language } = props;
  const t = useTranslations("Common");

  return (
    <div key={hotel.id} className={styles.hotelCard}>
      <Image
        src={hotel.image}
        alt={hotel.name}
        className={styles.hotelImage}
        width={300}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjwvc3ZnPg=="
      />
      <div className={styles.hotelInfo}>
        <h2 className={styles.hotelName}>{hotel.name}</h2>
        <p className={styles.hotelLocation}>{hotel.location}</p>
        <div className={styles.stars}>
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <span key={i} className={styles.star}>
              ★
            </span>
          ))}
        </div>
        <p className={styles.description}>{hotel.description}</p>
        <div className={styles.cardFooter}>
          <p className={styles.price}>
            {Symbols[hotel.currency as Currency]}
            {hotel.price}
          </p>
          <Link href={`/${hotel.id}`} locale={language}>
            <button className={styles.detailsButton}>{t("viewDetails")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
