import { create } from "zustand";
import { persist } from "zustand/middleware";

type Rate = {
  id: number;
  rate: number;
};

type RateStore = {
  rates: Rate[];
  addRate: (a: Rate) => void;
};

export const useRateStore = create<RateStore>()(
  persist(
    (set, get) => ({
      rates: [],
      addRate: (payload) =>
        set({
          rates: get().rates.some((i) => i.id === payload.id)
            ? get().rates.map((i) =>
                i.id === payload.id ? { ...i, rate: payload.rate } : i,
              )
            : [...get().rates, payload],
        }),
    }),
    {
      name: "rate",
    },
  ),
);
