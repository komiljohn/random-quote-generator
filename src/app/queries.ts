export interface Quote {
  id: number;
  author: string;
  quote: string;
}

export interface QuoteResponse {
  quotes: Quote[];
  limit: number;
  skip: number;
  total: number;
}

const LIMIT = 1;

export async function getRandomQuote(skip: number): Promise<QuoteResponse> {
  const params = new URLSearchParams();

  params.set("limit", String(LIMIT));
  if (skip) params.set("skip", String(skip));

  const response = await fetch(
    `https://dummyjson.com/quotes?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const quote = await response.json();
  return quote;
}
