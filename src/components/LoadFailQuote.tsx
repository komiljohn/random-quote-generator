import Link from "next/link";

import { buttonVariants } from "./ui/button";

export default function LoadFailQuote() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6 shadow flex flex-col justify-center gap-3">
        <p className="text-destructive text-lg font-semibold">
          Failed to load quiz. Please contact support.
        </p>
        <Link className={buttonVariants({ variant: "default" })} href="#">
          Contact support
        </Link>
      </div>
    </div>
  );
}
