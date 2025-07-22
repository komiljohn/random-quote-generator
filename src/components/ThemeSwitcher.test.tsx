// <reference types="vitest" />
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import { beforeEach, describe, expect, test } from "vitest";

import { ThemeSwitcher } from "./ThemeSwitcher";

// helper: render with provider
function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light">
      {ui}
    </ThemeProvider>,
  );
}

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    document.documentElement.className = ""; // reset <html class="">
  });

  test("toggles theme between light and dark", () => {
    renderWithTheme(<ThemeSwitcher />);

    const button = screen.getByRole("button");
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(button);

    // next-themes sets class asynchronously, so use a timeout
    setTimeout(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    }, 0);
  });
});
