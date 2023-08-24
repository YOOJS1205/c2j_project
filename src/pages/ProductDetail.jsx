import React from "react";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";
import { useRecoilValue } from "recoil";
import { newProductInfoAtom } from "../recoil/NewProductInfoAtom";

export default function ProductDetail() {
  const newProductInfo = useRecoilValue(newProductInfoAtom);
  console.log(newProductInfo);

  const editProductDescription = (productDescription) => {
    return productDescription.replaceAll("\n", "<br />");
  };
  return (
    <DefaultLayout>
      <img
        src={newProductInfo.productImgUrl}
        width={480}
        height={480}
        alt="상품 이미지"
      />
      <ProductInfoContainer>
        <ProductName>{newProductInfo.productName}</ProductName>
        <ProductPrice>{newProductInfo.productPrice}원</ProductPrice>
        <ProductDescription
          dangerouslySetInnerHTML={{
            __html: editProductDescription(newProductInfo.productDescription),
          }}
        />
      </ProductInfoContainer>
    </DefaultLayout>
  );
}

const ProductInfoContainer = styled.section`
  padding: 0 5%;
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 12px;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p``;
