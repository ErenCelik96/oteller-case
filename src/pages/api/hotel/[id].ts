import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, locale, currency } = req.query;

  const hotels: Record<
    string,
    {
      id: string;
      name: string;
      description: string;
      price: number;
      currency: string | string[];
      image: string;
      stars: number;
      location: string;
      amenities: string[];
    }
  > = {
    "grand-hotel": {
      id: "grand-hotel",
      name: locale === "tr" ? "Büyük Otel" : "Grand Hotel",
      description:
        locale === "tr"
          ? "Şehir merkezinde lüks bir otel. Her türlü konfora sahip olan bu otelimizde kendinizi evinizde hissedeceksiniz."
          : "A luxury hotel in the city center. You will feel at home in this hotel with all kinds of comfort.",
      price: currency === "USD" ? 150 : currency === "EUR" ? 140 : 4500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 5,
      location: locale === "tr" ? "İstanbul, Türkiye" : "Istanbul, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Spa", "Havuz", "Fitness Merkezi", "Restoran"]
          : ["Free Wi-Fi", "Spa", "Pool", "Fitness Center", "Restaurant"],
    },
    "seaside-resort": {
      id: "seaside-resort",
      name: locale === "tr" ? "Deniz Kenarı Resort" : "Seaside Resort",
      description:
        locale === "tr"
          ? "Plaja sıfır harika bir tatil köyü. Mavi bayraklı plajıyla denizin tadını çıkarın."
          : "An amazing resort right on the beach. Enjoy the sea with its blue flag beach.",
      price: currency === "USD" ? 200 : currency === "EUR" ? 180 : 6000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 4,
      location: locale === "tr" ? "Antalya, Türkiye" : "Antalya, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Özel Plaj", "Havuz", "Su Sporları", "Restoran"]
          : [
              "Free Wi-Fi",
              "Private Beach",
              "Pool",
              "Water Sports",
              "Restaurant",
            ],
    },
    "mountain-lodge": {
      id: "mountain-lodge",
      name: locale === "tr" ? "Dağ Evi" : "Mountain Lodge",
      description:
        locale === "tr"
          ? "Doğa ile iç içe sakin bir kaçamak. Ormanın içinde huzurlu bir tatil sizi bekliyor."
          : "A peaceful retreat in nature. A peaceful holiday in the forest awaits you.",
      price: currency === "USD" ? 120 : currency === "EUR" ? 110 : 3600,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 3,
      location: locale === "tr" ? "Bolu, Türkiye" : "Bolu, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Şömine", "Doğa Yürüyüşleri", "Restoran"]
          : ["Free Wi-Fi", "Fireplace", "Nature Walks", "Restaurant"],
    },
    "city-inn": {
      id: "city-inn",
      name: locale === "tr" ? "Şehir İçi Otel" : "City Inn",
      description:
        locale === "tr"
          ? "Şehir merkezinde uygun fiyatlı bir otel. İş seyahatleri için ideal."
          : "An affordable hotel in the city center. Ideal for business trips.",
      price: currency === "USD" ? 80 : currency === "EUR" ? 75 : 2500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 2,
      location: locale === "tr" ? "İzmir, Türkiye" : "Izmir, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Kahvaltı", "İş Merkezi"]
          : ["Free Wi-Fi", "Breakfast", "Business Center"],
    },
    "luxury-villa": {
      id: "luxury-villa",
      name: locale === "tr" ? "Lüks Villa" : "Luxury Villa",
      description:
        locale === "tr"
          ? "Özel havuzlu lüks bir villa. Ailenizle birlikte rahat bir tatil geçirin."
          : "A luxury villa with a private pool. Enjoy a comfortable holiday with your family.",
      price: currency === "USD" ? 300 : currency === "EUR" ? 280 : 9000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 5,
      location: locale === "tr" ? "Bodrum, Türkiye" : "Bodrum, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Özel Havuz", "Bahçe", "Barbekü"]
          : ["Free Wi-Fi", "Private Pool", "Garden", "Barbecue"],
    },
    "budget-hostel": {
      id: "budget-hostel",
      name: locale === "tr" ? "Bütçe Hosteli" : "Budget Hostel",
      description:
        locale === "tr"
          ? "Genç gezginler için uygun fiyatlı bir hostel. Sosyal bir atmosferde kalın."
          : "An affordable hostel for young travelers. Stay in a social atmosphere.",
      price: currency === "USD" ? 30 : currency === "EUR" ? 28 : 900,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 1,
      location: locale === "tr" ? "Marmaris, Türkiye" : "Marmaris, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Ortak Alan", "Kahvaltı"]
          : ["Free Wi-Fi", "Common Area", "Breakfast"],
    },
    "business-hotel": {
      id: "business-hotel",
      name: locale === "tr" ? "İş Oteli" : "Business Hotel",
      description:
        locale === "tr"
          ? "İş seyahatleri için ideal bir otel. Toplantı odaları ve iş merkezi mevcut."
          : "An ideal hotel for business trips. Meeting rooms and a business center available.",
      price: currency === "USD" ? 150 : currency === "EUR" ? 140 : 4500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 4,
      location: locale === "tr" ? "Ankara, Türkiye" : "Ankara, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Toplantı Odası", "İş Merkezi"]
          : ["Free Wi-Fi", "Meeting Room", "Business Center"],
    },
    "romantic-getaway": {
      id: "romantic-getaway",
      name: locale === "tr" ? "Romantik Kaçamak" : "Romantic Getaway",
      description:
        locale === "tr"
          ? "Sevgilinizle birlikte romantik bir tatil. Özel yemekler ve aktiviteler mevcut."
          : "A romantic holiday with your loved one. Special meals and activities available.",
      price: currency === "USD" ? 250 : currency === "EUR" ? 230 : 7500,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 5,
      location: locale === "tr" ? "Kapadokya, Türkiye" : "Cappadocia, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Özel Yemek", "Spa"]
          : ["Free Wi-Fi", "Private Meal", "Spa"],
    },
    "family-friendly-hotel": {
      id: "family-friendly-resort",
      name: locale === "tr" ? "Aile Dostu Resort" : "Family-Friendly Resort",
      description:
        locale === "tr"
          ? "Ailece tatil yapabileceğiniz bir tatil köyü. Çocuklar için aktiviteler mevcut."
          : "A resort where you can vacation with your family. Activities available for children.",
      price: currency === "USD" ? 180 : currency === "EUR" ? 170 : 5400,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      stars: 4,
      location: locale === "tr" ? "Fethiye, Türkiye" : "Fethiye, Turkey",
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Çocuk Kulübü", "Havuz"]
          : ["Free Wi-Fi", "Kids Club", "Pool"],
    },
    "eco-lodge": {
      id: "eco-lodge",
      name: locale === "tr" ? "Ekolojik Lodge" : "Eco Lodge",
      description:
        locale === "tr"
          ? "Doğa dostu bir konaklama seçeneği. Organik ürünler ve sürdürülebilir uygulamalar mevcut."
          : "An eco-friendly accommodation option. Organic products and sustainable practices available.",
      price: currency
        ? currency === "USD"
          ? 100
          : currency === "EUR"
          ? 95
          : 3000
        : 3000,
      currency: currency || "TRY",
      image: "https://picsum.photos/seed/picsum/600/400",
      location: locale === "tr" ? "Kaş, Türkiye" : "Kas, Turkey",
      stars: 3,
      amenities:
        locale === "tr"
          ? ["Ücretsiz Wi-Fi", "Organik Ürünler", "Doğa Yürüyüşleri"]
          : ["Free Wi-Fi", "Organic Products", "Nature Walks"],
    },
  };
  const hotel = hotels[id as keyof typeof hotels];

  if (!hotel) {
    return res.status(404).json({ error: "Hotel not found" });
  }

  res.status(200).json({ hotel });
}
