import { StarIcon } from "lucide-react";
import { useMemo } from "react";

import { useRateStore } from "@/store/useRateStore";

import { Button } from "./ui/button";

export default function RateStars({ id }: { id: number }) {
  const { addRate, rates } = useRateStore();

  const handleStarRating = (count: number) => {
    addRate({ id, rate: count });
  };

  const activeRate = useMemo(() => {
    return rates.find((i) => i.id === id);
  }, [rates, id]);

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Button
          key={idx}
          variant="ghost"
          onClick={() => handleStarRating(idx + 1)}
          size="sm"
          className="!px-1.5"
          aria-label={`Rate ${idx + 1} star`}
        >
          <StarIcon
            size={24}
            className={
              idx + 1 <= (activeRate?.rate || 0)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }
          />
        </Button>
      ))}
    </div>
  );
}
