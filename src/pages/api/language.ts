import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { locale } = req.query;
  try {
    const messages = await import(`../../../locales/${locale}.json`);
    res.status(200).json(messages.default);
  } catch (error) {
    res.status(500).json({ error: "Locale file not found" });
  }
}
