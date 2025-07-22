"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      leftIcon={isDark ? <Moon /> : <Sun />}
      className="absolute top-4 right-4"
      aria-label={`Switch to ${isDark ? "light" : "dark"}`}
    ></Button>
  );
}
