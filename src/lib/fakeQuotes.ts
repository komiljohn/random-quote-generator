import { QuoteResponse } from "@/app/queries";

export const fakeQuoteResponse: QuoteResponse = {
  limit: 1,
  skip: 0,
  total: 10,
  quotes: [
    {
      id: 10001,
      author: "Albert Einstein",
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      id: 10002,
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      id: 10003,
      author: "Steve Jobs",
      quote: "Innovation distinguishes between a leader and a follower.",
    },
    {
      id: 10004,
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    { id: 10005, author: "Yoda", quote: "Do or do not. There is no try." },
    {
      id: 10006,
      author: "Socrates",
      quote: "The only true wisdom is in knowing you know nothing.",
    },
    {
      id: 10007,
      author: "Aristotle",
      quote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    },
    { id: 10008, author: "Rumi", quote: "What you seek is seeking you." },
    {
      id: 10009,
      author: "Buddha",
      quote: "The mind is everything. What you think, you become.",
    },
    {
      id: 10010,
      author: "Confucius",
      quote: "It does not matter how slowly you go as long as you do not stop.",
    },
  ],
};
