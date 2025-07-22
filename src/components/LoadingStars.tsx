import { StarIcon } from "lucide-react";

export default function LoadingStars() {
  return (
    <div className="flex gap-3 px-1.5">
      {Array.from({ length: 5 }).map((_, idx) => (
        <StarIcon
          key={idx}
          size={16}
          className="text-muted-foreground/20 animate-pulse fill-muted-foreground/20"
        />
      ))}
    </div>
  );
}
