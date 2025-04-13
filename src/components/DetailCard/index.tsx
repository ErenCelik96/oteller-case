import { Currency, Hotel, Symbols } from "@/types/types";
import styles from "./DetailCard.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  hotel: Hotel;
};

export const DetailCard = (props: Props) => {
  const { hotel } = props;
  const t = useTranslations("Common");
  return (
    <div className={styles.hotelDetail}>
      <div className={styles.hotelHeader}>
        <Image
          src={hotel.image}
          alt={hotel.name}
          className={styles.hotelDetailImage}
          width={500}
          height={300}
        />
        <div className={styles.hotelDetailInfo}>
          <h1>{hotel.name}</h1>
          <p className={styles.location}>{hotel.location}</p>
          <div className={styles.stars}>
            {Array.from({ length: hotel.stars })?.map((_, i) => (
              <span key={i} className={styles.star}>
                ★
              </span>
            ))}
          </div>
          <p className={styles.price}>
            {Symbols[hotel.currency as Currency]}
            {hotel.price}
          </p>
        </div>
      </div>

      <div className={styles.hotelDescription}>
        <h2>{t("description")}</h2>
        <p>{hotel.description}</p>
      </div>

      <div className={styles.hotelAmenities}>
        <h2>{t("amenities")}</h2>
        <ul className={styles.amenitiesList}>
          {hotel.amenities?.map((amenity, index) => (
            <li key={index} className={styles.amenityItem}>
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
