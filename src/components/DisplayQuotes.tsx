"use client";

import { useQuery } from "@tanstack/react-query";
import { RefreshCcwIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { getRandomQuote, QuoteResponse } from "@/app/queries";
import useOnlineStatus from "@/hooks/useOffline";
import { fakeQuoteResponse } from "@/lib/fakeQuotes";

import LoadFailQuote from "./LoadFailQuote";
import LoadingStars from "./LoadingStars";
import RateStars from "./RateStars";
import ShareQuoteButton from "./ShareQuoteButton";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function DisplayQuotes({
  initialData,
  defaultSkip,
}: {
  initialData: QuoteResponse;
  defaultSkip: number;
}) {
  const isOnline = useOnlineStatus();

  const [skip, setSkip] = useState(defaultSkip);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["get-quotes", skip],
    queryFn: () => getRandomQuote(skip),
    initialData: skip === defaultSkip ? initialData : undefined,
    enabled: isOnline,
  });

  const computedData = useMemo(() => {
    if (isOnline) {
      return data;
    } else {
      const skipComputed = skip > fakeQuoteResponse.total ? defaultSkip : skip;
      return {
        ...fakeQuoteResponse,
        quotes: fakeQuoteResponse.quotes.slice(skipComputed, skipComputed + 1),
      };
    }
  }, [isOnline, data, skip, defaultSkip]);

  const updateSkip = () => {
    const random = Math.floor(
      Math.random() * (isOnline ? initialData.total : fakeQuoteResponse.total),
    );
    setSkip(random);
  };

  const quote = computedData?.quotes?.[0];

  if (isError) return <LoadFailQuote />;
  return (
    <div className="flex flex-col justify-center max-w-5xl mx-12 max-md:mx-4 w-full">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Daily inspirations
        </h1>
        <p className="text-gray-600 text-lg">
          Discover wisdom from great minds
        </p>
      </div>
      <div className="bg-card border rounded-lg p-8 md:p-12 shadow-lg">
        <div className="text-center space-y-6 mb-5">
          {isFetching ? (
            <div>
              <Skeleton className="h-11 max-md:h-7 w-full mb-[18px] max-md:mb-3" />
              <Skeleton className="h-11 max-md:h-7 w-3/5 mx-auto mb-6" />
            </div>
          ) : (
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-foreground">
              {quote?.quote ? `"${quote.quote}"` : "Missing quote"}
            </blockquote>
          )}
          {isFetching ? (
            <Skeleton className="h-5 w-[250px] mx-auto" />
          ) : (
            <cite className="text-base md:text-lg text-muted-foreground font-medium">
              — {quote?.author ? quote.author : "Unknown author"}
            </cite>
          )}
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            {!isFetching && quote ? (
              <RateStars id={quote.id} />
            ) : (
              <LoadingStars />
            )}
          </div>
          <div>
            {!isFetching && quote ? (
              <ShareQuoteButton quote={quote.quote} author={quote.author} />
            ) : (
              <Skeleton className="h-9 w-[100px]" />
            )}
          </div>
        </div>
      </div>
      <Button
        onClick={updateSkip}
        isLoading={isFetching}
        leftIcon={<RefreshCcwIcon />}
        className="w-fit mx-auto mt-3"
        size="lg"
      >
        Generate
      </Button>
    </div>
  );
}
