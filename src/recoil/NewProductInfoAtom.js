import { atom } from "recoil";

export const newProductInfoAtom = atom({
  key: "new-product",
  default: {
    productName: "",
    productImgUrl: "",
    productPrice: "",
    productDescription: "",
  },
});
