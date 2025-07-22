"use client";

import { useQuery } from "@tanstack/react-query";
import { RefreshCcwIcon } from "lucide-react";
import { useState } from "react";

import { getRandomQuote, QuoteResponse } from "@/app/queries";

import LoadFailQuote from "./LoadFailQuote";
import LoadingStars from "./LoadingStars";
import RateStars from "./RateStars";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function DisplayQuotes({
  initialData,
  defaultSkip,
}: {
  initialData: QuoteResponse;
  defaultSkip: number;
}) {
  const [skip, setSkip] = useState(defaultSkip);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["get-quotes", skip],
    queryFn: () => getRandomQuote(skip),
    initialData: skip === defaultSkip ? initialData : undefined,
  });

  const quote = data?.quotes?.[0];

  const updateSkip = () => {
    setSkip(Math.floor(Math.random() * initialData.total));
  };

  if (isError) return <LoadFailQuote />;
  return (
    <div className="flex flex-col justify-center max-w-5xl mx-12 max-md:mx-4 w-full">
      <h2 className="text-4xl font-medium mx-auto mb-5 max-lg:text-3xl max-md:text-xl">
        Random quote generator
      </h2>
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
        <div className="p-4">
          {!isFetching && quote ? (
            <RateStars id={quote.id} />
          ) : (
            <LoadingStars />
          )}
        </div>
      </div>
      {!isFetching && !quote && (
        <div className="bg-card border rounded-lg p-8 md:p-12 shadow-lg text-center">
          No quote found
        </div>
      )}
      <Button
        onClick={updateSkip}
        isLoading={isFetching}
        leftIcon={<RefreshCcwIcon />}
        className="w-fit mx-auto mt-3"
      >
        Get random quote
      </Button>
    </div>
  );
}
