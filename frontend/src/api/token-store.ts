import { create } from "zustand";

type TokenStore = {
  exp: number;
  token: string;
  setToken: (newToken: string) => void;
  setExp: (newExp: number) => void;
};

export const tokenStore = create<TokenStore>((set) => ({
  exp: -1,
  token: "",
  setToken: (newToken: string) => set({ token: newToken }),
  setExp: (newExp: number) => set({ exp: newExp }),
}));
