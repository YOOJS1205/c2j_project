import { atom } from "recoil";

export const productInfoAtom = atom({
  key: "productInfo",
  default: {
    imgUrl: "",
    productName: "",
    productPrice: "",
    productPlatform: "",
    purchaseDate: "",
  },
});
