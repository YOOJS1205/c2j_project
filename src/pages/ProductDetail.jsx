import React from "react";
import styled from "styled-components";
import DefaultLayout from "../layout/DefaultLayout";
import { useRecoilValue } from "recoil";
import { newProductInfoAtom } from "../recoil/NewProductInfoAtom";
import { productInfoAtom } from "../recoil/ProductInfoAtom";
import { GrShare } from "react-icons/gr";

export default function ProductDetail() {
  const newProductInfo = useRecoilValue(newProductInfoAtom);
  const productInfo = useRecoilValue(productInfoAtom);

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
        <div>
          <div>
            <ProductName>{newProductInfo.productName}</ProductName>
            <ProductPrice>{newProductInfo.productPrice}원</ProductPrice>
          </div>
          <a href={productInfo.url} target="_blank" rel="noreferrer">
            <img src={productInfo.productPlatform} alt="플랫폼 로고" />
            <GrShare />
          </a>
        </div>
        <ProductDescription
          dangerouslySetInnerHTML={{
            __html: editProductDescription(newProductInfo.productDescription),
          }}
        />
      </ProductInfoContainer>
      <img
        src="/asset/productDetail.jpeg"
        alt="상품 상세 컨텐츠 사진"
        width={480}
        height={650}
        style={{ marginTop: "20px" }}
      />
      <img
        src="/asset/productDetailButton.jpeg"
        alt="상품 상세 하단 이미지"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translate(-50%)",
        }}
        width={480}
      />
    </DefaultLayout>
  );
}

const ProductInfoContainer = styled.section`
  padding: 0 5%;

  & > div {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      gap: 6px;

      img {
        width: 48px;
        height: 24px;
      }

      svg {
        margin-top: 5px;
        width: 14px;
        height: 14px;
      }
    }
  }
`;

const ProductName = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p``;
