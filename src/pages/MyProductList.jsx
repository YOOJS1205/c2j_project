import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { productInfoAtom } from "../recoil/ProductInfoAtom";

import DefaultLayout from "../layout/DefaultLayout";
import ProductItem from "../components/myProductList/ProductItem";
import { myProductList } from "../const/myProductList";

export default function MyProductList() {
  const productInfo = useRecoilValue(productInfoAtom);
  console.log(productInfo);
  return (
    <DefaultLayout isFooter={false}>
      <ProductContainer>
        {myProductList.map((item) => (
          <ProductItem
            key={item.id}
            imgUrl={item.imgUrl}
            productName={item.productName}
            productPrice={item.productPrice}
            productPlatform={item.productPlatform}
            purchaseDate={item.purchaseDate}
          />
        ))}
      </ProductContainer>
      <Button enabled={productInfo.productName}>상품등록</Button>
    </DefaultLayout>
  );
}

const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 5%;
`;

const Button = styled.button`
  background-color: ${({ enabled }) =>
    enabled ? "#0dcc5a" : "rgba(0, 0, 0, 0.3)"};
  color: ${({ enabled }) => (enabled ? "black" : "white")};
  width: calc(480px * 0.9);
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  border: none;
  padding: 12px 0;
  border-radius: 8px;
  font-weight: 600;
`;
