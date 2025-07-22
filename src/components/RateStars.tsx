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
      {[1, 2, 3, 4, 5].map((count) => (
        <Button
          key={count}
          variant="ghost"
          onClick={() => handleStarRating(count)}
          size="sm"
          className="!px-1.5"
        >
          <StarIcon
            size={24}
            className={
              count <= (activeRate?.rate || 0)
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }
          />
        </Button>
      ))}
      {activeRate && (
        <span className="text-xs text-muted-foreground ml-2">
          {activeRate.rate}/5
        </span>
      )}
    </div>
  );
}
