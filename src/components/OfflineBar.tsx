"use client";

import { WifiOffIcon } from "lucide-react";
import React from "react";

import useOnlineStatus from "@/hooks/useOffline";

export default function OfflineBar() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-2 flex items-center justify-center gap-2">
          <WifiOffIcon />
          <span>You are currently offline</span>
        </div>
      )}
    </div>
  );
}
