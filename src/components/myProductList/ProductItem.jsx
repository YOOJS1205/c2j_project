import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { productInfoAtom } from "../../recoil/ProductInfoAtom";

import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

export default function ProductItem({
  imgUrl,
  productName,
  productPrice,
  productPlatform,
  purchaseDate,
  platform,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const setProductInfo = useSetRecoilState(productInfoAtom);
  const resetProductInfo = useResetRecoilState(productInfoAtom);

  const handleClickCheckBox = () => {
    setIsClicked((prev) => !prev);
    if (!isClicked) {
      setProductInfo((prev) => ({
        ...prev,
        imgUrl,
        productName,
        productPrice,
        productPlatform,
        purchaseDate,
        platform,
      }));
    } else {
      resetProductInfo();
    }
  };
  return (
    <Container>
      <CheckBoxContainer onClick={handleClickCheckBox}>
        {isClicked ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
      </CheckBoxContainer>
      <ProductItemContainer>
        <img src={imgUrl} alt="상품 이미지" />
        <ProductInfo>
          <div>
            <p>{purchaseDate}</p>
            <p>{productName}</p>
            <p>{productPrice}원</p>
          </div>
        </ProductInfo>
        <LogoContainer>
          <img src={productPlatform} alt="플랫폼 로고" />
        </LogoContainer>
      </ProductItemContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const CheckBoxContainer = styled.article`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ProductItemContainer = styled.section`
  width: calc(100% - 20px);
  & > img {
    width: 96px;
    height: 96px;
    border-radius: 8px;
  }

  display: flex;
  gap: 8px;
  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const ProductInfo = styled.article`
  display: flex;
  font-size: 14px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p:first-child {
    margin-bottom: -20px;
  }

  p:last-child {
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 4px;
  }
`;

const LogoContainer = styled.section`
  margin-left: auto;
  img {
    width: 44px;
    height: 18px;
  }
`;
