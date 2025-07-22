import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { DisplayQuotes } from "@/components/DisplayQuotes";
import OfflineBar from "@/components/OfflineBar";
import { getQueryClient } from "@/lib/getQueryClient";

import { getRandomQuote } from "./queries";

const DEFAULT_SKIP = 0;

export default async function Home() {
  const queryClient = getQueryClient();

  const initialData = await queryClient.fetchQuery({
    queryKey: ["get-quotes", DEFAULT_SKIP],
    queryFn: () => getRandomQuote(DEFAULT_SKIP),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OfflineBar />
      <DisplayQuotes initialData={initialData} defaultSkip={DEFAULT_SKIP} />
    </HydrationBoundary>
  );
}
