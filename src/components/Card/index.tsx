import { Content, Currency, Hotel, Symbols } from "@/types/types";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  hotel: Hotel;
  language: string;
  contents: Content;
};

export const Card = (props: Props) => {
  const { hotel, language, contents } = props;

  return (
    <div key={hotel.id} className={styles.hotelCard}>
      <img src={hotel.image} alt={hotel.name} className={styles.hotelImage} />
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
            <button className={styles.detailsButton}>
              {contents?.Common?.viewDetails}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
