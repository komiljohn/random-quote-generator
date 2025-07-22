"use client";

import { LinkIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "./ui/button";

export default function ShareQuoteButton({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  const [copied, setCopied] = useState(false);

  const fullText = `"${quote}" — ${author}`;

  const supportNativeSharing =
    typeof navigator !== "undefined" && typeof navigator.share === "function";

  const handleShare = async () => {
    if (supportNativeSharing) {
      try {
        await navigator.share({
          title: author,
          text: fullText,
          url: window.location.href,
        });
      } catch (err) {
        if (typeof err === "object" && err !== null && "name" in err) {
          const errorName = (err as { name: string }).name;
          if (errorName === "AbortError") {
            // Ignoring error if user just cancels
            return;
          }
        }
        toast.error("Sharing failed");
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${fullText} \n${window.location.href}`,
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        toast.error("Fallback copy failed");
      }
    }
  };

  return (
    <Button onClick={handleShare} variant="outline" leftIcon={<LinkIcon />}>
      {supportNativeSharing ? "Share" : copied ? "Copied!" : "Copy to Share"}
    </Button>
  );
}
