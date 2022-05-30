import { atom } from "recoil";

export const Username = atom<string>({
  default: "",
  key: "getUserName",
});
