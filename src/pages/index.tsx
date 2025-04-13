import { useAppStore } from "@/store/store";
import { GetServerSideProps } from "next";
import { Content, Hotel } from "@/types/types";
import styles from "../styles/HomePage.module.css";
import { Card } from "@/components/Card";
import { getBaseUrlAndUserPreferences } from "@/utils/api";

interface HomePageProps {
  contents: Content;
  hotels: Hotel[];
}

const HomePage = ({ contents, hotels }: HomePageProps) => {
  const { language } = useAppStore();

  return (
    <div className={styles.container}>
      <h1>{contents?.HomePage?.title}</h1>
      <p>{contents?.HomePage?.description}</p>
      <div className={styles.hotelGrid}>
        {hotels &&
          hotels?.map((hotel) => (
            <Card key={hotel.id} hotel={hotel} language={language} />
          ))}
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { baseUrl, userCurrency, userLanguage } =
    getBaseUrlAndUserPreferences(context);

  const langRes = await fetch(`${baseUrl}/api/language?locale=${userLanguage}`);
  const langData = await langRes.json();

  const hotelsRes = await fetch(
    `${baseUrl}/api/hotels?locale=${userLanguage}&currency=${userCurrency}`
  );
  const hotelsData = await hotelsRes.json();

  return {
    props: {
      contents: langData || {},
      hotels: hotelsData.hotels || [],
    },
  };
};
