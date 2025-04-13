export enum Language {
  EN = "en",
  TR = "tr",
}

export enum Currency {
  USD = "USD",
  EUR = "EUR",
  TRY = "TRY",
}

export enum Symbols {
  USD = "$",
  EUR = "€",
  TRY = "₺",
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  stars: number;
  location: string;
  amenities?: string[];
}

export interface Content {
  Common: Record<string, string>;
  HomePage: Record<string, string>;
}
