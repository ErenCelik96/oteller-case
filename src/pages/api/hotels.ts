import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { locale, currency } = req.query;
  const hotels = [
    {
      id: "grand-hotel",
      name: locale === "tr" ? "Büyük Otel" : "Grand Hotel",
      description:
        locale === "tr"
          ? "Şehir merkezinde lüks bir otel"
          : "A luxury hotel in the city center",
      price: currency === "USD" ? 150 : currency === "EUR" ? 140 : 4500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 5,
      location: locale === "tr" ? "İstanbul, Türkiye" : "Istanbul, Turkey",
    },
    {
      id: "seaside-resort",
      name: locale === "tr" ? "Deniz Kenarı Resort" : "Seaside Resort",
      description:
        locale === "tr"
          ? "Plaja sıfır harika bir tatil köyü"
          : "An amazing resort right on the beach",
      price: currency === "USD" ? 200 : currency === "EUR" ? 180 : 6000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 4,
      location: locale === "tr" ? "Antalya, Türkiye" : "Antalya, Turkey",
    },
    {
      id: "mountain-lodge",
      name: locale === "tr" ? "Dağ Evi" : "Mountain Lodge",
      description:
        locale === "tr"
          ? "Doğa ile iç içe sakin bir kaçamak"
          : "A peaceful retreat in nature",
      price: currency === "USD" ? 120 : currency === "EUR" ? 110 : 3600,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 3,
      location: locale === "tr" ? "Bolu, Türkiye" : "Bolu, Turkey",
    },
    {
      id: "city-inn",
      name: locale === "tr" ? "Şehir İçi Otel" : "City Inn",
      description:
        locale === "tr"
          ? "Şehir merkezinde uygun fiyatlı bir otel"
          : "An affordable hotel in the city center",
      price: currency === "USD" ? 80 : currency === "EUR" ? 75 : 2500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 2,
      location: locale === "tr" ? "İzmir, Türkiye" : "Izmir, Turkey",
    },
    {
      id: "luxury-villa",
      name: locale === "tr" ? "Lüks Villa" : "Luxury Villa",
      description:
        locale === "tr"
          ? "Özel havuzlu lüks bir villa"
          : "A luxury villa with a private pool",
      price: currency === "USD" ? 300 : currency === "EUR" ? 280 : 9000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 5,
      location: locale === "tr" ? "Bodrum, Türkiye" : "Bodrum, Turkey",
    },
    {
      id: "budget-hostel",
      name: locale === "tr" ? "Bütçe Hosteli" : "Budget Hostel",
      description:
        locale === "tr"
          ? "Genç gezginler için uygun fiyatlı bir hostel"
          : "An affordable hostel for young travelers",
      price: currency === "USD" ? 30 : currency === "EUR" ? 28 : 900,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 1,
      location: locale === "tr" ? "Marmaris, Türkiye" : "Marmaris, Turkey",
    },
    {
      id: "business-hotel",
      name: locale === "tr" ? "İş Oteli" : "Business Hotel",
      description:
        locale === "tr"
          ? "İş seyahatleri için ideal bir otel"
          : "An ideal hotel for business trips",
      price: currency === "USD" ? 150 : currency === "EUR" ? 140 : 4500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 4,
      location: locale === "tr" ? "Ankara, Türkiye" : "Ankara, Turkey",
    },
    {
      id: "romantic-getaway",
      name: locale === "tr" ? "Romantik Kaçamak" : "Romantic Getaway",
      description:
        locale === "tr"
          ? "Sevgilinizle baş başa kalabileceğiniz bir otel"
          : "A hotel where you can be alone with your loved one",
      price: currency === "USD" ? 250 : currency === "EUR" ? 230 : 7500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 5,
      location: locale === "tr" ? "Kapadokya, Türkiye" : "Cappadocia, Turkey",
    },
    {
      id: "family-friendly-resort",
      name: locale === "tr" ? "Aile Dostu Resort" : "Family-Friendly Resort",
      description:
        locale === "tr"
          ? "Ailece tatil yapabileceğiniz bir tatil köyü"
          : "A resort where you can vacation with your family",
      price: currency === "USD" ? 180 : currency === "EUR" ? 170 : 5400,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      stars: 4,
      location: locale === "tr" ? "Fethiye, Türkiye" : "Fethiye, Turkey",
    },
    {
      id: "eco-lodge",
      name: locale === "tr" ? "Ekolojik Lodge" : "Eco Lodge",
      description:
        locale === "tr"
          ? "Doğa dostu bir konaklama seçeneği"
          : "An eco-friendly accommodation option",
      price: currency
        ? currency === "USD"
          ? 100
          : currency === "EUR"
          ? 95
          : 3000
        : 3000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/300",
      location: locale === "tr" ? "Kaş, Türkiye" : "Kas, Turkey",
      stars: 3,
    },
  ];

  res.status(200).json({ hotels });
}
