import { atom } from "recoil";

export const token = atom({
    key: "token",
    default: undefined,
});

export const refresh = atom({
  key: "refresh",
  default: undefined,
});